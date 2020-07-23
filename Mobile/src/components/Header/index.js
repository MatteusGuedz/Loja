import React from 'react';
import { View } from 'react-native';
import { Head } from './styles'
import  Icon  from '@expo/vector-icons/FontAwesome5'

const Header = ({Name, Color}) => {
  return (
    
    <Head>
        <Icon name="arrow-left" size={24} color="#fff" />
        <Icon name={Name} color={Color} size={24}/>
    </Head>
   );
}

export default Header;