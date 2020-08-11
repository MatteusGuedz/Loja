import React from 'react';
import { View, StyleSheet,Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const ButtonWhats = () => {

  function handleWhatsApp(){
    Linking.openURL(`whatsapp://send?phone="5595991505157"&text=Olá! Como posso estar adquirindo um Colecionável GeekTower?`)
  }

  return (
    <RectButton onPress={handleWhatsApp} style={styles.button} activeOpacity={0.9}>
      <Icon name="whatsapp" size={35} color="#fff"/>
    </RectButton>
    );
}


const styles = StyleSheet.create({
  button:{
    position: 'absolute',
    bottom:15,
    right:15,
    borderRadius:100,
    backgroundColor: '#34af23',
    width:60,
    height:60,
    alignItems:'center',
    justifyContent:'center',
  }
})

export default ButtonWhats;