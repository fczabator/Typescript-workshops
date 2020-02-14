import React, { useEffect, useRef } from 'react';
import { Button, WorldMap, Box } from 'grommet';
import { Description } from '../../components/Description';
import {content, hint} from './content'
import { Params } from './Params';

interface ParamsShape {
  [key: string]: number;
}

interface Place {
  color: string;
  location: number[];
}

interface Places {
  [key: string]: Place
}

export const ShowcaseParams = () => {
  const [places, setPlaces] = React.useState<Places>({});

  const paramsRef = useRef<Params<ParamsShape>>();
  
  useEffect(() => {
    paramsRef.current = new Params<ParamsShape>({});
  }, []);

  const onSelectPlace = ([lat, lng]: number[]) => {
    const key = `${lat}-${lng}`;
    const newState = {...places, [key]: {color: "accent-1", location: [lat, lng]}};
    setPlaces(newState);
    const currentNumberOfClicks = paramsRef.current?.get(key) || 0;
    paramsRef.current?.set({...paramsRef.current.getAll, [key]: currentNumberOfClicks + 1})
  };

  console.log(paramsRef.current?.getAll())
  
  return (
    <div>
      <Description title="Description" content={content} />
      <Description title="Hint" content={hint} />
      <div>
        <Button label="Start the events" onClick={() => {}} />
      </div>
      <Box pad="large">
        <WorldMap onSelectPlace={onSelectPlace} places={Object.values(places)} />
      </Box>
      <Box pad="large">
        <p style={{fontSize: '12px'}}>
          {JSON.stringify(paramsRef.current?.getAll())}
        </p>
      </Box>
    </div>
  );
};
