import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
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

function Movie({title, poster, genres, synopsis}){

    return(
        <div className = "Movie">
            <div className = "Movie__Column">
                <MoviePoster poster={poster} alt = {title}/>
            </div>
            <div className = "Movie__Column">
                <h1>{title}</h1>
                <div className = "Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre = {genre} key = {index} />)}
                </div>
                <div className = "Movie__Synopsis">
                    <LinesEllipsis
                        text = {synopsis}
                        maxLine = '3'
                        ellipsis = ' ...'
                        trimRight
                        basedOn = 'letters'
                    />
                </div>
            </div>
        </div>)
}

// Dumb Component: stateless, props만 갖고 return만 함(주기가 없음)
function MoviePoster ({poster, alt}){
    return(
        <img src={poster} alt = {alt} title = {alt} className = "Movie__Poster"/>
    )
}

function MovieGenre ({genre}){
    return(
        <span className = "Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

// Dumb Component의 propTypes 체크 방법
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;