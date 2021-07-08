import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import Link from 'next/link';

import { searchMovie } from '../shared/state/movieSlice';
import { apiSearch } from '../shared/api';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  useEffect(async () => {
    const { data } = await apiSearch(text);

    if (data.Response === 'True') {
      setList(data.Search);
    } else {
      setList([]);
    }
  }, [text]);

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(text));
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const debounceOnChange = useMemo(() => debounce(onChange, 500), []);

  return (
    <div className="relative">
      <div className="bg-gray-900 text-white py-3 px-6">
        <input
          type="text"
          placeholder="Search movie. . ."
          className="text-black px-2 w-full"
          onChange={debounceOnChange}
          onKeyPress={onEnter}
        />
      </div>

      {/* autocomplete */}
      {list.length > 0 && (
        <div className="bg-gray-700 text-white absolute top-12 right-0 left-0 container z-10 py-2 flex flex-col gap-2">
          {list.slice(0, 3).map((movie) => {
            return (
              <Link href={`/movie/${movie.imdbID}`}>
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
