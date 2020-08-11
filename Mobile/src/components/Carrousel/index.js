import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native'
import ViewPager from '@react-native-community/viewpager'

import { Bar, Page, Item } from './styles';


const WIDTH = Dimensions.get('window').width

const Carrousel = ({ IMAGENS }) => {
 

  return (
    <ViewPager style={styles.viewPager} initialPage={0}>
      
     
    { IMAGENS.map((imagem, index1) => 
        (
        <Page style={styles.page} key={index1}>
            <Image source={{uri:imagem.img_url}} style={{height: '100%', width: '100%'}} resizeMode="contain"/>
           
            <Bar style={styles.barProcess}>

              { IMAGENS.map((_, index2) => (
                <Item style={
                  [styles.itemProcess, 
                    index1 == index2 ? styles.marked : null]
                } key={index2} />  )) }    
            </Bar>
            
       </Page>
      ))
     }    



  </ViewPager>
  
    );
}



const styles = StyleSheet.create({
   viewPager: {
    
    height: 370,
    width: WIDTH,
   
  },

  marked:{
    backgroundColor: '#DE7672'
  }
 
})

export default Carrousel;