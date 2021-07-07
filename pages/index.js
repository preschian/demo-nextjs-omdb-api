import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { apiSearch } from '../shared/api';
import { initList } from '../shared/state/movieSlice';

// components
import SearchBar from '../components/SearchBar';
import Movie from '../components/Movie/Movie';
import Poster from '../components/Poster';

export default function Home({ movies }) {
  const dispatch = useDispatch();
  const posterURL = useSelector((state) => state.movie.posterURL);

  useEffect(() => {
    dispatch(initList(movies.Search));
  }, [movies]);

  return (
    <>
      <SearchBar />
      <Movie />
      {posterURL && <Poster />}
    </>
  );
}

export async function getStaticProps() {
  const { data } = await apiSearch();

  return {
    props: {
      movies: data,
    },
  };
}
