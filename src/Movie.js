import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
        <div>
            <MoviePoster />
            <h1> hello this is a movie</h1>
        </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src = "https://imgix.bustle.com/rehost/2016/9/13/f3bd74e6-68cc-40d0-877e-1b11ae98cfa6.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70"/>
        )
    }
}

export default Movie;