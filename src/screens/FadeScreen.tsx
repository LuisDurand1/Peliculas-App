import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

const {fadeIn,fadeOut,opacity}=useFade()


  return (
      <View style={{flex:1,backgroundColor:"grey",justifyContent:"center",alignItems:"center"}}>

          <Animated.View style={{backgroundColor:"blue",width:150,height:150,borderColor:"white",borderWidth:10,opacity:opacity}}/>
          <Button
          title='Fade in'
          onPress={()=>fadeIn()}
          />
           <Button
          title='Fade out'
          onPress={()=>fadeOut()}
          />
      </View>
  )
}