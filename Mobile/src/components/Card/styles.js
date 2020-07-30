import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width} = Dimensions.get('window') 

const WTH = Math.round((width - 45) / 2)  

export const Container = styled.View`
  background-color: #fff;
  border-radius: 3px;
  margin-bottom:15px;
  align-items: center;
  height:220px;
  width: ${WTH} ;
  margin-right: ${props => props.Space ? 20 : 1};
  
  

`;
export const IconHeart = styled.TouchableOpacity`
  position: absolute;
  right: 3px;
  top:3px;
  padding:3px;
  border-radius: 10px;
  background-color: transparent;

`;

export const IconCart = styled.TouchableOpacity`
  padding:3px;
  border-radius: 10px;
  background-color: transparent;
`;

export const Image = styled.Image`
  width: 100%; 
  height:100;
  

`;

export const InfoContainer = styled.View`
  border-top-width: 1px;
  border-top-color: #010101;
  background-color: #eee;
  width:100%;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-bottom:5px;
  
`;


export const Title = styled.Text`
 text-align: center;
 font-weight: bold; 
`;

export const Mark = styled.Text`
 text-align: center;
 font-weight: 400;
 color: #999; 
 margin-bottom:10px;
  
`;

export const ViewPrice = styled.View`
  flex-direction: row;
  padding: 0 8px;
  align-items:center;
  justify-content: space-between;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

`;

export const Price = styled.Text`

  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;
export const Cif = styled.Text`
  color: #BF4a45;
`;