import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <div className='flex h-dvh flex-col items-center justify-center gap-5'>
      <div className='flex flex-col gap-2 text-center'>
        <h1 className='text-3xl font-extrabold'>
          Literally Just An English Dictionary
        </h1>
        <p className='text-muted-foreground'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eius
          aliquam numquam! Similique velit praesentium laboriosam repudiandae
          maxime quia possimus molestias inventore repellendus harum.
          Repellendus itaque veritatis a natus nostrum!
        </p>
      </div>
      <div className='flex gap-8'>
        <Link href={'/'} className={`${buttonVariants()} bg-gray-950`}>
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
