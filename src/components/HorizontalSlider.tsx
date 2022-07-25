import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface'
import { MoviePoster } from './MoviePoster';


interface Props{
title?:string,
movies:Movie[]


}


export const HorizontalSlider = ({title,movies}:Props) => {
  return (


    <View style={{ 
        height:(title)? 260 : 240}}>

{title && <Text style={{fontSize:30,fontWeight:"bold",marginLeft:9}}>{title}</Text>}

<FlatList
data={movies}
renderItem={({item})=> <MoviePoster movie={item} height={200} width={140}/>}
keyExtractor={(item)=>item.id.toString()}
showsHorizontalScrollIndicator={false}
horizontal={true}

/>
</View>
  )

}
