import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = { }

  componentDidMount(){
    // promise 사용하기
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
    .then(potato => potato.json())    // 상위 작업이 완료(성공하든 실패하든)되면 실행할 작업을 then()으로 명시
    .then(json => console.log(json))
    .catch(err => console.log(err))  // 상위 작업들에서 오류가 발생하면 catch() 실행
  }

  //리액트 자체 기능이 많기 때문에 사용자 정의 함수는 구별을 위해 시작시 _(언더바) 사용
  _renderMoives = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })

    return movies
  }

  render() {
    // 컴포넌트 존재
    // 데이터 관련 작업
    return (
      <div className="App">
        { // this.state에 movies라는 정보가 존재하는지 여부를 확인한 후,
          // 경우에 따라 _renderMovies()함수가 실행되거나, Loading 문구가 출력되도록 함
          this.state.movies? this._renderMoives() : 'Loading'}
      </div>
    );
  }
}

export default App;
