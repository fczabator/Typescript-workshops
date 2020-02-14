import React from 'react';
import {Box} from 'grommet';
import {Card} from './Card';
import {content, hint} from './content';
import { Description } from '../../components/Description';

export const Cards = () => {
  return (
    <Box pad="small">
      <Description title="Description" content={content} />
      <Description title="Hint" content={hint} hidden />
      <Card title="This is title" message="This is message" />
    </Box>
  );
};
