import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View, TouchableOpacity} from 'react-native';
import { Container, StyledText, DropDownStyle, dropDownContainerStyle, ModalStyles } from '../StyledComponents.style';
import { fetchRepos } from '../../store/slices/repoSlice';
import SingleRepo from '../SingleRepo/SingleRepo';
import { SingleRepoProps } from '../../types';
import { FilterContainer, LanguageContainer, PickerContainer, ModalTitle, ModalSearch, StyledSearchField, LanguageItem } from './Repos.style';
import { useDispatch, useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import { convertDateFormat } from '../../utils/helpers';
import { CloseIcon, DownArrow, SearchIcon } from '../../utils/icons';
import Modal from "react-native-modal";


const Repos = () => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repos.repos);
    const status = useSelector((state) => state.repos.status);
    const error = useSelector((state) => state.repos.error);

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [languages, setLanguages] = useState([]); // Initialize with an empty array
    const [items, setItems] = useState([]); // Initialize with an empty array
    const [searchQuery, setSearchQuery] = useState('');
    const [languagesLoaded, setLanguagesLoaded] = useState(false);


    useEffect(() => {
    // Check if languages have already been loaded
    if (!languagesLoaded) {
        dispatch(fetchRepos()).then(() => {
            // Extract unique dates from the fetched repos and format them using convertDateFormat
            const uniqueDates = Array.from(new Set(repos.map(repo => convertDateFormat(repo.created_at))));
            const uniqueLanguages = Array.from(new Set(repos.map(repo => repo.language)));
            setItems(uniqueDates.map(date => ({ label: date, value: date })));
            setLanguages(uniqueLanguages.map(lang => ({ label: lang, value: lang })));
            setLanguagesLoaded(true); // Mark languages as loaded
        });
    }
}, [dispatch, languagesLoaded, repos]);


    if (status === 'loading') {
        return <ActivityIndicator size="large" style={{ flex: 1 }} />;
    }

    if (status === 'failed') {
        return <StyledText black>Error: {error}</StyledText>;
    }

    const renderRepoItem = ({ item }: { item: SingleRepoProps }) => (
        <SingleRepo
            key={item.id}
            {...item}
            Repos={true}
        />
    );

    const renderLanguage = ({ item }: { language: string }) => {
        // Check if item.language is null or undefined
        if (!item.language) {
            return null;
        }

        // Apply the language filter based on the search query
        if (searchQuery && !item.language.toLowerCase().includes(searchQuery.toLowerCase())) {
            return null;
        }

        return (
            <LanguageItem onPress={() => {
            setSelectedLanguage(item.language);
            setOpenModal(false); // Close the language modal after selection
            }}>
            <StyledText fontM black>{item.language}</StyledText>
            </LanguageItem>
        );
    };




    // Convert the selectedDate to the original format before filtering
    const originalFormatSelectedDate = items.find(item => item.value === selectedDate)?.value;

    // Filter the repos based on the selected date and language
    const filteredRepos = repos.filter(repo => {
        const formattedDate = convertDateFormat(repo.created_at);
        return (!originalFormatSelectedDate || formattedDate === originalFormatSelectedDate) && (!selectedLanguage || repo.language === selectedLanguage);
    });

    return (
        <Container>
            <StyledText black mb mt fontXL>Repositories</StyledText>
            <FilterContainer>
                <PickerContainer>
                    <LanguageContainer  onPress={() => {setOpenModal(!openModal);setLanguages([])}}>
                        <StyledText fontM gray>Language: {selectedLanguage}</StyledText>
                        <DownArrow />
                    </LanguageContainer> 

                    <Modal
                        style={ModalStyles}
                        isVisible={openModal}
                        onBackdropPress={() => {
                            setOpenModal(false);
                            setSearchQuery(''); 
                        }}
                    >
                        <ModalTitle>
                            <StyledText fontM black>Select Language</StyledText>
                            <TouchableOpacity onPress={() => {setOpenModal(!openModal);setLanguages([])}}>
                                <CloseIcon />
                            </TouchableOpacity>
                        </ModalTitle>

                        <ModalSearch>
                            <StyledSearchField
                                placeholder='Filter Languages'
                                onChangeText={(text: string) => setSearchQuery(text)}
                            />
                            <SearchIcon color='#7B848D' />
                        </ModalSearch>

                        <FlatList
                            data={repos}
                            renderItem={renderLanguage}
                            keyExtractor={(item) => item.value}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={() => <View style={{ height: 150 }} />}
                        />

                    </Modal>
                </PickerContainer>
                <PickerContainer>
                    <DropDownPicker
                        style={DropDownStyle}
                        open={open}
                        value={selectedDate}
                        items={items}
                        setOpen={setOpen}
                        setValue={setSelectedDate}
                        setItems={setItems}
                        placeholder={'Select Date'}
                        placeholderStyle={{ color: 'grey' }}
                        dropDownContainerStyle={dropDownContainerStyle}
                    />
                </PickerContainer>
            </FilterContainer>

            <FlatList
                data={filteredRepos}
                renderItem={renderRepoItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => <View style={{ height: 150 }} />}
            />
        </Container>
    )
}

export default Repos;
