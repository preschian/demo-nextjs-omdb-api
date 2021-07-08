import React from 'react';

import { render, screen } from '../../app/test-utils';
import Movie from './Movie';

it('should render list of movies', async () => {
  render(<Movie />, {
    preloadedState: {
      movie: {
        list: [
          {
            Title: 'How to Train Your Dragon',
            Year: '2010',
            imdbID: 'tt0892769',
            Type: 'movie',
            Poster:
              'https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg',
          },
          {
            Title: 'The Girl with the Dragon Tattoo',
            Year: '2011',
            imdbID: 'tt1568346',
            Type: 'movie',
            Poster:
              'https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg',
          },
          {
            Title: 'How to Train Your Dragon 2',
            Year: '2014',
            imdbID: 'tt1646971',
            Type: 'movie',
            Poster:
              'https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg',
          },
        ],
      },
    },
  });

  const movies = await screen.findAllByTestId('movie-card');
  expect(movies.length).toBe(3);
});
