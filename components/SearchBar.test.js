import React from 'react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, fireEvent, screen, waitFor } from '../app/test-utils';
import SearchBar from './SearchBar';

jest.mock('lodash.debounce', () => jest.fn((fn) => fn));

const server = setupServer(
  rest.get('http://www.omdbapi.com/', (req, res, ctx) => {
    return res(
      ctx.json({
        Search: [
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
        totalResults: '1180',
        Response: 'True',
      }),
    );
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should open autocomplete', async () => {
  render(<SearchBar />);

  // open autocomplete
  userEvent.type(screen.getByTestId('search-input'), 'dragon');
  await waitFor(() => screen.getByTestId('search-autocomplete'));
  expect(screen.getByTestId('search-autocomplete')).toBeInTheDocument();
});
