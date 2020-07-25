import React from 'react';
import {Image} from 'react-native';
import { Container, Title, Mark, Price, InfoContainer, Cif, VIcon } from './styles';
import Icon from '@expo/vector-icons/Feather'
const EX = require('../../assets/imageEx.png')

// console.disableYellowBox = true;
const Card = () => {
  return(

    <Container>
     <VIcon> 
      <Icon 
        name="more-vertical" 
        color="#2E2F33" 
        size={24}/>
     </VIcon>

      <Image source={EX}  resizeMode="contain"/>


     <InfoContainer> 
      <Title> Produto </Title>
      <Mark> marca </Mark>
      <Price> <Cif>R$</Cif> 100,00 </Price>
      </InfoContainer> 
    </Container>
  );
}

export default Card;