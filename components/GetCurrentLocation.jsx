import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, View, Alert } from 'react-native';
import * as Location from 'expo-location'; 

const GetCurrentLocation = () => {
    async function GetLocation(){
        let {status} = await Location.requestForegroundPermissionsAsync;

        if ( status !== "granted"){
            Alert.alert(
                "Permission denied",
                "Allow to use location",
                [{text:"OK"}],
                {cancelable: false }
            );
        }

        let { coords } = await Location.requestForegroundPermissionsAsync();

        if (coords) {
            const { latitude, longitude} = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude,
            });

            for(let items of response){
                let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
                alert( address)
            }

        }
    }
  return (
    <View>
        <Button title="get Location" onPress={GetLocation}/>
        <StatusBar style='auto'/>
    </View>
  )
}

export default GetCurrentLocation
