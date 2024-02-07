import { generate } from 'random-words';
import React from 'react';

export const dynamic = 'force-dynamic';

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
