import GenerateRandom from '@/components/generateRandom/generateRandom';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

type paramsType = {
  params: {
    words: string;
  };
};

const getDictData = async (words: string) => {
  const url = await axios.get(`${process.env.NEXT_PUBLIC_API}/${words}`);
  return url.data;
};

const Dictionary = async ({ params }: paramsType) => {
  const words = params.words;
  const data = await getDictData(words);
  console.log(data);

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
      <h1>{data.word}</h1>
      <h1>{data.pronunciation[1].pron}</h1>
      <audio controls>
        <source src={data.pronunciation[1].url} type='audio/mpeg' />
      </audio>
      <GenerateRandom />
      <Link href={'/'}>
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default Dictionary;