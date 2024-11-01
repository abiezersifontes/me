// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'; // Global styles
import Layout from '../components/layout/Layout'; // Importing the Layout component

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;