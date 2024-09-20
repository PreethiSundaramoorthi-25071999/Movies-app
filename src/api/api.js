const API_KEY = '7031e940';

//function to fetch movie search results

export const fetchMovies = async (searchTerm, type) => {
    //construct the URL for the api request

    const url = `https://www.omdbapi.com/?s=${searchTerm}&type=${type}&apikey=${API_KEY}`;

    try {
        //fetch data from the OMDB API
        const response = await fetch(url);

        //convert the response to the json
        const data = await response.json();

        //return the list of movies or empty array
        return data.Search || []
    } catch(error) {
        console.error("error fetching movies", error);
        return[]
    }
}

//function to fetch the detailed information for the specific movie

export const fetchMovieDetail = async(id) => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;

    try {
        //fetch data from the OMDB API
        const response = await fetch(url);

        //convert the response to the JSON
        const data = await response.json();

        //return the list of movies or empty array
        return data;

    } catch(error) {
        console.error("error fetching movies", error);
        return null;
    }
}