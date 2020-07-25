import React from 'react';
import { View } from 'react-native';
import { Head } from './styles'
import  Icon1  from '@expo/vector-icons/FontAwesome5'
import  Icon2  from '@expo/vector-icons/FontAwesome'

const Header1 = ({Name, Color}) => {
  return (
    
    <Head>
        <Icon1 name="arrow-left" size={24} color="#fff" />
        <Icon1 name="shopping-cart" color="#fff" size={24}/>
    </Head>
   );
}


const Header2 = ({Name, Color}) => {
  return (
    
    <Head>
        <Icon1 name="arrow-left" size={24} color="#fff" />
        <Icon2 name="heart" color="#DE7672" size={24}/>
      {/* heart-o */}
    </Head>
   );
}

export  {Header1, Header2};