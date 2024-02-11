import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <div className=''>
        <Skeleton className='h-[500px] min-w-[350px] rounded-xl' />
      </div>
    </div>
  );
};

export default Loading;
