import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const { locale } = useRouter();

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
