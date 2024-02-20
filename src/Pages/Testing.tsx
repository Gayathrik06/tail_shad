// Testing.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Testing: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<string>('');
  const navigate = useNavigate();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTest(event.target.value);
  };

  const handleSubmit = () => {
    console.log(selectedTest);
    if (selectedTest === 'apicomponent') {
      navigate('/apicomponent', { replace: true });
    } else if (selectedTest === 'uicomponent') {
      navigate('/uicomponent', { replace: true });
    } else if (selectedTest === 'seocomponent') {
      navigate('/seocomponent', { replace: true });
    } else if (selectedTest === 'e2ecomponent') {
      navigate('/e2ecomponent', { replace: true });
    } else {
      alert("select one field");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[800px] gap-4">
        <CardHeader>
          <CardTitle>Choose testcase</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid gap-2 items-start space-y-2'>
            <select className="w-[750px] h-[40px] text-black" onChange={handleSelectChange} value={selectedTest}>
              <option value="">Select Type</option>
              <option value={'apicomponent'}>API</option>
              <option value={'seocomponent'}>SEO Testing</option>
              <option value={'e2ecomponent'}>End to End Testing</option>
              <option value={'uicomponent'}>UI Testing</option>
            </select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Create Testcase
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Testing;
