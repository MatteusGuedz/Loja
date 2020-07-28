import React from 'react'
import { LabelView, Value, Property } from './styles'

const LabelInfo = ({value, property}) => {
  return (

        <LabelView> 
          <Property>{property}: </Property>
          <Value> {value} </Value>
        </LabelView>  
        
    );
}

export default LabelInfo;