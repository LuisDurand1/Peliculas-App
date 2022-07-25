import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParam } from '../navigation/Navigation';


interface Props{
    movie:Movie,
    height?:number,
    width?:number
}

export const MoviePoster = ({movie,height=420,width=300}:Props) => {


const navigation =useNavigation<StackNavigationProp<RootStackParam>>();


const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
      <TouchableOpacity 
      onPress={() => navigation.navigate("DetailScreen",movie)}
      activeOpacity={0.8}
      style={{
        height,
        width,
        marginHorizontal:2,
        paddingBottom:20,
        paddingHorizontal:7,
         }}
        >

    <View style={styles.imageContainer}>
    <Image
    source={{uri}}
    style={styles.image}
    />
    </View>
      </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
   
   
  
    imageContainer:{
        flex:1,
       shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 10,
},
shadowOpacity: 0.24,
shadowRadius: 7,
borderRadius:18,
elevation: 9,
    },

    image:{
        flex:1,
        borderRadius:18
        
    }

})

