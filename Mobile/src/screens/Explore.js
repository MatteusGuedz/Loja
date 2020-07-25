import React from 'react';
import { StyleSheet, View, StatusBar, Text,ScrollView} from 'react-native';
import { Header1 }from '../components/Header'
import BotContent from '../components/BotContent'
import Scroll from '../components/ScrollItem'
import Card from '../components/Card'



const Explore = () => {
  return (
    <View style={styles.container}>

    <StatusBar barStyle="light-content" />   
    <Header1 />
    <ScrollView>

    <Text style={styles.title}> Explore Figures!</Text>

    <Scroll />
    <BotContent>

     <Card BACK="#BF4A45"/>
     <Card BACK="#C07673"/>
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
  
 
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