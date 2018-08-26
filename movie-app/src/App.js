import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = { }

  componentDidMount(){
    this._getMovies();
  }

  //리액트 자체 기능이 많기 때문에 사용자 정의 함수는 구별을 위해 시작시 _(언더바) 사용
  _renderMoives = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
      title = {movie.title_english}
      poster = {movie.medium_cover_image}
      key = {movie.id}
      genres = {movie.genres}
      synopsis = {movie.synopsis}
      />
    })

    return movies
  }

  //async 함수: 비동기 처리 작업을 할 수 있음(블로킹X)
  _getMovies = async () => {
    //await: 해당 함수가 완료될 때까지 기다림, 함수의 결과는 movies에 담기게 된다.
    //여기서 _callApi()의 결과는 json.data.movies 가 된다.
    const movies = await this._callApi()
    this.setState({
      movies
      //movies : movies 와 동일
    })
  }

  _callApi = () => {
    // promise 사용하기
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())    // 상위 작업이 완료(성공하든 실패하든)되면 실행할 작업을 then()으로 명시
    .then(json => json.data.movies)
    .catch(err => console.log(err))  // 상위 작업들에서 오류가 발생하면 catch() 실행
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMoives() : 'Loading'}
      </div>
    );
  }
}

export default App;
