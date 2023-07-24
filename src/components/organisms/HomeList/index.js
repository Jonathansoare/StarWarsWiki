import React from 'react';
import { Card } from "../../molecules"
import { Text } from "../../atoms"
import { FlatList } from 'react-native';

const FAKE_DATE = [
    {
        id:0,
        image_url:"https://www.suomalainen.com/cdn/shop/products/49532ec584f14d738da42079d45c8a049789520425807_1_1ee0b439-b085-4768-afc7-f8e5d0cf1a85.jpg?v=1679808548&width=800"
    },
    {
        id:1,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2R4TaRxOy2rZMEWr5032_1ydMxs8mLzDhPBKegKzi84TrSvG6-64hzZh8eWj4E95fZk&usqp=CAU"
    },
    {
        id:2,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOrHtgcpTqimpGMOK8W_f8iEL-OHQEDQaB8wH2fn4qaCKtoODuwEMk2qdkdu8_9qro2M&usqp=CAU"
    },
    {
        id:3,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUv5SczIJQ5AKN6vVUzC4N9P2WYSwLMgg_ZpFsWUpdy8EwLZKsUWKEBdR54SBDZ28aSNw&usqp=CAU"
    },
]

export const HomeList = () => {
 return (
   <FlatList 
   horizontal
   data={FAKE_DATE}
    renderItem={({item}) => <Card item={item}/>}
    keyExtractor={(item) => String(item.id)}
   />
  );
}