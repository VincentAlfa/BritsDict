'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { generate } from 'random-words';

const GenerateRandom = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dictionary/${generate()}`);
  };

  return (
    <div>
      <Button onClick={handleClick}>Generate Random Words</Button>
    </div>
  );
};

export default GenerateRandom;
