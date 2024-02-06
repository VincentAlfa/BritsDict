import { Copyright } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='fixed bottom-0 flex w-full items-center justify-center space-x-2 border bg-slate-100 p-4 shadow-xl'>
        <h1 className='flex items-center justify-center space-x-6'>
          BritsDict
          <Copyright width={15} height={15} />.
        </h1>
        <h1>All rights reserved</h1>
      </div>
    </footer>
  );
};

export default Footer;
