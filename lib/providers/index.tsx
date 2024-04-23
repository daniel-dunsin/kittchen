'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

interface Props {
  children: React.ReactNode;
}

const Providers = (props: Props) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        theme="light"
        draggable
        pauseOnHover={false}
      />
      {props.children}
    </QueryClientProvider>
  );
};

export default Providers;
