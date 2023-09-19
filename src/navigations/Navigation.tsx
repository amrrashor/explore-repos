import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//COMPONENTS
import { ExploreRepos, Repos } from '../components';

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Explore' component={ExploreRepos} />
                <Stack.Screen name='Repos' component={Repos} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation