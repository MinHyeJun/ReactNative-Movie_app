import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    greeting: 'Hello!',
    movies: [
      {
        title: "Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
      },
      {
        title: "Full Metal Jacket",
        poster: "https://ia.media-imdb.com/images/M/MV5BNzc2ZThkOGItZGY5YS00MDYwLTkyOTAtNDRmZWIwMGRhYTc0L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
      },
      {
        title: "Star Wars",
        poster: "https://ia.media-imdb.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
      }
    ]
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          //기존 영화 정보들을 그대로 두고, 새로운 영화 정보 추가
          {
            title: 'Trainspotting',
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Trainspotting_ver2.jpg/250px-Trainspotting_ver2.jpg'
          },
          ...this.state.movies  //기존 영화 정보들을 그대로 둠
        ]
      })
    },5000)
  }

  render() {
    // 컴포넌트 존재
    // 데이터 관련 작업
    return (
      <div className="App">
       {this.state.movies.map((movie, index) => {
         return <Movie title={movie.title} poster={movie.poster} key={index}/>
       })}
      </div>
    );
  }
}

export default App;
