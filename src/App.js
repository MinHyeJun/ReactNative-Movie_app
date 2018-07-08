import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
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

class App extends Component {
  //Render: componentWillMoundt() -> render() -> componentDidMount()
  //Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate()-> render() -> componentDidUpdate() 
  
  state = {
    greeting: 'Hello!'
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        greeting:'Hello again!'
      })
    },5000)
  }
  
  componentWillMount(){
    // 사이클 시작
    // api 요청 작업
    console.log('will mount')
  }
  
  render() {
    // 컴포넌트 존재
    // 데이터 관련 작업
    console.log('did render')
    return (
      <div className="App">
      {this.state.greeting}
       {movies.map((movie, index) => {
         return <Movie title={movie.title} poster={movie.poster} key={index}/>
       })}
      </div>
    );
  }
}

export default App;
