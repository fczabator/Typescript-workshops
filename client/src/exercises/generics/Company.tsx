import React, { useState } from 'react';
import { Description } from '../../components/Description';
import {content, hint} from './content'
import { usePost } from '../../hooks/usePost';
import { Button, Box } from 'grommet';

interface SalaryInfo {
  name: string;
  salary: number;
}

interface CompanyInfo {
  mostExperienced: string;
  salariesForEmployees: SalaryInfo[];
  printedCompany: string;
}
 
interface Response {
  result: CompanyInfo;
};

export const Company = () => {
  const {data, makePost} = usePost<Response>({url: 'http://localhost:4000/generics'})
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
      <div style={{marginBottom: '20px'}}>
        <Button label="Get company info" onClick={onCount} />
        {data?.result && !error && (
          <Box pad="medium">
            <span>{`Most experienced employee is: ${data.result.mostExperienced}`}</span>
            <span>{`Whole company printed: ${data.result.printedCompany}`}</span>
            <Box>
              Salaries:
              {data.result.salariesForEmployees.map(salaryInfo => (
                <Box pad="small" elevation="medium" margin="xsmall">
                  {`${salaryInfo.name} - ${salaryInfo.salary}$`}
                </Box>
              ))}
            </Box>
          </Box>
        )}
        {error && (
          <span>Error :(</span>
        )}
      </div>
    </div>
  );
};
