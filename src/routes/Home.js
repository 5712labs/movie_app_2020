import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    // console.log(movies)
    this.setState( { movies, isLoading: false } )
  }

  componentDidMount() {
    // 영화 데이터 로딩!
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 6000);
    this.getMovie();
  }
  render() {
    const { isLoading, movies } = this.state
    return (
    <section className = "container">
      {isLoading ? (
        <div className = "Loader">
        <span className = "Loader__text">'Loading...'</span>
        </div>
        ) : (
          <div className = "movies">
          {movies.map( (movie) => {
          return (
            <Movie 
              key={movie.id}
              year={movie.year}
              genres={movie.genres}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
            );
        })}</div>)}
      </section>
    );
  }
}
export default Home;