'use client';

import { Props } from './index.types';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { NextUIProvider } from '@nextui-org/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Socket from '../../design/common/socket';

const AppProvider: React.FC<Props> = ({ children }) => {
  const store = new QueryClient();

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    console.warn('⚠️ NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set in .env.local');
  }

  return (
    <GoogleOAuthProvider
      clientId={
        '30091741855-al7que5i4qhps30ih9g3s1017ipmd308.apps.googleusercontent.com'
      }
    >
      <QueryClientProvider client={store}>
        <NextUIProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={true} />
          <Toaster position="top-left" />
          <Socket />
        </NextUIProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
};

export default AppProvider;
