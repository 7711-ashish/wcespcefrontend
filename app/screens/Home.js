import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      paddingTop: 50,
      alignItems: 'center',
      backgroundColor: "white"
    }}>
      <Image source={require("../images/wce.jpg")} style={{
        width: 200,
        height: 200,
        marginTop: 60,
      }} />
      <View style={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
          marginBottom: 0
        }}>Welcome to WCE Space</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.rowContainer}>
          <Button title="Admin Login" buttonStyle={styles.adminButton} onPress={() => navigation.navigate('Login')}/>
          <Button title="Dean Student Login" buttonStyle={styles.deanButton} onPress={() => navigation.navigate('Login')} />
        </View>

        <View style={styles.rowC/ontainer}>
          <Button title="Resource Owner Login" buttonStyle={styles.resourceButton} onPress={() => navigation.navigate('Login')}/>
          <Button title="Advisor Login" buttonStyle={styles.advisorButton} onPress={() => navigation.navigate('Login')}/>
        </View>

        <View style={styles.rowContainer}>
          <Button title="Representative Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>


    </View>
  )
  
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  adminButton: {
    backgroundColor: 'orange',
    marginRight: 10,
  },
  deanButton: {
    backgroundColor: '#3b7ddd',
    marginRight: 10,
  },
  resourceButton: {
    backgroundColor: '#dc3545',
    marginRight: 10,
  },
  advisorButton: {
    backgroundColor: '#006666',
    marginRight: 10,
  },
});


export default Home