import React, {useState, useEffect}  from 'react';
import { Head,TextMenu } from './styles'
import  Icon1  from '@expo/vector-icons/FontAwesome5'
import  Icon2  from '@expo/vector-icons/AntDesign'
import { useNavigation  } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import {  
    TouchableOpacity  as  TouchI, 
    StyleSheet,
    View, 
    Text, 
    Alert,
    Animated,
    Share } from 'react-native';

const Header1 = ({ScrollY}) => {
  const navigation = useNavigation()

  
  

  return (
    
    <Animated.View 
      style={
        [styles.head1,
        {
          height: ScrollY.interpolate({
           inputRange: [10, 160, 185],
           outputRange:[80, 20, 0],
           extrapolate:'clamp'
        }),
        opacity:ScrollY.interpolate({
          inputRange: [1, 75, 170],
          outputRange:[1, 1, 0],
          extrapolate:'clamp'
       }),
      
      }]
      }>
      <TouchI onPress={() => navigation.goBack()}  activeOpacity={0.4}>
        <Icon1 name="arrow-left" size={24} color="#fff" />
      </TouchI>  

      <TextMenu> Products </TextMenu>

       <TouchI 
          activeOpacity={0.8}
          style={styles.CarBtn} 
          onPress={() => navigation.navigate('Cart')}>        
        <Icon1 name="shopping-cart" color="#fff" size={24}/>
        <View style={styles.LabelCar}>
           <Text style={styles.txTotalCar}>0</Text>
         </View>
      </TouchI>  


    </Animated.View>
   );
}


const Header2 = props => {

  const [favorite, setIsFavorite] = React.useState(props.IsFavorite)
  const navigation = useNavigation()
  const toggleFavorite = (Id) => {

    const MessageADD = [
      "deseja adicionar este item a lista de favoritos?",
      "Clique em OK para adicionar!" 
    ]

     const MessageRemove = [
      "Deseja remover este item da lista de favoritos?",
      "Clique em OK para remover!" 
    ]

    Alert.alert(
      favorite === "hearto" ? MessageADD[0] :  MessageRemove[0],
      favorite === "hearto" ? MessageADD[1] :  MessageRemove[1],
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancelar"
        },
        { text: "OK", onPress: () => {
          if(Id === id && favorite == "hearto" ){
            setIsFavorite(() => "heart")
          } else {
            setIsFavorite(() => "hearto")
          }
        } }
      ],
      { cancelable: false }
    );



    
}
const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        
      `Olá, da Só uma olhadinha nesse Colecionavel! Na GeekTower tem muito mais, baixe o App e explore-os!\nhttps://fakeNemClica.com.br
        `,
    });
  } catch (error) {
    alert(error.message);
  }
};

  return (
    
    <Head>
      <TouchI onPress={() => navigation.goBack()}>
        <Icon1 name="arrow-left" size={24} color="#fff" />
      </TouchI>  

      <TextMenu> Details </TextMenu>



        <View style={{flexDirection: 'row'}}>
            <TouchI onPress={onShare} style={{marginRight:10}}>
                <Icon2 
                    name="sharealt" 
                    color="#0f0" 
                    size={24}/>
            </TouchI>    

              <TouchI onPress={() => toggleFavorite(id)}>
                <Icon2 
                    name={favorite} 
                    color="#DE7672" 
                    size={24}/>
            </TouchI>      
        </View>
              
      
    </Head>
   );
}



const Header3 = props => {

  const navigation = useNavigation()
  const [visible, setVisible] = useState(false)


    useEffect(() => {
      setTimeout(()=>{
        setVisible(()=> !visible)
      },  3000)
    },[])


  return (
    
    <Head>
      <TouchI onPress={() => navigation.goBack()}>
        <Icon1 name="arrow-left" size={24} color="#fff" />
      </TouchI>  

        <View style={styles.ContainerTotal}>
          <Text style={styles.property}> Total de Items: </Text>

          <ShimmerPlaceHolder
            style={styles.LoaderTotalItems} 
            autoRun={true} 
            visible={visible}>
          <Text style={styles.value}> {props.totalQuant} </Text>
          </ShimmerPlaceHolder>


        </View>


    </Head>
   );
}

const styles= StyleSheet.create({


  head1:{
      height: 50,
      width:'100%',
      backgroundColor: '#010101',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft:18,
      paddingRight:18,
      borderBottomColor:'#2E2F33',
      borderBottomWidth:1,
 
      },


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
  },
  LoaderTotalItems:{
    borderRadius:6,
    height:30,
    width:40
  }
})

export  {Header1, Header2, Header3};