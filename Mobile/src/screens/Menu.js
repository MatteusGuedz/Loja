import React from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Option from '../components/OptionMenu'
import {Contacts, Social} from '../components/Contact'
import AVATAR from '../assets/avatar.jpg'




export default props => {

  
    return (
        <DrawerContentScrollView>
            <View style={styles.header}> 
                <Image style={styles.avatar} source={AVATAR}/>
                <Text style={styles.txtH}> Mateus Guedz </Text>
            </View>

        <View style={styles.ListOptions}>
          
            <Option 
                LabelText="Produtos" 
                Name="store" 
                Nav="Welcome"/>

            <Option LabelText="Carrinho" Name="shopping-cart" Nav="Explore"/>
            <Option LabelText="Lista de desejos" Name="heart" Nav="Explore"/>
            <Option LabelText="Ofertas" Name="ticket-alt" Nav="Explore"/>  
        </View >  


        <View style={styles.ListContact}>
            <Contacts />
            <Social />
        </View>
          
         {/* Entre em Contato  */}
         {/* Redes sociais */}         
 
             
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        marginTop: -5,
        height: 130,
        backgroundColor: '#2E2F33',
        alignItems: 'center',
        justifyContent:'center',

    }, 
    

    avatar:{
        height: 70,
        width:70,
        borderRadius: 100,
        backgroundColor: '#f00', 
        marginBottom:10,
        borderWidth:2,
        borderColor:'#fff'
    },

    txtH:{
      color: '#fff',
      fontSize: 20,

    },

    ListOptions:{
        paddingTop:10,
        // backgroundColor: '#f00',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor: '#ccc',
    
    },

    ListContact:{
        alignItems:'center',
        // backgroundColor: '#00f',
        paddingVertical:10,
    }

    
})