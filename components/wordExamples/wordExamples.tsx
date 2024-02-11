'use client';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type exampleType = {
  datas: [
    {
      id: number;
      text: string;
      example: [
        {
          id: number;
          text: string;
        },
      ];
    },
  ];
};

const WordExamples = ({ datas }: exampleType) => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      {datas.map((data) => {
        return (
          <AccordionItem key={data.id} value={`value-${data.id}`}>
            <AccordionTrigger className='text-left'>
              {data.text}
            </AccordionTrigger>
            <AccordionContent>
              {data.example
                .filter((_: unknown, i: number) => i < 1)
                .map((data) => {
                  return data.text;
                })}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default WordExamples;
