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
    console.log(inputRef.current?.value);
  };

  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h1>Hello</h1>
      <Input className='w-96' ref={inputRef} />
      <Button className='mt-5' onClick={handleClick}>
        Klik
      </Button>
    </div>
  );
};

export default InputWord;
