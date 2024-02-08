'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputWord = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dictionary/${inputRef.current?.value}`);
  };

  return (
    <div className='flex items-center justify-center gap-5'>
      <Input className='w-64 h-8' ref={inputRef} placeholder='Search...'/>
      <Button onClick={handleClick}>Search</Button>
    </div>
  );
};

export default InputWord;
