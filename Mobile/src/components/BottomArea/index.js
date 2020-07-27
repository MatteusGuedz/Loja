import React  from 'react';
import { TouchableOpacity  as  TouchI, StyleSheet,View, Text} from 'react-native';
import { Head,MainHead, Price, Cif } from './styles'
import { RectButton } from 'react-native-gesture-handler'
  const BOttom = () => {


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

        <Price><Cif>R$</Cif> 980,00 </Price>
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
  }




})

export default BOttom
