import React from 'react';
import { StyleSheet, View, StatusBar, Text,ScrollView} from 'react-native';
import Header from '../components/Header'
import BotContent from '../components/BotContent'
import Scroll from '../components/ScrollItem'
import Card from '../components/Card'



const Explore = () => {
  return (
    <View style={styles.container}>

    <StatusBar barStyle="light-content" />   
    <Header Name="shopping-cart" Color="#fff"/>
    <Text style={styles.title}> Explore Figures!</Text>

    <Scroll />
    <BotContent>

     <Card />
     <Card />
     <Card />
     <Card />
  
 
    </BotContent>
   
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