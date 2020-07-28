import React from 'react';
import {Image, TouchableWithoutFeedback as Touch} from 'react-native';
import { Container, Title, Mark, Price, InfoContainer, Cif, VIcon } from './styles';
import Icon from '@expo/vector-icons/Feather'
import { useNavigation  } from '@react-navigation/native'

console.disableYellowBox = true;


const Card = ({ Space, Name, Marca, Pricy, Image_Url }) => {

  const navigation = useNavigation()

  return(
  <Touch onPress={() => navigation.navigate('Details')}>
    <Container Space={Space}  > 
    

      <Image style={{flex:1,}}  source={Image_Url}  resizeMode="contain"/>
      <VIcon> 
      <Icon 
        name="more-vertical" 
        color="#2E2F33" 
        size={24}/>
     </VIcon>


     <InfoContainer> 
      <Title> {Name} </Title>
      <Mark> {Marca} </Mark>
      <Price> <Cif>R$</Cif> {Pricy},00 </Price>
      </InfoContainer> 
    </Container>
    </Touch> 
  );
}

export default Card;