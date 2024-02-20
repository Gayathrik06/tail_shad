// import {useNavigate } from 'react-router-dom';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// function Signup() {
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     // Add your form submission logic here

//     // Redirect to login page after successful submission
//     navigate('/login', { replace: true });
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Card className="w-[350px] gap-4">
//         <CardHeader>
//           <CardTitle>Signup</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className='grid gap-2 items-start space-y-2'>
//             <Label htmlFor="username">Username</Label>
//             <Input type="username" placeholder="Enter username" id="username"></Input>
//           </div>
//           <div className='grid gap-2 items-start space-y-2'>
//             <Label htmlFor="company">Company name</Label>
//             <Input type="Company name" placeholder="Enter company name" id="company name"></Input>
//           </div>
//           <div className='grid gap-2 items-start space-y-2'>
//             <Label htmlFor="choose type">Type</Label>
//             <Select>
//               <SelectTrigger className="w-[300px]">
//                 <SelectValue placeholder="Choose Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value={"dev"} >Developer</SelectItem>
//                 <SelectItem value={"age"} >Agency</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className='grid gap-2 items-start space-y-2'>
//             <Label htmlFor="email">Email</Label>
//             <Input type="email" placeholder="Enter email" id="email"></Input>
//           </div>
//           <div className='grid gap-2 items-start space-y-2'>
//             <Label htmlFor="password">Password</Label>
//             <Input type="password" placeholder="Enter Password" id="password"></Input>
//           </div>
//         </CardContent>
//         <CardFooter>
//           <Button className="w-full" onClick={handleSubmit}>
//             Submit
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormData {
  username: string;
  companyName: string;
  userType: string;
  email: string;
  password: string;
}

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    companyName: '',
    userType: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    // Validate company name
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    // Validate user type
    if (!formData.userType.trim()) {
      newErrors.userType = 'User type is required';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    // Clear validation error when the user starts typing in the field
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      newErrors[id] = '';
      return newErrors;
    });
  };

  const handleSubmit = () => {
    // Validate form before submission
    if (validateForm()) {
      // Add your form submission logic here

      // Redirect to login page after successful submission
      navigate('/login', { replace: true });
    }
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[350px] gap-4">
        <CardHeader>
          <CardTitle>Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid gap-2 items-start space-y-2'>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              placeholder="Enter username"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span className="text-red-500">{errors.username}</span>}
          </div>
          <div className='grid gap-2 items-start space-y-2'>
            <Label htmlFor="companyName">Company name</Label>
            <Input
              type="text"
              placeholder="Enter company name"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && <span className="text-red-500">{errors.companyName}</span>}
          </div>
          <div className='grid gap-2 items-start space-y-2'>
            <Label htmlFor="userType">Type</Label>
            <Select >
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Choose Type"  />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value={"dev"} >Developer</SelectItem>
                <SelectItem value={"age"} >Agency</SelectItem>
              </SelectContent>
            </Select>
            {errors.userType && <span className="text-red-500">{errors.userType}</span>}
          </div>
          <div className='grid gap-2 items-start space-y-2'>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Enter email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className='grid gap-2 items-start space-y-2'>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Enter Password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signup;
