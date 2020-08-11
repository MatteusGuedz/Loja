import React, {useState, useEffect} from 'react';
import {Image, TouchableHighlight as Touch, View, StyleSheet, Alert,Dimensions } from 'react-native';
import { Container, Title, Mark, Price, InfoContainer, Cif, IconHeart,IconCart, ViewPrice } from './styles';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import IconFav from '@expo/vector-icons/AntDesign'
import Icon from '@expo/vector-icons/FontAwesome5'
import { useNavigation  } from '@react-navigation/native'



////

const { width} = Dimensions.get('window') 
const WTH = Math.round((width - 45) / 2)


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
  const [favorite, setFavorite] = useState('hearto')
  const [visible, setVisible] = useState(false)
  const Fav = favorite


  useEffect(() => {
    setTimeout(()=>{
      setVisible(()=> !visible)
    },  3000)
  },[])
  const toggleFavorite = (Id) => {

    const MessageADD = [
      "deseja adicionar este item a lista de favoritos?",
      "Clique em OK para adicionar!" 
    ]

     const MessageRemove = [
      "Deseja remover este item da lista de favoritos?",
      "Clique em OK para remover!" 
    ]

    Alert.alert(
      favorite === "hearto" ? MessageADD[0] :  MessageRemove[0],
      favorite === "hearto" ? MessageADD[1] :  MessageRemove[1],
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancelar"
        },
        { text: "OK", onPress: () => {
          if(Id === id && favorite == "hearto" ){
            setFavorite(() => "heart")
          } else {
            setFavorite(() => "hearto")
          }
        } }
      ],
      { cancelable: false }
    );



    
}
  

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
      material,
      Fav,
      
      
    })} activeOpacity={0.9}>
       <ShimmerPlaceHolder SSpace={Space} 
       style={[styles.LoaderBig, Space ? styles.Margin20 : styles.Margin1  ]} 
       autoRun={true} visible={visible}>
        <Container Space={Space}> 

              <Image style={{flex:1, height: "100%", width: '100%'}}  
              source={{uri: image_url}}  resizeMode="contain"/>
              <IconHeart onPress={() => toggleFavorite(id)}> 
              <IconFav 
                name={favorite} 
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
              </ShimmerPlaceHolder> 
    </Touch> 

 
</View>
  
  );
}


const styles = StyleSheet.create({
  LoaderBig:{
    
    height:200,
    width: WTH,
    marginBottom:10,
    borderRadius:5,

  
  }, 

  Margin20:{
    marginRight:20,
  },

  Margin1:{
    marginRight:1,
  },
  
  
})
export default Card;



