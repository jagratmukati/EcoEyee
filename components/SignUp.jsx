import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const SignUp = () => {
    OnClickEvent = () => {
        
    }
  return (
    <View>
        <TextInput
        style={styles.input}
        placeholder="Name"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="text"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="text"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        keyboardType="text"
        secureTextEntry={true}
      />
      <Button type="button" title="SignUp" onClick={OnClickEvent}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default SignUp
