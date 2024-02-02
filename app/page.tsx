import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Home</h1>
      <Link href={'/dictionary'}>
        <Button>Click</Button>
      </Link>
    </div>
  );
}
