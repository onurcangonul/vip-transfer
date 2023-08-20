import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Layout from '@/layout/layout';
import { ToastContainer } from 'react-toastify';
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer />
            <Component {...pageProps} />
        </Layout>
  );
}
