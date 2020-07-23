import React from 'react';
import { ScrollView } from 'react-native';
import { Content } from './styles';
import Scroll from '../ScrollItem'

const BotContent = ({children}) => {
  return (
  
  <Content >
      {children}
  </Content>
  
  );
}

export default BotContent;