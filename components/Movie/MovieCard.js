import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { setPosterURL } from '../../shared/state/movieSlice';

export default function MovieCard({ movie }) {
  const { Poster, Title, Year, Type, imdbID } = movie;
  const dispatch = useDispatch();

  const Banner = () => {
    if (Poster.includes('amazon.com')) {
      return (
        <img
          src={Poster}
          alt={Title}
          className="w-full"
          onClick={() => dispatch(setPosterURL(Poster))}
          data-testid="movie-poster"
        />
      );
    }

    return (
      <div
        className="bg-black absolute inset-0"
        data-testid="movie-notfound"
      ></div>
    );
  };

  return (
    <div
      className="bg-gray-900 text-white rounded overflow-hidden flex"
      data-testid="movie-card"
    >
      <div className="w-1/4 relative">
        <Banner />
      </div>
      <div className="p-4 flex-1">
        <Link href={`/movie/${imdbID}`}>
          <a>{Title}</a>
        </Link>

        <div className="flex text-xs gap-2 mt-2">
          <p className="bg-gray-700 px-2 rounded">{Year}</p>
          <p className="bg-gray-700 px-2 rounded">{Type}</p>
        </div>
      </div>
    </div>
  );
}
