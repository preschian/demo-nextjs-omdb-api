import { useSelector, useDispatch } from 'react-redux';

import { nextPage } from '../../shared/state/movieSlice';
import useOnScreen from '../../shared/intersection';

// components
import MovieCard from './MovieCard';

function Movie() {
  const list = useSelector((state) => state.movie.list);
  const dispatch = useDispatch();

  const [containerRef, visible] = useOnScreen();

  if (visible) {
    dispatch(nextPage());
  }

  return (
    <div className="container py-6">
      {list && (
        <div className="flex flex-col gap-4">
          {list.map((movie, index) => {
            return <MovieCard key={movie.imdbID + index} movie={movie} />;
          })}
        </div>
      )}

      {/* TODO: replace with loading state */}
      {list && (
        <div
          className="bg-gray-900 text-white rounded text-center p-2 mt-4"
          ref={containerRef}
        >
          Load more. . .
        </div>
      )}

      {!list && <p className="text-center">Please try another keywords</p>}
    </div>
  );
}

export default Movie;
