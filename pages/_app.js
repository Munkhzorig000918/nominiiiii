import '../styles/globals.css'
import { Provider } from "react-redux"

import { reduxStore } from "../redux/store"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const gtag = process.env.NEXT_PUBLIC_GOOGLE_ID
export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', gtag, { page_path: url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  )
}
