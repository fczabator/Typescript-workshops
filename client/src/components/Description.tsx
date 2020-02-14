import React, { useState } from 'react';
import { Markdown, Box, Collapsible, Button } from 'grommet';

interface Props {
  content: string;
  title: string;
};

export const Description: React.FC<Props> = ({content, title}) => {
  const [isOpen, setOpen] = useState(true);
  return (
    <Box style={{maxWidth: '900px'}}>
      <Box direction="row" align="center">
        <h2>{title}</h2>
        <Button label={isOpen ? 'hide' : 'show'} onClick={() => setOpen(!isOpen)} style={{ marginLeft: '10px', width: 'fit-content', height: 'fit-content' }} />
      </Box>
      <Collapsible open={isOpen}>
        <Markdown>{content}</Markdown>
      </Collapsible>
    </Box>
  );
};
