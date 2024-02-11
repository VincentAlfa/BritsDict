import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { generate } from 'random-words';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-5'>
      <div className='flex w-full flex-col items-center justify-center gap-2 text-center'>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
          Literally Just An English Dictionary
        </h1>
        <p className='max-w-96 text-balance text-sm text-muted-foreground md:max-w-[55rem] md:text-wrap md:text-center md:text-lg lg:text-xl'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eius
          aliquam numquam! Similique velit praesentium laboriosam repudiandae
          maxime quia possimus molestias inventore repellendus harum.
        </p>
      </div>
      <div className='flex w-full justify-center gap-8'>
        <Link href={`/dictionary/${generate()}`}>
          <Button className='bg-black'>Random Words</Button>
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
