import PlayButton from '@/components/playButton/playButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import WordExamples from '@/components/wordExamples/wordExamples';
import removeDuplicate from '@/lib/removeDuplicate';
import { AccordionTrigger } from '@radix-ui/react-accordion';
import axios from 'axios';
import React from 'react';

type paramsType = {
  params: {
    words: string;
  };
};

const getDictData = async (words: string) => {
  const url = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${words}`);
  return url.data;
};

export async function generateMetadata({ params }: paramsType) {
  return {
    title: `${params.words.toUpperCase()} | British English Dictionary - BritsDict`,
  };
}

const Dictionary = async ({ params }: paramsType) => {
  const words = params.words;
  const data = await getDictData(words);

  const partOfSpeech = removeDuplicate(data.pos);
  const pronunciation = data.pronunciation[1];
  const definition = data.definition.filter((_: unknown, i: number) => i < 3);
  console.log(definition);

  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <Card className='h-[500px] w-[350px] mb-5 md:mb-0'>
        <CardHeader>
          <CardTitle className='text-3xl'>{data.word}</CardTitle>
          <CardDescription>
            {partOfSpeech.map((pos: string, index) => {
              return (
                <span
                  key={pos}
                >{`${pos}${index === partOfSpeech.length - 1 ? '' : ','} `}</span>
              );
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col'>
          <div className='flex gap-2'>
            <h1>{pronunciation.lang.toUpperCase()}</h1>
            <PlayButton audioSource={pronunciation.url} />
            <h1 className='pl-4'>{pronunciation.pron}</h1>
          </div>
          <h1 className='pt-5'>Examples</h1>
          <WordExamples datas={definition} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dictionary;
