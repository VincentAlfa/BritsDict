import GenerateRandom from '@/components/generateRandom/generateRandom';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';



const Dictionary = () => {
  return (
    <div>
      <Link href={'/'}>
        <Button></Button>
      </Link>
      <GenerateRandom />
    </div>
  );
};

export default Dictionary;
