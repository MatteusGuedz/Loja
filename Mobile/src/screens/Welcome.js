import React from 'react';
import Button from '../components/Button'
import { StyleSheet, View, Image, Text, StatusBar} from 'react-native'

const God = require('../assets/godofwar1.png')


const Welcome = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#010101"/>
      <Text style={styles.text}> Tower of Collectibles </Text>

      <Image source={God}  
      style={styles.imgGOD}/>

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

 imgGOD:{
   position: 'absolute',
   resizeMode: 'contain',
   height: '85%',
   bottom:0,
   right:-50,
 },
 text:{
   color: '#fff',
   fontSize:48,
   marginLeft:20,
   marginTop:20,
   textAlign:"justify",

 }
})

export default Welcome;