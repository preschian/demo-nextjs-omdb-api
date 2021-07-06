import { useState } from 'react';

import { apiSearch } from '../../shared/api';

// components
import MovieCard from './MovieCard';

function Movie({ movies }) {
  const [page, setPage] = useState(1);
  const [list, setList] = useState(movies.Search);

  const nextPage = async () => {
    const next = page + 1;
    const { data } = await apiSearch('marvel', {
      page: next,
    });

    setPage(next);
    setList((state) => [...state, ...data.Search]);
  };

  return (
    <div className="container py-6">
      <div className="flex flex-col gap-4">
        {list.map((movie, index) => {
          return <MovieCard key={movie.imdbID + index} movie={movie} />;
        })}
      </div>

      <div
        className="bg-gray-900 text-white rounded text-center p-2 mt-4"
        onClick={nextPage}
      >
        Load more. . .
      </div>
    </div>
  );
}

export default Movie;
