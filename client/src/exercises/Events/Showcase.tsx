import React from 'react';
import { Button } from 'grommet';
import { Description } from '../../components/Description';
import {content, hint} from './content'
import {eventsTest} from './eventsTest';

export const ShowcaseEvents = () => {
  return (
    <div>
      <Description title="Description" content={content} />
      <Description title="Hint" content={hint} hidden />
      <div>
        <Button label="Start the events" onClick={() => eventsTest()} />
      </div>
    </div>
  );
};
