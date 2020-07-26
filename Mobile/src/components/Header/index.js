import React  from 'react';
import { TouchableOpacity  as  TouchI, StyleSheet,View, Text} from 'react-native';
import { Head } from './styles'
import  Icon1  from '@expo/vector-icons/FontAwesome5'
import  Icon2  from '@expo/vector-icons/FontAwesome'
import { useNavigation  } from '@react-navigation/native';

const Header1 = () => {
  const navigation = useNavigation()

 


  return (
    
    <Head>
      <TouchI onPress={() => navigation.goBack()}>
        <Icon1 name="arrow-left" size={24} color="#fff" />
      </TouchI>  

       <TouchI style={styles.CarBtn}>
         
        <Icon1 name="shopping-cart" color="#fff" size={24}/>
        <View style={styles.LabelCar}>
           <Text style={styles.txTotalCar}>0</Text>
         </View>
      </TouchI>  


    </Head>
   );
}


const Header2 = () => {
  const navigation = useNavigation()


  return (
    
    <Head>
      <TouchI onPress={() => navigation.goBack()}>
        <Icon1 name="arrow-left" size={24} color="#fff" />
      </TouchI>  

      <TouchI >

        <Icon2 
            name="heart" 
            color="#DE7672" 
            size={24}/>
     </TouchI>            
      
    </Head>
   );
}


const styles= StyleSheet.create({


  LabelCar:{
    position: 'absolute',
    top: -9,
    right:-9,
    padding:3,
    width:20,
    height:20,
    borderRadius: 10,
    backgroundColor: '#BF4a45',
    alignItems:'center',
    justifyContent:'center'
  },

  txTotalCar:{
    color: '#fff',
    fontWeight: 'bold'
  }
})

export  {Header1, Header2};