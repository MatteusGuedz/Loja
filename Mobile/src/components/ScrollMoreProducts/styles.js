 import styled from 'styled-components/native'

export const Container = styled.View`
background-color: #000;
margin-bottom: 50px; 
`;

export const LabelTitle = styled.Text`
position:absolute;
background-color: #DE7672; 
padding:5px;
top: -12px;
left: 15px;
border-radius: 10px;
color: #fff;
font-size:15px;
font-weight: bold;
`;

 export const MoreScroll = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
      alignItems: 'center',
      paddingLeft: 30,
     
  }
}))`
  background-color: #2E2F33;
  padding-top: 30px;
  border-radius:8px;
  
  
 
`



