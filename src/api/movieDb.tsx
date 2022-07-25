

import axios from "axios"


const movieDb = axios.create({
    baseURL:
    'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'3a0a186d3cb5740926079404d5e26678',
        language:'es-ES'
    }
})


export default movieDb