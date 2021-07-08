import { useSelector, useDispatch } from 'react-redux';

import { setPosterURL } from '../shared/state/movieSlice';

export default function Poster() {
  const posterURL = useSelector((state) => state.movie.posterURL);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(setPosterURL(''));
  };

  return (
    <div className="fixed inset-0 text-white">
      <div className="absolute inset-0 bg-gray-900" onClick={close}></div>

      <div className="flex flex-col justify-center items-center relative z-10 m-6">
        <img src={posterURL} className="w-full rounded" data-testid="poster" />

        <div className="flex mt-6 gap-2">
          <a
            className="bg-gray-700 rounded px-4 py-1"
            href={posterURL}
            target="_blank"
            data-testid="poster-download"
          >
            Download Poster
          </a>
          <div
            className="bg-gray-700 rounded"
            onClick={close}
            data-testid="poster-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
