import React from 'react';
import InputWord from '@/components/input/inputWord';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='fixed top-0 flex w-full items-center justify-between border-b-2 border-gray-200 px-1 gap-6 md:0 md:px-4 py-2 shadow-sm'>
      <Link href={'/'}>
        <h1 className='text-xl font-bold md:text-2xl'>BritsDict</h1>
      </Link>
      <InputWord />
      <Link href={'https://github.com/VincentAlfa/BritsDict'}>
        <GitHubLogoIcon width={25} height={25} className='hidden md:block ' />
      </Link>
    </nav>
  );
};

export default Navbar;
