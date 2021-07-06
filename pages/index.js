import { apiSearch } from '../shared/api';

// components
import SearchBar from '../components/SearchBar';
import Movie from '../components/Movie/Movie';

export default function Home({ movies }) {
  console.log(movies);

  return (
    <>
      <SearchBar />
      <Movie movies={movies} />
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
