import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { fetchRepos } from '../../store/slices/repoSlice';
import SingleRepo from '../SingleRepo/SingleRepo';
import { SingleRepoProps } from '../../types';

import { Container, Title } from '../StyledComponents.style';

interface props {
  item: SingleRepoProps
}

const ExploreRepos = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.repos);
  const status = useSelector((state) => state.repos.status);
  const error = useSelector((state) => state.repos.error);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  const renderRepoItem = ( {item} : { item :props }) => (
    <SingleRepo key={item.id} {...item} />
  );

  return (
    <Container>
      <Title>Explore Popular</Title>
      <FlatList
        data={repos}
        renderItem={renderRepoItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default ExploreRepos;
