import React, {useState, useEffect} from 'react';
import { StyleSheet, View, StatusBar, Text,ScrollView, Animated} from 'react-native';
import { Header1 }from '../components/Header'
import BotContent from '../components/BotContent'
import Scroll from '../components/ScrollItem'
import Card from '../components/Card'
import Whats from '../components/buttonWhats'

import api from '../services/api'



const Explore = () => {
  const [ scrollY, setScrollY] = useState(new Animated.Value(0))
  const [products, setProducts] = useState([])


  async function loadProducts(){
    const response = await api.get('/products')

      
      setProducts(response.data)
  }


  useEffect( ()=>{
    loadProducts()
  },[])
  
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
         Name={product.nameMain}
        Marca={product.mark}
        Pricy={product.price}
        image_url={product.image_url}  
        product_id={product.product_id} 
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