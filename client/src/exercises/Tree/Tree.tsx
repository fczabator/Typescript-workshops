import React, { useState } from 'react';
import { Description } from '../../components/Description';
import {content, hint} from './content'
import { usePost } from '../../hooks/usePost';
import { Button } from 'grommet';

interface Response {
  result: number;
};

export const Tree = () => {
  const {data, makePost} = usePost<Response>({url: 'http://localhost:4000/tree'})
  const [error, setError] = useState<null | Error>(null);

  const onCount = async () => {
    try {
      setError(null);
      await makePost();
    } catch(error) {
      setError(error)
    }
  }

  return (
    <div>
      <Description title="Description" content={content} />
      <Description title="Hint" content={hint} />
      <section>
        <Button label="Generate and count" onClick={onCount} />
        {data?.result && !error && (
          <span>{`Total value is: ${data.result}`}</span>
        )}
        {error && (
          <span>Error :(</span>
        )}
      </section>
    </div>
  );
};
