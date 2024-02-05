import { Copyright } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='sticky flex items-center justify-center shadow'>
        <h1 className=''>BritsDict</h1>
        <Copyright width={18} height={18} />.<h1>All rights reserved</h1>
      </div>
    </footer>
  );
};

export default Footer;
