import React from 'react';
import {Image} from 'react-native';
import { Container, Title, Mark, Price } from './styles';
const EX = require('../../assets/imageEx.png')
const Card = () => {
  return(

    <Container>
      <Image source={EX}  resizeMode="contain"/>
      <Title> Produto </Title>
      <Mark> marca </Mark>
      <Price> R$ 100,00 </Price>
    </Container>
  );
}

export default Card;