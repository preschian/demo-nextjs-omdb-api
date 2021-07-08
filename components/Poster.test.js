import React from 'react';

import { render, fireEvent, screen } from '../app/test-utils';
import Poster from './Poster';

it('should render or close poster', async () => {
  const posterURL = 'https://source.unsplash.com/1600x900/';
  render(<Poster />, {
    preloadedState: {
      movie: {
        posterURL,
      },
    },
  });

  expect((await screen.findByTestId('poster')).getAttribute('src')).toBe(
    posterURL,
  );
  expect(
    (await screen.findByTestId('poster-download')).getAttribute('href'),
  ).toBe(posterURL);

  // close poster
  fireEvent.click(screen.getByTestId('poster-close'));
  expect((await screen.findByTestId('poster')).getAttribute('src')).toBe('');
  expect(
    (await screen.findByTestId('poster-download')).getAttribute('href'),
  ).toBe('');
});
