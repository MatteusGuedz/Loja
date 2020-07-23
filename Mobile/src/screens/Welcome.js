import React from 'react';
import Button from '../components/Button'
import { StyleSheet, View, Image, Text, StatusBar} from 'react-native'

const God = require('../assets/godofwar1.png')
const Logo = require('../assets/logo.png')


const Welcome = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <Image 
        style={styles.logo}
        source={Logo} />

      <Image 
        style={styles.imgGOD}
        source={God} />

      <Button />

    </View>
    )
}


const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor: '#010101',
   alignItems: 'center',

 }, 
 logo:{
      position: 'absolute',
      left:5,
      top: 20,
   
 },

 imgGOD:{
   position: 'absolute',
   resizeMode: 'contain',
   height: '85%',
   bottom:0,
   right:-50,
 },

})

export default Welcome;