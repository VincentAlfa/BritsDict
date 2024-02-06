import { generate } from 'random-words';
import React from 'react';

const Generate = () => {
  return (
    <div>
      <h1>{generate()}</h1>
      <h1>{generate()}</h1>
      <h1>{generate()}</h1>
      <h1>{generate()}</h1>
      <h1>{generate()}</h1>
      <h1>{generate()}</h1>
    </div>
  );
};

export default Generate;
