
import './App.css'
import Login from './Pages/Login'
import { ThemeProvider } from "@/components/ui/theme-provider"
import Signup from "./Pages/Signup"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import Testing from './Pages/Testing';
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router-dom";

import ApiComponent from './Pages/ApiComponent';
import SeoComponent from './Pages/SeoComponent';
import UiComponent from './Pages/UiComponent';
import E2eComponent from './Pages/E2eComponent';


function App() {
 return (
   <>    
   
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Router>
     <nav className="bg-blue-400 fixed w-full top-0 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/signup" className="text-white mx-2">
              Signup
            </Link>
            <Link to="/login" className="text-white mx-2">
              Login
            </Link>
          </div>
          <div className="grid justify-items-end">
            <ModeToggle />
          
          </div>
        </div>
      </nav> <div className="pt-3">
    
     
      </div>
     
      <Routes>
     
      <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/testing' element={<Testing/>}/>
        <Route path='/apicomponent' element={<ApiComponent/>}/>
        <Route path='/seocomponent' element={<SeoComponent/>}/>   
        <Route path='/uicomponent' element={<UiComponent/>}/> 
        <Route path='/e2ecomponent' element={<E2eComponent/>}/>  
      </Routes>
  
   
    </Router>  </ThemeProvider>  </>


  )
}

export default App
