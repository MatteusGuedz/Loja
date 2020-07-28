import React from 'react';
import { Option,Label } from './styles';
import {TouchableOpacity as Touch} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'

const OptionMenu = ({Name, LabelText}) => {
  return (

  <Touch activeOpacity={0.8}>
    <Option>
      <Label> {LabelText} </Label>
      <Icon name={Name} size={22}  color="#fff"/>
    </Option>
    </Touch>  
  );
}

export default OptionMenu;