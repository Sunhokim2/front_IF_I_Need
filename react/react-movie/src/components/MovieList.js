import { useState } from 'react';
import styles from './MovieList.module.css';
import { useEffect } from 'react';

const MovieList = () => {


  const [movieList, setMovieList] = useState([]);
  const [searchText, setSearchText] = useState("");


  const getData = async () => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=cba95d401a14ab806ffc13a5052aab89&query='+searchText;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    setMovieList(data.results);
  }

  useEffect(() => {
    getData();
  }, [])






  return (
    <div className={styles.movie}>
      <h1>영화 검색</h1>
      <div className={styles.search_box}>
        <input
          type="text"
          placeholder="영화 제목을 검색하세요"
          onChange={(e)=>{
            const search = e.target.value;
            setSearchText(search);
          }}
        />
        <button onClick={(e)=>{
          getData();
        }}>
          검색
        </button>
      </div>
      <ul className={styles.list}>
        {
          movieList.map((v, i) => {
            return (
              <li key={`${v.title}${v.id}`}>
                <img src={`https://image.tmdb.org/t/p/w185/${v.poster_path}`}
                />
                <h2>{v.title}</h2>
                <p>평점: {v.vote_average}</p>
                <p>개봉일: {v.release_date}</p>
                <p>{v.overview}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default MovieList;