import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParam } from '../navigation/Navigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParam,'DetailScreen'>{}

const screenHeight=Dimensions.get('screen').height


export const DetailScreen = ({route,navigation}:Props) => {

  const movie=route.params
  const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const {isLoading, movieFull,cast }=useMovieDetails(movie.id)

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
        <Image
        source={{uri}}
        style={styles.posterImage}
        />
        </View>
      </View>

      <View style={styles.marginContainer}>
       <Text style={styles.subtitle}>{movie.original_title}</Text>
       <Text style={styles.title}>{movie.title}</Text>

      </View>
     {
       isLoading? <ActivityIndicator size={30} color={"red"} style={{marginTop:20}} /> :<MovieDetails movieFull={movieFull!} cast={cast} />
     }

     <View
     style={styles.backButton}
     >
     <TouchableOpacity
     onPress={()=>navigation.goBack()}
     >
     <Icon
      color={"white"}
      name="arrow-back-outline"
      size={60}
      
     />
     </TouchableOpacity>
     </View>
      </ScrollView>
  )
}

const styles= StyleSheet.create({
  imageContainer:{
/*     backgroundColor:"red",
 */    width:'100%',
 overflow:"hidden",
    height:screenHeight * 0.7,
    shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 10,
   },
   shadowOpacity: 0.24,
   shadowRadius: 7,
   elevation: 9,
   borderBottomEndRadius:25,
   borderBottomStartRadius:25
   
   },
   imageBorder:{
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
    flex:1,
    overflow:"hidden"
   },
posterImage:{
  flex:1
},
marginContainer:{
  marginHorizontal:20,
  marginTop:15
},
subtitle:{
  fontSize:16
},
title:{
  fontSize:20,
  color:"black",
  fontWeight:"bold"
}
,
backButton:{
  position:"absolute",
  zIndex:999,
  elevation:9,
 


}

})