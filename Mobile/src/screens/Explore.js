import React, {useState, useEffect} from 'react';
import { StyleSheet, View, StatusBar, Text,ScrollView, Animated} from 'react-native';
import { Header1 }from '../components/Header'
import BotContent from '../components/BotContent'
import Scroll from '../components/ScrollItem'

import Card from '../components/Card'
import Whats from '../components/buttonWhats'
import {products} from '../utils/ApiF'



const Explore = () => {
  const [ scrollY, setScrollY] = useState(new Animated.Value(0))
  
  return (
    <View style={styles.container}>
       <StatusBar barStyle="light-content" />   
          <Header1 ScrollY={scrollY} />


    <ScrollView 
      scrollEventThrottle={16}
      onScroll={Animated.event([{
        nativeEvent:{
          contentOffset:{y: scrollY}
        },
      }],
    { useNativeDriver:false})}>

    <Text style={styles.title}> Explore Figures! </Text>
    <Scroll />
        <BotContent>

    {products.map( product => (
      <Card 
         id={product.id}
         Name={product.name}
        Marca={product.mark}
        Pricy={product.price}
        image_url={product.imageMain_url}   
        imagesDetails={product.imagesDetails}
        description={product.description}
        disponibility={product.disponibility}
        originalPack={product.originalPack}
        dimensions={product.dimensions}
        peso={product.peso}
        material={product.material}
      />
    ))} 

{products.map( product => (
      <Card 
         id={product.id}
         Name={product.name}
        Marca={product.mark}
        Pricy={product.price}
        image_url={product.imageMain_url}   
        imagesDetails={product.imagesDetails}
        description={product.description}
        disponibility={product.disponibility}
        originalPack={product.originalPack}
        dimensions={product.dimensions}
        peso={product.peso}
        material={product.material}
      />
    ))}
        </BotContent>

    </ScrollView>
   
    <Whats />
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