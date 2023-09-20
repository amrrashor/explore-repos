import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { Container, StyledText, DropDownStyle, dropDownContainerStyle } from '../StyledComponents.style';
import { fetchRepos } from '../../store/slices/repoSlice';
import SingleRepo from '../SingleRepo/SingleRepo';
import { SingleRepoProps } from '../../types';
import { FilterContainer, PickerContainer } from './Repos.style';
import { useDispatch, useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import { convertDateFormat } from '../../utils/helpers';

const Repos = () => {
    const dispatch = useDispatch();
    const repos = useSelector((state) => state.repos.repos);
    const status = useSelector((state) => state.repos.status);
    const error = useSelector((state) => state.repos.error);

    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [items, setItems] = useState([]); // Initialize with an empty array

    useEffect(() => {
        dispatch(fetchRepos()).then(() => {
            // Extract unique dates from the fetched repos and format them using convertDateFormat
            const uniqueDates = Array.from(new Set(repos.map(repo => convertDateFormat(repo.created_at))));
            setItems(uniqueDates.map(date => ({ label: date, value: date })));
        });
    }, [dispatch]);

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

    // Convert the selectedDate to the original format before filtering
    const originalFormatSelectedDate = items.find(item => item.value === selectedDate)?.value;

    // Filter the repos based on the selected date
    const filteredRepos = originalFormatSelectedDate
        ? repos.filter(repo => convertDateFormat(repo.created_at) === originalFormatSelectedDate)
        : repos;

    return (
        <Container>
            <StyledText black mb mt fontXL>Repositories</StyledText>
            <FilterContainer>
                <StyledText black>Filter by Date</StyledText>
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
