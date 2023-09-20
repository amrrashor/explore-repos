import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList , ActivityIndicator} from 'react-native';
import { fetchRepos } from '../../store/slices/repoSlice';
import SingleRepo from '../SingleRepo/SingleRepo';
import { SingleRepoProps } from '../../types';
import { Container, StyledText } from '../StyledComponents.style';

const ExploreRepos = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.repos);
  const status = useSelector((state) => state.repos.status);
  const error = useSelector((state) => state.repos.error);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

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

  return (
    <Container>
      <StyledText black mb mt fontXL>Explore Popular</StyledText>
      <FlatList
        data={repos}
        renderItem={renderRepoItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ height: 100 }} />}
      />
    </Container>
  );
};

export default ExploreRepos;
