import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import Link from 'next/link';

import { searchMovie } from '../shared/state/movieSlice';
import { apiSearch } from '../shared/api';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(text));
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const autoComplete = useCallback(
    debounce(async (text) => {
      const { data } = await apiSearch(text);

      if (data.Response === 'True') {
        setList(data.Search);
      } else {
        setList([]);
      }
    }, 500),
    [],
  );

  useEffect(async () => {
    if (text.length > 0) {
      autoComplete(text);
    }
  }, [text]);

  return (
    <div className="relative">
      <div className="bg-gray-900 text-white py-3 px-6">
        <input
          type="text"
          placeholder="Search movie. . ."
          className="text-black px-2 w-full"
          onChange={onChange}
          onKeyPress={onEnter}
          data-testid="search-input"
        />
      </div>

      {/* autocomplete */}
      {list.length > 0 && (
        <div
          className="bg-gray-700 text-white absolute top-12 right-0 left-0 container z-10 py-2 flex flex-col gap-2"
          data-testid="search-autocomplete"
        >
          {list.slice(0, 3).map((movie) => {
            return (
              <Link href={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                <a className="flex gap-2 items-center">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-1/12"
                  />
                  <p>{movie.Title}</p>
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
