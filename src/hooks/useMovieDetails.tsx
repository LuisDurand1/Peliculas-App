import React , {useEffect, useState} from 'react'
import { MovieFull } from '../interfaces/movieInterface';
import movieDb from '../api/movieDb';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails{
  isLoading:boolean,
   cast:Cast[],
   movieFull?:MovieFull

}

export const useMovieDetails = (movieId:number) => {

const [state, setState] = useState<MovieDetails>({
 isLoading:true,
 cast:[],
 movieFull:undefined

})

const getMovieDetails = async () =>{

const movieDetailsPromise= movieDb.get<MovieFull>(`${movieId}`)
const castPromise= movieDb.get<CreditsResponse>(`/${movieId}/credits`)


const[movieDetailsResp,castResp]=await Promise.all([movieDetailsPromise,castPromise])


setState({
isLoading:false,
cast:castResp.data.cast,
movieFull:movieDetailsResp.data,

})


}

useEffect(() => {
 
    getMovieDetails()
    
    }, [])
    
    

 return{...state}
}
