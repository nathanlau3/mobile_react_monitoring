import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import  MapView, {Marker} from 'react-native-maps';
import style from './mapScreenStyle'
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location'
import { db } from '../../../config/firebase';
import { push, ref, set, child, get, update } from 'firebase/database'
import { auth } from '../../../config/firebase';

export default MapsScreen = () => {
    const [location, setLocation] = useState(null)    
    const [errorMsg, setErrorMsg] = useState(null)    
    let check = false
    const dbRef = ref(db)
    get(child(dbRef, `tracking-user/${auth.currentUser.uid}`)).then((ss) => {
      if (ss.exists()) {
        check = true
      }
    })
    useEffect(() => {
        (async () => {          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }          
          Location.watchPositionAsync({
            accuracy: Location.Accuracy.High,
            timeInterval: 1000,
            distanceInterval: 0
            
          },
            location => {
                console.log('update location!', location.coords.latitude, location.coords.longitude)
                setLocation(location)       
                if (check) {
                  update(ref(db, `/tracking-user/${auth.currentUser.uid}`), {                    
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                  })
                }
                else {
                  const addRef = ref(db, `/tracking-user/${auth.currentUser.uid}`)                                   
                  set(addRef, {                                            
                      lat: location.coords.latitude,
                      lng: location.coords.longitude
                  })
                }                
            });          
          
        })()                
      }, []);

      let text = 'Waiting..'
      if (errorMsg) {
        text = errorMsg
      } else if (location) {
        text = JSON.stringify(location)
      }
    return (          
        <View style={style.container}>
            <MapView 
                style={style.map}
                initialRegion={{
                latitude: -6.244400028626948,
                longitude: 106.85610826915519,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                <Marker 
                    coordinate={{latitude: location != null ? location.coords.latitude : -6.244400028626948, longitude: location != null ? location.coords.longitude : 106.85610826915519}}
                />
                </MapView>
            <StatusBar style='auto'/>
        </View>
    );
}