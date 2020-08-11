import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, StyleSheet} from 'react-native'


const  Button = ({ Navegar }) => {
  return (
    <RectButton  style={styles.But} onPress={Navegar} activeOpacity={0.3}>
      <Text style={styles.txt}> Go Store </Text>
    </RectButton>
    )
}


const styles = StyleSheet.create({
 But:{
  position: 'absolute',
  width: '80%',
  height:60,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#BF4A45',
  borderRadius: 8,
  bottom: 70,
 },

 txt:{
  fontSize: 18,
  fontWeight: 'bold',
  color: '#fff',
 }
})

export default Button;