import React, {useState, useEffect}  from 'react';
import { TouchableOpacity  as  TouchI, StyleSheet,View, Text} from 'react-native';
import { Head,MainHead, Price, Cif } from './styles'
import { RectButton } from 'react-native-gesture-handler'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'


  const BOttom = props => {
    const [visible, setVisible] = useState(false)


    useEffect(() => {
      setTimeout(()=>{
        setVisible(()=> !visible)
      },  3000)
    },[])

  return (
    
    <>
    <MainHead>  
        <RectButton style={styles.btn}>
            <Text style={styles.txtLabel}> Realizar pedido </Text>
        </RectButton>
    </MainHead>
    <Head>  
        <View style={styles.ContainerTotal}>
          <Text style={styles.property}> Valor Total: </Text>         
        </View>



        <ShimmerPlaceHolder
            style={styles.LoaderValueTotal} 
            autoRun={true} 
            visible={visible}>
        <Price><Cif>R$</Cif> {props.ValorTotal || 0},00 </Price>

        </ShimmerPlaceHolder> 
    </Head>
    </>
   );
}

const styles= StyleSheet.create({



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

  btn:{
    backgroundColor: '#f00',
    height: '90%',
    width:'80%',
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
  },

  txtLabel:{
    color: '#fff',
    fontSize:18,
    fontWeight: 'bold'
  },

  LoaderValueTotal:{
    height:30,
    width:120,
    marginBottom:5,
    borderRadius:8,
  }




})

export default BOttom
