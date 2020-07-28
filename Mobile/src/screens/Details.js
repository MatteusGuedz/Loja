import React from 'react';
import { IMAGENS} from '../utils/ApiF'
import {Header2} from '../components/Header'
import Label from '../components/LabelInfo'
import ButtonSimple from '../components/buttonSimple'
import Carroussel from '../components/Carrousel'
import MoreScroll from '../components/ScrollMoreProducts'
import Whats from '../components/buttonWhats'
import { 
  View,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions } from 'react-native';


const WIDTH = Dimensions.get('window').width

const Detail = () => {
  return (

  <View style={styles.container}>
    <StatusBar barStyle="light-content" /> 
    <Header2  />

  <ScrollView>
      <Carroussel IMAGENS={IMAGENS} />
         <View style={styles.ContDesc}>
                <Text style={styles.Description}> O deus da Guerra, pode estar a um passo da sua estante! </Text>
         </View>

         <View style={styles.DetailsContainer}>
              <View style={styles.TitDetails}>
              <Text style={styles.TitleDet}> Detalhes </Text>
         </View>


        <View style={styles.BoxDetail}>
          <Label property="Nome" value="Action Figure"/>
          <Label property="Marca" value="HotToys"/>
          <Label property="Embalagem Original" value="Não"/>
          <Label property="Disponivel" value="Sim"/>
          <Label property="Peso" value="33kg"/>
          <Label property="Dimensões" value="30cm X 10cm"/>
          <Label property="Material" value="Vínil"/>
        </View>
            


           <View style={styles.ButtonsContainer}> 
              <ButtonSimple priceFlag price={100}/>
              <ButtonSimple ButtonFlag/>
            </View>

    </View>



     <MoreScroll />
     <MoreScroll />



    </ScrollView>
    <Whats />
  </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#010101',
    alignItems:'center'
  }, 
  DetailsContainer:{
    marginTop:50,
    marginBottom:50,
    height: 400,
    backgroundColor: '#2E2F33',
    borderRadius: 30,
    width: WIDTH,
    
  },

  TitDetails:{
    position: 'absolute',
    borderRadius: 10,
    top: -12,
    height:30,
    alignSelf: 'center',
    backgroundColor: '#DE7672',
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
  },

  TitleDet:{
    color: '#fff',
    fontSize:15,
    fontWeight: 'bold',
  },

  ContDesc:{
    marginTop:20,
    width: '80%',
    alignSelf: 'center'
  },
  Description:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  BoxDetail:{
    backgroundColor: 'transparent',
    paddingLeft:10,
    height:'65%',
    width: '70%',
    marginLeft:15,
    marginTop:45,
    justifyContent: 'space-between'
  },

  ButtonsContainer:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around', 
  },
})

export default Detail;