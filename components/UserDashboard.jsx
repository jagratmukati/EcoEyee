import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Image1 = require('../assets/LodgeComplain.png');
const Image2 = require('../assets/history.png');
const UserDashboard = () => {
  return (
    <>
    <View style={styles.vieww}>
      <Image source={Image1} style={styles.image}/>
       <View><Text style={styles.f}>Lodge Complant</Text></View>
    </View>
    <View style={styles.vieww}>   
      <Image source={Image2} style={styles.image}/>
       <View><Text>Complaint History</Text></View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  image: {
    height: 70,
    width: 70,
    backgroundColor: 'white',
    padding: 3,
    borderColor: 'red',
    marginBottom: 2,
  },

  vieww: {
    padding : 5,
  },

  f:{
   
  },

  box: {
    
  },
});

export default UserDashboard
