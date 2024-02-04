import GenerateRandom from '@/components/generateRandom/generateRandom';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';


const getDictData = async (words: string) => {
  const ApiData = await axios.get(
    `https://cambridge-dictionary-api.vercel.app/api/dictionary/english/${words}`,
  );

  return ApiData.data;
};

const Dictionary = async ({ params }: { params: { words: string } }) => {
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
