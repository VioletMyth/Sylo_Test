import {createStackNavigator} from  'react-navigation-stack';
import {createAppContainer} from  'react-navigation';
import Home from '../Components/Home';
import Information from '../Components/Information';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
        }
    },
    Information: {
        screen: Information,
        navigationOptions: {
            headerShown: false,
        }
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);