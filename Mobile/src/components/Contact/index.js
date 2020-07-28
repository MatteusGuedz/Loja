import React from 'react';
import { View } from 'react-native';
import { AboutContainer, TitleContainer, Title, ContIcons, } from './styles';
import Icon from '@expo/vector-icons/FontAwesome5'
import IconMSG from '@expo/vector-icons/MaterialCommunityIcons'
import IconFone from '@expo/vector-icons/Foundation'



const Social = () => {
  return (
    <AboutContainer>   
        <TitleContainer>
            <Title> Redes Sociais </Title>
        </TitleContainer>

      <ContIcons>
          <IconMSG   name="instagram" size={35} color="#2E2F33"/>
          <IconFone  name="social-facebook" size={35} color="#00f"/>
          <Icon  name="heart" size={35} color="#2E2F33"/>
      </ContIcons>
   
    </AboutContainer> 
);
}

const Contacts = () => {
  return (
    <AboutContainer>   
        <TitleContainer>
            <Title> Contato </Title>
        </TitleContainer>

      <ContIcons>
          <IconMSG  name="email" size={35} color="#2E2F33"/>
          <IconMSG  name="whatsapp" size={35} color="#34af23" />
          <IconMSG name="web" size={35} color="#2E2F33"/>
      </ContIcons>
   
    </AboutContainer> 
);
}

export { Contacts, Social };