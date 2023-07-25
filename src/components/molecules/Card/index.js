import React from 'react';
import { CardContainer, CardImage } from './styles';
import { useNavigation } from "@react-navigation/native"
import {useDataStore} from "~/services/stores"

export const Card = ({ item }) => {
  const { setSelectData } = useDataStore()
  const navigation = useNavigation()

  const onSelectItem = () => {
    setSelectData(item)
    navigation.navigate("Detail")
  }

 return (
   <CardContainer onPress={() => onSelectItem()}>
        <CardImage source={{uri: item.image_url}}/>
   </CardContainer>
 )
}