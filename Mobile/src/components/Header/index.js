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
      <TouchI onPress={() => navigation.goBack()}  activeOpacity={0.4}>
        <Icon1 name="arrow-left" size={24} color="#fff" />
      </TouchI>  

       <TouchI 
          activeOpacity={0.8}
          style={styles.CarBtn} 
          onPress={() => navigation.navigate('Cart')}>
         
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



const Header3 = () => {

  const navigation = useNavigation()
  return (
    
    <Head>
      <TouchI onPress={() => navigation.goBack()}>
        <Icon1 name="arrow-left" size={24} color="#fff" />
      </TouchI>  

        <View style={styles.ContainerTotal}>
          <Text style={styles.property}> Total de Items: </Text>
          <Text style={styles.value}> 10 </Text>
        </View>


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
  },

  ContainerTotal:{
    flexDirection: 'row',
    alignItems:'center'
  },

  property:{
    fontSize:16,
    color: '#fff',
    fontWeight: '400'
  },

  value:{
    color: '#BF4a45',
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export  {Header1, Header2, Header3};