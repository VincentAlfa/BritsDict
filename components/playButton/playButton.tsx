'use client';

import React from 'react';
import { Volume2 } from 'lucide-react';

const PlayButton = ({ audioSource }: { audioSource: string }) => {
  const playAudio = () => {
    const audio = new Audio(audioSource);
    audio.play();
  };

  return (
    <>
      <Volume2 className='cursor-pointer' onClick={playAudio}></Volume2>
    </>
  );
};

export default PlayButton;
