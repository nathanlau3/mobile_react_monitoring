import { useEffect } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, BackHandler, Alert } from 'react-native';
import ScreenHeaderBtn from '../common/header/ScreenHeaderBtn';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../main/mainMenu/mainScreen'
import MapsScreen from '../main/maps/mapScreen'
import { COLORS, SIZES } from "../../constants/theme";
import { icons } from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'

const MainName = 'Main'
const MapsName = 'Maps'

const Tab = createBottomTabNavigator()

export default function HomeScreen({ navigation }) {
    useEffect(() => {
        const backAction = () => {
          Alert.alert('Hold on!', 'Are you sure you want to logout?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.addEventListener()},
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);
    return (
        <Tab.Navigator                                
        initialRouteName={MainName}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name
                
                if (rn === MainName) {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (rn === MapsName) {
                    iconName = focused ? 'list' : 'list-outline'
                }
                //You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color}/>
            }                    
        })}                
        >            
        <Tab.Screen options={{
            headerShown: false,
            // headerStyle: {backgroundColor: COLORS.lightWhite},
            // headerShadowVisible: false,
            // headerLeft: () => (
            // <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
            // ),
            // headerRight: () => (
            // <ScreenHeaderBtn dimension="100%"/>
            // ),
            // headerTitle: ""
        }} name={MainName} component={MainScreen}/>
        <Tab.Screen options={{
            headerShown: false
        }} name={MapsName} component={MapsScreen}/>
    </Tab.Navigator>
    );
}