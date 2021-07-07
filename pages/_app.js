import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';

import { store } from '../app/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: '375px', margin: '0 auto' }}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
