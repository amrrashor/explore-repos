import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList , ActivityIndicator} from 'react-native';
import { fetchRepos } from '../../store/slices/repoSlice';
import SingleRepo from '../SingleRepo/SingleRepo';
import { SingleRepoProps } from '../../types';
import { Container, StyledText, DropDownStyle, dropDownContainerStyle } from '../StyledComponents.style';
import DropDownPicker from 'react-native-dropdown-picker';


const ExploreRepos = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.repos);
  const status = useSelector((state) => state.repos.status);
  const error = useSelector((state) => state.repos.error);
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
        {label: '10', value: '10'},
        {label: '50', value: '50'},
        {label: '100', value: '100'},
  ]);
  const [filteredRepos, setFilteredRepos] = useState(repos);


  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  useEffect(() => {
    // Filter the repos based on the selected value
    if (value) {
      const numberOfReposToShow = parseInt(value, 10);
      setFilteredRepos(repos.slice(0, numberOfReposToShow));
    } else {
      // If no value is selected, show all repos
      setFilteredRepos(repos);
    }
  }, [value, repos]);

  if (status === 'loading') {
    return <ActivityIndicator size="large" style={{flex:1}} />;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  const renderRepoItem = ( {item} : { item :SingleRepoProps }) => (
    <SingleRepo
      key={item.id}
      {...item}
      Explore={true}
    />
  );
  console.log('repos', repos.length, filteredRepos)
  return (
    <Container>
      <StyledText black mb mt fontXL>Explore Popular</StyledText>

      <DropDownPicker
        style={DropDownStyle}
        open={open}
        value={`View: ${value}`}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={'View: op 10'}
        placeholderStyle={{ color: 'grey' }}
        dropDownContainerStyle={dropDownContainerStyle}
      />

      <FlatList
        data={filteredRepos}
        renderItem={renderRepoItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ height: 150 }} />}
      />
    </Container>
  );
};

export default ExploreRepos;
