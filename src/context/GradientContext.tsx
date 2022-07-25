import React from "react";
import { createContext, useState } from "react";



interface Colors{
  primary:string;
  secondary:string;

}

interface ContextProps{
    colors: Colors;
    prevColors:Colors;
    setMainColors: (colors: Colors) => void;
    setPrevMainColors: (colors: Colors) => void;

}


export const GradientContext = createContext({}as ContextProps
    ) 

export const GradientProvider = ({children}:any) =>{

const [colors, setColors] = useState<Colors>({
    primary:'transparent',
    secondary:'transparent'
})


const [prevColors, setPrevColors] = useState<Colors>({
    primary:'transparent',
    secondary:'transparent'
})

const setMainColors = (colors:Colors) =>{
setColors(colors)

}

const setPrevMainColors = (colors:Colors) =>{
setPrevColors(colors)
    
}

return(
    <GradientContext.Provider
    value={{
    colors,
    prevColors,
    setMainColors,
    setPrevMainColors

    }}
    >

    {children}

    </GradientContext.Provider>
)



}