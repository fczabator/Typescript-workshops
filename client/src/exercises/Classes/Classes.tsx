import React, { useState } from 'react';
import {usePost} from '../../hooks/usePost';
import { TextInput, Form, FormField, Button } from 'grommet';
import { Description } from '../../components/Description';
import {content, hint} from './content';

interface Response {
  result: string | number[];
}

export const Classes = () => {
  const [stringToSort, setStringToSort] = useState('');
  const [numbersToSort, setNumbersToSort] = useState('');
  const {data: stringData, makePost: makeStringPost} = usePost<Response>({url: 'http://localhost:4000/sort'});
  const {data: numbersData, makePost: makeNumbersPost} = usePost<Response>({url: 'http://localhost:4000/sort'});

  const onSortString = async () => {
    makeStringPost({toSort: stringToSort});
  }

  const onSortNumbers = async () => {
    makeNumbersPost({toSort: numbersToSort.split(' ').map(char => parseInt(char))});
  }

  return (
    <div>
      <Description title="Description" content={content} />
      <Description title="Hint" content={hint} />
      <section>
        <Form onSubmit={onSortString}>
          <FormField label="String to sort">
            <TextInput onChange={e => setStringToSort(e.target.value)} name="string" />
          </FormField>
          <Button type="submit" label="sort" />
        </Form>
        {stringData?.result && (
          <div>{`Sorted ${stringData.result}`}</div>
        )}
      </section>
      <section>
        <Form onSubmit={onSortNumbers}>
          <FormField label="numbers to sort (only integers separated by whitespace">
            <TextInput onChange={e => setNumbersToSort(e.target.value)} name="string" />
          </FormField>
          <Button type="submit" label="sort" />
        </Form>
        {numbersData?.result && (
          <div>{`Sorted ${numbersData.result}`}</div>
        )}
      </section>
    </div>
  );
};
