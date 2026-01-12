import { Inter } from 'next/font/google';
import './globals.css';
// import './index.css';
import { jwtDecode } from 'jwt-decode';
import { getCookie } from './config/ApiConfig';
import { AuthProvider } from './config/Providers';
import { LoadingProvider } from './service/LoadingContext';
import LoadingIndicator from './components/LoadingIndicator';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = async ({ children }) => {
    let usuario = {};
    const token = await getCookie('token');

    if (token) {
        const payload = jwtDecode(token);
        usuario = { ...payload, rol: payload.rol[0], token };
    }

    return (
        <html lang="en">
            <head>
                <title>HealthCore</title>
                <script
                    src="https://kit.fontawesome.com/e4cfdf0b25.js"
                    crossOrigin="anonymous"
                    async
                />
            </head>

            <body className={inter.className}>
                <LoadingProvider>
                    <AuthProvider usuario={usuario}>
                        <LoadingIndicator /> {/* Agrega el LoadingIndicator */}
                        {children}
                    </AuthProvider>
                </LoadingProvider>
            </body>
        </html>
    );
};

export default RootLayout;
