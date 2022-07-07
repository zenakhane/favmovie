import axios from 'axios';

export default function playlists() {


    return {
        userLogin: "",
        passLogin: "",
        movielist: [],
        movieDisplay: '',
        logUser() { 
            
        
        },
        getList() {
            axios
                .get('https://api.themoviedb.org/3/discover/movie?api_key=7e719bfe3cd3786ebf0a05d3b138853d&certification_country=US&certification.lte=G&sort_by=popularity.desc', {

                })
                .then(results => {
                    console.log(results.data.results)
                    this.movieDisplay = results.data.results
                })
                .catch(error => console.log(error))
        }
    }

}