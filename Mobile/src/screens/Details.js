import React, {useState, useEffect} from 'react'
import {Header2} from '../components/Header'
import Label from '../components/LabelInfo'
import ButtonSimple from '../components/buttonSimple'
import Carroussel from '../components/Carrousel'
import MoreScroll from '../components/ScrollMoreProducts'
import Whats from '../components/buttonWhats'
import { useRoute} from '@react-navigation/native'
import {products} from '../utils/ApiF'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { 
  View,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width

const Detail = () => {

  const route = useRoute();
  const routeParams = route.params;

  const [visible, setVisible] = useState(false)
 
 
  useEffect(() => {

    setTimeout(()=>{

      setVisible(()=> !visible)
    },  3000)
  },[])

  return (

  <View style={styles.container}>
    <StatusBar barStyle="light-content" /> 
    <Header2  IsFavorite={routeParams.Fav}/>



  <ScrollView>

      <ShimmerPlaceHolder  
          style={styles.LoaderImage}  
            autoRun={true} 
              visible={visible}>

          <Carroussel IMAGENS={routeParams.imagesDetails} />
      </ShimmerPlaceHolder>  

         <View style={styles.ContDesc}>
             <ShimmerPlaceHolder  
                style={styles.LoaderDescription}  
                  autoRun={true} 
                    visible={visible}>

                <Text style={styles.Description}> {routeParams.description} </Text>
              </ShimmerPlaceHolder>   
         </View>

         <View style={styles.DetailsContainer}>
              <View style={styles.TitDetails}>
              <Text style={styles.TitleDet}> Detalhes </Text>
         </View>


        <View style={styles.BoxDetail}>

              <ShimmerPlaceHolder  
                  style={styles.LoaderLabel}  
                    autoRun={true} 
                      visible={visible}> 
                <Label 
                  property="Nome" 
                    value={routeParams.Name}/>
            </ShimmerPlaceHolder>



          <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>        
              <Label 
                property="Marca" 
                value={routeParams.Marca}/>
          </ShimmerPlaceHolder>


          <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>  
              <Label 
                property="Embalagem Original" 
                value={routeParams.originalPack === true ? "Sim": "Não"}/> 
            </ShimmerPlaceHolder>



           <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>
              <Label 
                property="Disponivel" 
                value={routeParams.disponibility === true ? "Sim": "Não"}/>
           </ShimmerPlaceHolder> 

          

           <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>
              <Label 
                property="Peso" 
                value={`${routeParams.peso}Kg`}/>
            </ShimmerPlaceHolder> 

          

            <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>
              <Label 
                property="Dimensões" 
                value={routeParams.dimensions}/>
             </ShimmerPlaceHolder> 



             <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}> 
                <Label 
                  property="Material" 
                  value={routeParams.material}/>
            </ShimmerPlaceHolder>
          
          
          
        </View>
            


           <View style={styles.ButtonsContainer}> 
           
           <ShimmerPlaceHolder  
                  style={styles.LoaderButtons}  
                    autoRun={true} 
                      visible={visible}>
                 <ButtonSimple priceFlag price={routeParams.Pricy}/>
           </ShimmerPlaceHolder>

           <ShimmerPlaceHolder  
                  style={styles.LoaderButtons}  
                    autoRun={true} 
                      visible={visible}>
                  <ButtonSimple ButtonFlag/>
           </ShimmerPlaceHolder>


             
            </View>

    </View>


      
      <MoreScroll Produtos={products} />
     <MoreScroll Produtos={products} />



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

  // loaders

  LoaderImage:{
    borderRadius:2,
    height:380,
    width: '100%'
  },

  LoaderDescription:{
    borderRadius:2,
    height:30,
    width: '100%'
  },
  LoaderLabel:{
    borderRadius:2,
    height:20,
    width: '100%'
  },
  LoaderButtons:{
    borderRadius:2,
    height:40,
    width: 100
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
    paddingHorizontal:"auto",
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