import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { RectButton} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Feather'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { 
  Card,
  Infos,
  ImagemProduct,
  BoxInfos,
  Title,
  Marca,
  Quant,
  ContainerBottom,
  Price,
  Cif } from './styles';


const EX = require('../../assets/teste.jpg')

const CardBag = ({ Name, Mark, Pricy, Image_Url }) => {
     const [visible, setVisible] = useState(false)


  useEffect(() => {
    setTimeout(()=>{

      setVisible(()=> !visible)
    },  3000)
  },[])


  return (

    <ShimmerPlaceHolder
       style={styles.LoaderBig} 
       autoRun={true} 
       visible={visible}>

    <Card>
          < ImagemProduct style={styles.image}  
          source={{uri: Image_Url}} />
     

       <Infos>
          <BoxInfos>
            <Title> {Name} </Title>
            <Marca> {Mark} </Marca>
          </BoxInfos>  
         

    <ContainerBottom>
            <Quant>
                      <RectButton style={styles.btnAction}>
                      <Icon name="minus" color="#fff" size={20} />
                      </RectButton>

                      <View style={styles.ContQuant}> 
                        <Text style={styles.Quant}> 1 </Text>
                      </View>

                    
                      <RectButton style={styles.btnAction}>
                      <Icon name="plus" color="#fff" size={20} />
                      </RectButton>
            </Quant>


            <Price><Cif>R$</Cif> {Pricy},00 </Price>

  
</ContainerBottom>
        

         

       </Infos>
    </Card>
    
    </ShimmerPlaceHolder>
  
    );
}


const styles = StyleSheet.create({
  image:{ resizeMode: 'contain'},

  btnAction:{
    backgroundColor: '#BF4a45',
    height: 30,
    width:30,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 20,
 

  },

  LoaderBig:{
    width: '90%',
    height:120,
    marginBottom:10,
    borderRadius:15,
  },

  ContQuant:{
    // backgroundColor: '#BF4a45',
    borderBottomWidth:1,
    borderColor: '#000',
    height: 30,
    
    alignItems:'center',
    justifyContent: 'center',
    marginHorizontal:5,
  },
  Quant:{
    fontSize:22,
    fontWeight: 'bold',
    color: '#000'
  }


})

export default CardBag;