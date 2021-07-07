import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchMovie } from '../shared/state/movieSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(text));
    }
  };

  return (
    <div className="bg-gray-900 text-white py-3 px-6">
      <input
        type="text"
        placeholder="Search movie. . ."
        className="text-black px-2 w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onEnter}
      />
    </div>
  );
}
