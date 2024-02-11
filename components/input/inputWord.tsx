'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputWord = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleClick = () => {
    const input = inputRef.current?.value;
    router.push(`/dictionary/${input?.toLowerCase}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className='flex items-center justify-center gap-5'>
      <Input
        onKeyDown={handleKeyDown}
        className='h-8 w-64'
        ref={inputRef}
        placeholder='Search...'
      />
      <Button className='h-8' type='submit' onClick={handleClick}>
        Search
      </Button>
    </div>
  );
};

export default InputWord;
