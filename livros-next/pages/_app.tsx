import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Garantir que o Bootstrap seja carregado apenas no lado do cliente
        typeof document !== 'undefined'
            ? require('bootstrap/dist/js/bootstrap')
            : null;
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
