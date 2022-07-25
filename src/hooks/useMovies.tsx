import React, {useEffect, useState} from 'react';
import movieDb from '../api/movieDb';
import { MovieDbResp, Movie } from '../interfaces/movieInterface';

interface Response{
  nowPlaying:Movie[],
  popular:Movie[],
  topRated:Movie[],
  upcoming:Movie[]
}



export const useMovies = () => {
  const [loading, setLoading] = useState(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Response>({
    nowPlaying:[],
    popular:[],
    topRated:[],
    upcoming:[],


  });


  const getMovies = async () => {
    const now_playingPromise =  movieDb.get<MovieDbResp>('now_playing');
    const popularPromise     =  movieDb.get<MovieDbResp>('popular');
    const top_ratedPromise   =  movieDb.get<MovieDbResp>('top_rated');
    const upcomingPromise    =  movieDb.get<MovieDbResp>('upcoming');


   
  const MoviesPromise=await Promise.all([
    now_playingPromise,
    popularPromise,
    top_ratedPromise,
    upcomingPromise
   ])


   setPeliculasEnCine({

    nowPlaying:MoviesPromise[0].data.results,
    popular:MoviesPromise[1].data.results,
    topRated:MoviesPromise[2].data.results,
    upcoming:MoviesPromise[3].data.results
   })

    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {

    ...peliculasEnCine,
    loading,
  };
};
