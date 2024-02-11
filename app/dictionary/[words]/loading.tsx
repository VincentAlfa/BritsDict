import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <div className=''>
        <Skeleton className='h-[125px] w-[250px] rounded-xl bg-black' />
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
      Loading....
    </div>
  );
};

export default Loading;
