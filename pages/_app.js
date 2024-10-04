// pages/_app.js
//import '../styles/globals.css'; // Global styles
import Layout from '../components/layout/Layout'; // Importing the Layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
