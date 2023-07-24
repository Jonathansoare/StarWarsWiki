import React from 'react';
import { View } from 'react-native';
import { CardContainer, CardImage } from './styles';

export const Card = ({ item }) => {
 return (
   <CardContainer>
        <CardImage source={{uri: item.image_url}}/>
   </CardContainer>
 )
}