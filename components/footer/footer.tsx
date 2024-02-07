import { Copyright } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='fixed bottom-0 flex w-full items-center justify-center space-x-1 border-t-2 border-gray-200 p-4 shadow-xl'>
        <h1 className='flex items-center justify-center space-x-1'>
          <span>BritsDict</span>
          <Copyright width={16} height={16} />
          <span>2023.</span>
        </h1>
        <h1>All rights reserved</h1>
      </div>
    </footer>
  );
};

export default Footer;
