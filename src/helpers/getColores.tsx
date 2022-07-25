import ImageColors from "react-native-image-colors"

export const getImageColors=async (uri:string)=>{

    
    const imgColors=await ImageColors.getColors(uri,{})
    
    let primary;
    let secondary;


    switch (imgColors.platform) {
        case 'android':
          // android result properties
          const vibrantColor = imgColors.vibrant
          primary=imgColors.dominant;
          secondary=imgColors.average;
          break
        case 'web':
          // web result properties
          const lightVibrantColor = imgColors.lightVibrant
          break
        case 'ios':
          // iOS result properties
          const primaryColor = imgColors.primary
          primary=imgColors.primary
          secondary=imgColors.secondary
          break
        default:
          throw new Error('Unexpected platform key')
      }


     return[primary,secondary]
    }