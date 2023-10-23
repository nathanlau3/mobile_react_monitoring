import { View, Text, ScrollView, SafeAreaView } from "react-native"
import { useState, useEffect } from "react"
import { useRouter } from "expo-router";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { requestLocationPermission } from "../hook/permission";
import { auth } from "../config/firebase";
//screens
import HomeScreen from '../components/home/homeScreen'
import AuthScreen from '../components/auth/authLogin'

//screen names
const Stack = createNativeStackNavigator()
const Home = () => {    
    const router = useRouter()
    useEffect(() => {
        const permission = async () => {
            await requestLocationPermission()
        }        
        permission()
    })
    return (        
        <NavigationContainer
            independent={true}>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false, headerBackVisible: false}} name="AuthScreen" component={AuthScreen}/>
                <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen}/>
            </Stack.Navigator>           
        </NavigationContainer>
    )
}
export default Home;