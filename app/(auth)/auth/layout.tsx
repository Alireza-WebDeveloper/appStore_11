import React from 'react';

import Banner from './components/banner';

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Banner />
      {children}
    </div>
  );
};

export default RootLayout;
