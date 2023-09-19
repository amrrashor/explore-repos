import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { fetchRepos } from '../../store/slices/repoSlice';
import SingleRepo from '../SingleRepo/SingleRepo';
import { SingleRepoProps } from '../../types';



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
    <View>
      <FlatList
        data={repos}
        renderItem={renderRepoItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExploreRepos;
