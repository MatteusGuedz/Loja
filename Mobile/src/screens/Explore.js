import React from 'react';
import { StyleSheet, View, StatusBar, Text,ScrollView} from 'react-native';
import { Header1 }from '../components/Header'
import BotContent from '../components/BotContent'
import Scroll from '../components/ScrollItem'
import ScrollTeste from '../components/ScrollMoreProducts'
import Card from '../components/Card'
import {products} from '../utils/ApiF'



const Explore = () => {
  return (
    <View style={styles.container}>

    <StatusBar barStyle="light-content" />   
    <Header1 />
    <ScrollView>

    <Text style={styles.title}> Explore Figures!</Text>

    <Scroll />
    <BotContent>


    {products.map( product => (
      <Card 
         Name={product.name}
        Marca={product.mark}
        Pricy={product.price}
        Image_Url={product.imageMain_url}
      />

    ))}
     
  
 
    </BotContent>
    
    </ScrollView>
   
    </View>
    )
}


const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor: '#010101',
 }, 

 title:{
   marginTop:15,
   marginLeft:18,
   color:'#fff',
   fontSize: 25, 
   marginBottom:50,
 }

})
export default Explore;