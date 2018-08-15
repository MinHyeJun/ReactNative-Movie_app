import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component{

//     static propTypes = {
//         title: propTypes.string.isRequired,
//         poster: propTypes.string.isRequired
//     }

//     render(){
//         return(
//         <div>
//             <MoviePoster poster={this.props.poster}/>
//             <h1>{this.props.title}</h1>
//         </div>
//         )
//     }
// }

function Movie({title, poster}){

    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>)
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

//Smart Component: state 존재, 생성 및 업데이트 주기 존재
// class MoviePoster extends Component{
//     static propTypes = {
//         poster: propTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src={this.props.poster} alt = 'Movie Poster'/>
//         )
//     }
// }

// Dumb Component: stateless, props만 갖고 return만 함(주기가 없음)
function MoviePoster ({poster}){
    return(
        <img src={poster} alt = 'Movie Poster'/>
    )
}

// Dumb Component의 propTypes 체크 방법
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;