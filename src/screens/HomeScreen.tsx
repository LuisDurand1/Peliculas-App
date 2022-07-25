import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Button, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import movieDb from '../api/movieDb'
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { Movie } from '../interfaces/movieInterface';
import { DetailScreen } from './DetailScreen';
import { GradientBackground } from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const{width:windowWidth} = Dimensions.get('window')

 interface Props extends StackScreenProps<any,any>{};




export const HomeScreen = ({navigation}:Props) => {

 const {nowPlaying,popular,topRated,upcoming,loading}=useMovies()
 const {top} =useSafeAreaInsets();
 const {setMainColors,setPrevMainColors} = useContext(GradientContext)

const getPosterColors=async (index:number)=>{

const movie=nowPlaying[index]
const uri=`https://image.tmdb.org/t/p/w500${movie.poster_path}`

 const [primary = 'green' , secondary = 'orange' ]=await getImageColors( uri )
 
 setMainColors({primary:primary,secondary:secondary})

}

useEffect(() => {
 
    if(nowPlaying.length>0){
        getPosterColors(0)
    }

}, [nowPlaying])




if(loading){
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator
            color={"red"}
            size={80}
            />
        </View>
    )
}


  return (
      <GradientBackground>
      <ScrollView>
      <View style={{marginTop:top + 20}} >
{/*           <Text>Home screen</Text>
 */}
   
     <View style={{height:440}}>
     <Carousel
     data={nowPlaying}
     renderItem={({item})=> <MoviePoster movie={item}/>}
     sliderWidth={windowWidth}
     itemWidth={300}
     inactiveSlideOpacity={0.9}
     onSnapToItem={(index)=> getPosterColors(index)}
     />

</View> 


<HorizontalSlider title={'En Cine'} movies={nowPlaying} />
<HorizontalSlider title={'Popular'} movies={popular} />
<HorizontalSlider title={'Top Rated'} movies={topRated} />
<HorizontalSlider title={'Up Coming'} movies={upcoming} />


      </View>
      </ScrollView>
      </GradientBackground>
  )
}


/* 3a0a186d3cb5740926079404d5e26678 */