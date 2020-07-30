import React from 'react';
import {Image, TouchableHighlight as Touch, View, StyleSheet} from 'react-native';
import { Container, Title, Mark, Price, InfoContainer, Cif, IconHeart,IconCart, ViewPrice } from './styles';
import Icon from '@expo/vector-icons/FontAwesome5'
import { useNavigation  } from '@react-navigation/native'



////




console.disableYellowBox = true;



const Card = (
  { Space,
     Name, 
     Marca, 
     Pricy, 
     image_url, 

     id,
     imagesDetails,
     description,
     disponibility,
     originalPack,
     dimensions,
     peso,
     material

    }) => {




  const navigation = useNavigation()

  
  return( 
<View>
  

    <Touch onPress={() => navigation.navigate('Details',{
      id,
      imagesDetails,
      description,
      disponibility,
      originalPack,
      dimensions,
      peso,
      Name, 
      Marca, 
      Pricy, 
      material
    })} activeOpacity={0.9}>
        <Container Space={Space}  > 

          <Image style={{flex:1, height: "100%", width: '100%'}}  
          source={{uri: image_url}}  resizeMode="contain"/>
          <IconHeart> 
          <Icon 
            name="heart" 
            color="#BF4a45" 
            size={20}/>
        </IconHeart>


        <InfoContainer> 
          <Title> {Name} </Title>
          <Mark> {Marca} </Mark>

          <ViewPrice>
            <Price> <Cif>R$</Cif> {Pricy},00 </Price>
            <IconCart>
              <Icon 
              name="shopping-cart" 
              color="#010101" 
              size={20}/>
            </IconCart>             
          </ViewPrice>
          
          </InfoContainer> 
        </Container>
    </Touch> 

 
</View>
  
  );
}


const styles = StyleSheet.create({
 
})
export default Card;



