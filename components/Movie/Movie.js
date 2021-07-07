import { useSelector, useDispatch } from 'react-redux';

import { nextPage } from '../../shared/state/movieSlice';

// components
import MovieCard from './MovieCard';

function Movie() {
  const list = useSelector((state) => state.movie.list);
  const dispatch = useDispatch();

  return (
    <div className="container py-6">
      <div className="flex flex-col gap-4">
        {list.map((movie, index) => {
          return <MovieCard key={movie.imdbID + index} movie={movie} />;
        })}
      </div>

      <div
        className="bg-gray-900 text-white rounded text-center p-2 mt-4"
        onClick={() => dispatch(nextPage())}
      >
        Load more. . .
      </div>
    </div>
  );
}

export default Movie;
