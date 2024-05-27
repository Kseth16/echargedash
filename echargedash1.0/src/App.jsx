import { useState } from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'


import './App.css'
import Maindash from './Maindash'


import Userpage from "./Userpage" 

import RootLayout from './RootLayout'

import Rolemangement from './Rolemangement'
import Login from './Login'
import Gettest from './Gettest'
import Mainpage from './mainpage'

import Reacthello from './reacthello'
import Rcdata from './Rcdata'
import Addrole from './Addrole'
import Onboarding from './Onboarding'
import Businessinsight from './Businessinsight'


const router= createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Login />} />
    <Route path="mainpage" element={<Mainpage />} />
    <Route path="userpage" element={<Userpage />} />
    <Route path="maindash" element={<Maindash />} />
    <Route path="rolemangement" element={<Rolemangement />} />
    <Route path="gettest" element={<Gettest />} />
    <Route path="reacthello" element={<Reacthello />} />
    <Route path="rcdata" element={<Rcdata />} />
    <Route path="addrole" element={<Addrole />} />
    <Route path="onboarding" element={<Onboarding />} />
    <Route path="businessinsight" element={<Businessinsight />} />

  </Route>    

  ) 
)

function App() {
  const testingdata="0";
  const [count, setCount] = useState(0)

  return (
    
      //  <div className='bg-[#003b4d]' >
      

      <RouterProvider router={router} />
        // {/* // <Maindash /> */}
    


    // </div>

      // <RouterProvider router={router} />
        
    
  );
}

export default App
