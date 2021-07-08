import React from 'react';

import { render, screen } from '../../app/test-utils';
import MovieCard from './MovieCard';

it('should render image if poster url includes amazon.com domain', async () => {
  const props = {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
    Title: '',
    Year: '',
    Type: '',
    imdbID: '',
  };
  render(<MovieCard movie={props} />);

  expect(screen.getByTestId('movie-poster').getAttribute('src')).toBe(
    props.Poster,
  );
});

it('should render background black if poster url not exists', () => {
  const props = {
    Poster: '',
    Title: '',
    Year: '',
    Type: '',
    imdbID: '',
  };
  render(<MovieCard movie={props} />);

  expect(screen.getByTestId('movie-notfound').getAttribute('class')).toBe(
    'bg-black absolute inset-0',
  );
});
