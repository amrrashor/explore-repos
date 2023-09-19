import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { API } from '../../utils/API';
const ExploreRepos = () => {
  const [repo, setRepo] = useState([]);


  const fetchMovies = async () => {
        try {
        const response = await fetch(API);
        const data = await response.json();
        setRepo(data.items);
        } catch (error) {
        console.error("Error fetching movies:", error);
        }
  };
  

  useEffect(() => {
        fetchMovies();
  }, []);
  
  const renderMovieItem = ({ item }: { item: { name: string, id: number, full_name:string } }) => (
  <View key={item.id}>
      <Text style={{ color: '#000' }}>{item.name}</Text>
      <Text style={{ color: '#000' }}>{item.full_name}</Text>
  </View>
);

  return (
      <View>
      {/* <Text style={{ color: 'black' }}>Explore List of Repos</Text> */}
      
      <FlatList
        data={repo}
        renderItem={renderMovieItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ExploreRepos