import React, { useState } from 'react';
import { Box } from 'grommet';

interface Props {
  title: string;
  message: string;
}

export const Card: React.FC<Props> = ({ title, message }) => {
  const [isExpanded, setExpanded] = useState<boolean | null>(null);  

  return (
    <Box elevation="medium">
      <section>
        <h1 onClick={() => setExpanded(!isExpanded)}>{title}</h1>
        {isExpanded === null && (
          <span>Click on me to expand!</span>
        )}
      </section>
      {isExpanded && (
        <Box pad="medium">{message}</Box>
      )}
    </Box>
  )
}