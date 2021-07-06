import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ maxWidth: '375px', margin: '0 auto' }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
