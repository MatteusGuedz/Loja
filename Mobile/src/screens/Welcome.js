import React from 'react';
import Button from '../components/ButtonHome'
import { StyleSheet, View, Image, Text, StatusBar} from 'react-native'
import { useNavigation  } from '@react-navigation/native';

const God = require('../assets/godofwar1.png')
const Logo = require('../assets/logo.png')


const Welcome = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <Image 
        style={styles.logo}
        source={Logo} />

      <Image 
        style={styles.imgGOD}
        source={God} />

      <Button Navegar={() => navigation.navigate('Explore')} />

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