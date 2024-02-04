import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      <div className='flex flex-col gap-2 text-center'>
        <h1 className='text-2xl font-bold'>
          Literally Just An English Dictionary
        </h1>
        <p className='text-muted-foreground'>
          Find the right word every time with BritsDict!. Explore definitions,
          pronunciations, and sentences Examples
        </p>
      </div>
      <div className='flex gap-8'>
        <Link href={'/'} className={buttonVariants()}>
          Get Started
        </Link>
        <Link
          href={'https://github.com/VincentAlfa/BritsDict'}
          className={`${buttonVariants({ variant: 'outline' })} text-base`}
        >
          <GitHubLogoIcon width={18} height={18} className='mr-2' />
          GitHub
        </Link>
      </div>
    </div>
  );
}
