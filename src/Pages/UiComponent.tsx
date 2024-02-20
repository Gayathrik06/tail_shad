import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Textarea } from "@/components/ui/textarea"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const handleSubmit=()=>{

  console.log()
}
const UiComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
    <Card className="w-[350px] gap-4">
      <CardHeader>
        <CardTitle>Ui Test</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid gap-2 items-start space-y-2'>
          <Label htmlFor="testcaseName">TestCase Name</Label>
          <Input
            type="text"
            placeholder="Enter testcase name"
            id="testcasename"
           
          />
          <div className='grid gap-2 items-start space-y-2'>
            <Label htmlFor="userType">Type</Label>
            <Select >
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Choose Type"  />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value={"chrome"} >Chrome</SelectItem>
                <SelectItem value={"firefox"} >Firefox</SelectItem>
              </SelectContent>
            </Select>
             </div>
          
        </div>
        <div className='grid gap-2 items-start space-y-2'>
          <Label htmlFor="description">Description</Label>
          <Textarea
           
            placeholder="Enter description"
            id="description"
          
          />
          </div>
          <div className='grid gap-2 items-start space-y-2'>
          <Label htmlFor="url">URL</Label>
          <Input
            type="text"
            placeholder="Enter url"
            id="url"
         
          />
         </div></CardContent>
         <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>
          create test
        </Button>
      </CardFooter>
    </Card>
  </div>
  );
};

export default UiComponent;
