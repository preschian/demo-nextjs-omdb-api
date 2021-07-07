import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { apiMovieByID } from '../../shared/api';

export default function MovieDetail() {
  const router = useRouter();
  const { title } = router.query;
  const [movie, setMovie] = useState({});

  useEffect(async () => {
    if (title) {
      const { data } = await apiMovieByID(title);
      const { Actors, Poster, Title, imdbRating, Genre, Released } = data;

      setMovie({
        actors: Actors,
        poster: Poster,
        title: Title,
        rating: imdbRating,
        genre: Genre,
        released: Released,
      });
    }
  }, [title]);

  const goBack = () => {
    history.back();
  };

  return (
    <>
      <div
        className="bg-gray-900 text-white py-3 px-6 flex gap-1"
        onClick={goBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>back</span>
      </div>

      <div className="container mt-6">
        <div className="bg-gray-900 rounded overflow-hidden">
          <div className="relative">
            <img src={movie.poster} alt={movie.title} className="w-full" />
            <div className="absolute right-0 bottom-0 bg-white rounded p-2 m-4">
              {movie.rating}
            </div>
          </div>

          <div className="p-6 text-white">
            <p className="font-bold text-lg">{movie.title}</p>

            <table className="mt-4 w-full">
              <tbody>
                <tr>
                  <td className="align-top">Actors</td>
                  <td className="align-top">:</td>
                  <td className="align-top">{movie.actors}</td>
                </tr>
                <tr>
                  <td className="align-top">Genre</td>
                  <td className="align-top">:</td>
                  <td className="align-top">{movie.genre}</td>
                </tr>
                <tr>
                  <td className="align-top">Released</td>
                  <td className="align-top">:</td>
                  <td className="align-top">{movie.released}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
