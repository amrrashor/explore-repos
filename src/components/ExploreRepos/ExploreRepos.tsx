import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { RootState } from '../../store/store'; // Update the import path
import { fetchRepos } from '../../store/slices/repoSlice';

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

  const renderRepoItem = ({ item }: { item: { name: string; id: number; full_name: string } }) => (
    <View key={item.id}>
      <Text style={{ color: '#000' }}>{item.name}</Text>
      <Text style={{ color: '#000' }}>{item.full_name}</Text>
    </View>
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
