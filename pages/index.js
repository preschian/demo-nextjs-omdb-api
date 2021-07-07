import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { apiSearch } from '../shared/api';
import { initList } from '../shared/state/movieSlice';

// components
import SearchBar from '../components/SearchBar';
import Movie from '../components/Movie/Movie';

export default function Home({ movies }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initList(movies.Search));
  });

  return (
    <>
      <SearchBar />
      <Movie />
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
