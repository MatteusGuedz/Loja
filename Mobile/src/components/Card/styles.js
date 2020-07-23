import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width} = Dimensions.get('window') 

const WTH = Math.round((width - 45) / 2)  


export const Container = styled.View`
  background-color: #fff;
  border-radius: 3px;
  margin-bottom:15px;
  align-items: center;
  width: ${WTH} ;
  padding: 15px;
  
`;

export const Image = styled.Image`
  width: 100%; 
  height:100;
  

`;


export const Title = styled.Text`
 text-align: center;
 font-weight: bold; 
`;

export const Mark = styled.Text`
 text-align: center;
 font-weight: 400;
 color: #cecece; 
  
`;

export const Price = styled.Text`
  margin-top: 5px;
  font-size: 18px;
`;