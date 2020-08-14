import React, {useState, useEffect} from 'react'
import {Header2} from '../components/Header'
import Label from '../components/LabelInfo'
import ButtonSimple from '../components/buttonSimple'
import MoreScroll from '../components/ScrollMoreProducts'
import Whats from '../components/buttonWhats'
import { useRoute} from '@react-navigation/native'
import api from '../services/api'
import {products} from '../utils/ApiF'
import ViewPager from '@react-native-community/viewpager'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { Bar, Page, Item } from '../components/Carrousel/styles';
import { 
  View,
  Image,
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
  const [product, setProduct] = useState([])
  const [imagesDetails, setImagesDetails] = useState([])


  async function loadDetails(){
    if(routeParams.product_id == null || false){
      return console.log("Erro não tem id")
    }

    const response = await api.get(`/product/${routeParams.product_id}`)

      
      setProduct(response.data)
      setImagesDetails(response.data.imagesDetails)
  }

 
 
  useEffect(() => {

    loadDetails()

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


       


   {/* Carrossel */}
   <ViewPager style={styles.viewPager} initialPage={0}>
      
     
      { imagesDetails.map((imagem, index1) => 
          (
          <Page style={styles.page} key={index1}>
              <Image source={{uri:imagem.imageURL}} style={{height: '100%', width: '100%'}} resizeMode="contain"/>
             
              <Bar style={styles.barProcess}>
  
                { imagesDetails.map((_, index2) => (
                  <Item style={
                    [styles.itemProcess, 
                      index1 == index2 ? styles.marked : null]
                  } key={index2} />  )) }    
              </Bar>
              
         </Page>
        ))
       }   
  
    </ViewPager>
   {/* Carrossel */}

          
      </ShimmerPlaceHolder>  

         <View style={styles.ContDesc}>
             <ShimmerPlaceHolder  
                style={styles.LoaderDescription}  
                  autoRun={true} 
                    visible={visible}>

                <Text style={styles.Description}> {product.description} </Text>
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
                    value={product.nameDetails}/>
            </ShimmerPlaceHolder>



          <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>        
              <Label 
                property="Marca" 
                value={product.mark}/>
          </ShimmerPlaceHolder>


          <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>  
              <Label 
                property="Embalagem Original" 
                value={product.originalPack === true ? "Sim": "Não"}/> 
            </ShimmerPlaceHolder>



           <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>
              <Label 
                property="Disponivel" 
                value={product.disponibility === true ? "Sim": "Não"}/>
           </ShimmerPlaceHolder> 

          

           <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>
              <Label 
                property="Peso" 
                value={`${product.peso}g`}/>
            </ShimmerPlaceHolder> 

          

            <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}>
              <Label 
                property="Dimensões" 
                value={product.dimensions}/>
             </ShimmerPlaceHolder> 



             <ShimmerPlaceHolder  
                style={styles.LoaderLabel}  
                  autoRun={true} 
                    visible={visible}> 
                <Label 
                  property="Material" 
                  value={product.material}/>
            </ShimmerPlaceHolder>
          
          
          
        </View>
            


           <View style={styles.ButtonsContainer}> 
           
           <ShimmerPlaceHolder  
                  style={styles.LoaderButtons}  
                    autoRun={true} 
                      visible={visible}>
                 <ButtonSimple priceFlag price={product.price}/>
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
  viewPager: {
    
    height: 370,
    width: WIDTH,
   
  },

  marked:{
    backgroundColor: '#DE7672'
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
    width: '80%',
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