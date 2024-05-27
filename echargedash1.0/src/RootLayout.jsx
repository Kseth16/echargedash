// import React, {useEffect} from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { Link} from 'react-router-dom';
// import {scaleDown as Menu} from 'react-burger-menu'
// import echargelogo from './chargeuplogo.jpg';
// import { Card, DonutChart, List, ListItem } from '@tremor/react';
// import Sidebar from "./components/Sidebar";
// import {HiMenuAlt4} from 'react-icons/hi';
// import  './chargeuplogo.jpg';
// import './RootLayout.css'
// //make function for RootLayout





// // function makeBlur() {
  

// // console.log('makeBlurtesting');

// //   const pageWrap = document.getElementById('page-wrap');
// //   if (pageWrap) {
// //     pageWrap.style.filter = 'blur(5px)';
// //   }
// // }



// function RootLayout(){
 
 
  
  



// const [isOpen, setIsOpen] = React.useState(false);

// // const CustomBurgerIcon= () => <img src='./chargeuplogo.jpg' />

//     return(

//         <div className="bg-[#003b4d] h-screen" id="outer-container">
            
//         {/* <header className='flex justify-around  space-x-10  mb-10 h-24 w-[1280px] bg-gradient-to-r from-green-400 via-green-200 to-emerald-300 '>
          
//           <img  className='h-20 ' src={echargelogo} alt='Logo'/>

//           <Card className="h-20 bg-opacity-80	mx-auto max-w-xs">
//             <p className="text-center text-slate-400">Users</p>
//             <NavLink to="/userpage">userpage</NavLink>
//           </Card>

//           <Card className="h-20 bg-opacity-80 mx-auto max-w-xs">
//             <p className="text-center text-slate-400">Role Management</p>
//           </Card>

//           <Card className="h-20 bg-opacity-80 mx-auto max-w-xs">
//             <p className="text-center text-slate-400">Query</p>
//           </Card>



          
// {/* <div className="flex flex-col items-center">
//   <img className="h-20 mb-4" src={echargelogo} alt="Logo" />

//   <Card className="w-40 bg-opacity-80 mb-4">
//     <p className="text-center text-slate-400">Users</p>
//   </Card>

//   <Card className="w-40 bg-opacity-80 mb-4">
//     <p className="text-center text-slate-400">Role Management</p>
//   </Card>

//   <Card className="w-40 bg-opacity-80">
//     <p className="text-center text-slate-400">Query</p>
//   </Card>
// </div> */}




          
//          {/* </header>  */} 
//         {/* <HiMenuAlt4/>
//         <HiMenuAlt4 className="text-2xl text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)} /> */}

// {/* onOpen={makeBlur} */}
//         <Menu  pageWrapId="page-wrap" outerContainerId="outer-container">
          
//       <NavLink to="/mainpage"  ><a href="" ><img  src={echargelogo} alt="logoimg" /> </a> </NavLink>



        

//         <NavLink im to="/maindash" className="block p-4 text-white hover:underline">Dashboard</NavLink>

//         <NavLink to="/userpage" className="block p-4 text-white hover:underline">Current Users and Info</NavLink>

//         <NavLink to="/rolemangement" className="block p-4 text-white hover:underline">Add New User</NavLink>
//         <NavLink to="/reacthello" className="block p-4 text-white hover:underline">reacthello</NavLink>
//         <NavLink to="/gettest" className="block p-4 text-white hover:underline">gettest</NavLink>

//         </Menu>


//         <div id="page-wrap">


// {/* bg-gradient-to-r from-green-400 via-green-200 to-emerald-300  */}
// {/* w-[1280px] */}
// {/*           <Card className="h-20 bg-opacity-80 mx-auto max-w-xs">
//  */}
//         <header className='pb-10 flex justify-around  space-x-10  mb-10 h-20 w-full bg-[#003b4d] '>
          
//           <img  className='h-20 ' src={echargelogo} alt='Logo'/>

//             <p className=" text-slate-400 pt-5"></p>
          

//             <p className="text-center text-slate-400 pt-5"></p>

//             <p className="text-center text-slate-400 pt-5"></p>
//           </header>







//         <main >
//             <Outlet />
//         </main>

//         </div>




//         </div>
//     );


// };

// //export default 



// export default RootLayout












import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { scaleDown as Menu } from "react-burger-menu";
import echargelogo from "./chargeupblue.jpg";
import { Card,  } from "@tremor/react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from '@tremor/react';
import "./RootLayout.css";
import Businessinsight from "./Businessinsight";

function RootLayout() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

/*

get clearance role from database 

use clearance role to find role acess in role database 

fill acess array and use conditional rendering to render only those which acess is true for

*/

let acessarr=[{
  dashboard: true,
  socialScore: true,
  verification: true,
  onboardedDrivers: true,
  businessinsights: true,
  management: true,
  roleManagement: true,
  userManagement: true,

}];



  return (
    <div className="bg-[#003b4d] h-full" id="outer-container">
      {/* Render the menu only if the current location is not "/" or "/mainpage" */}
      {(location.pathname !== "/" && location.pathname !== "/mainpage") && (
        <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
          <NavLink to="/mainpage">
            <a href="">
              <img src={echargelogo} alt="logoimg" />
            </a>
          </NavLink>

          {(acessarr[0].dashboard)?(
          <NavLink to="/maindash" className="block p-1  text-white hover:underline">
            Dashboard
          </NavLink>):
          (null)

          }


          {/* <NavLink to="/userpage" className="block  p-1 text-white hover:underline">
            User Management
          </NavLink> */}
          {/* <NavLink to="/rolemangement" className="block p-4 text-white hover:underline">
            Add New User
          </NavLink> */}
          {/* <NavLink to="/reacthello" className="block p-1  text-white hover:underline">
            reacthello
        </NavLink> */}
          {/* <NavLink to="/gettest" className="block p-1 text-white hover:underline">
            gettest
          </NavLink>  */}
           {/* <NavLink to="/addrole" className="block p-1 text-white hover:underline">
          Add role
          </NavLink> */}
          
          {/* <NavLink to="/rcdata" className="block  p-1 text-white hover:underline">
          Social Score
          </NavLink> */}
        {(acessarr[0].socialScore)?(
        <Accordion style={{backgroundColor:"rgba(0, 0, 0, 0)", border:"none"}} >

          
          <AccordionHeader style={{backgroundColor:"rgba(0, 0, 0, 0)", color:"#ffffff"}}>
          Social Score
          </AccordionHeader>
          


          {(acessarr[0].verification)?(
          <AccordionBody>
          <NavLink to="/rcdata" className="block  p-1 text-white hover:underline">
          Verification
          </NavLink>
          </AccordionBody>
          ):(null)}



          {(acessarr[0].onboardedDrivers)?(

          <AccordionBody>
          <NavLink to="/onboarding" className="block  p-1 text-white hover:underline">
          Onboarded Drivers
          </NavLink>
          </AccordionBody>
          ):(null)}



          {(acessarr[0].businessinsights)?(

          <AccordionBody>
          <NavLink to="/businessinsight" className="block  p-1 text-white hover:underline">
          Business Insights
          </NavLink>
          </AccordionBody>
           ):(null)}


        </Accordion>
        ):(null)}





{(acessarr[0].management)?(

        <Accordion style={{backgroundColor:"rgba(0, 0, 0, 0)", border:"none"}} >
          <AccordionHeader style={{backgroundColor:"rgba(0, 0, 0, 0)", color:"#ffffff"}}>
          Management
          </AccordionHeader>

          {(acessarr[0].roleManagement)?(

          <AccordionBody>
          <NavLink to="/addrole" className="block  p-1 text-white hover:underline">
          Role Management
          </NavLink>
          </AccordionBody>
          ):(null)}


{(acessarr[0].userManagement)?(

          <AccordionBody>
          <NavLink to="/userpage" className="block  p-1 text-white hover:underline">
          User Management
          </NavLink>
          </AccordionBody>
):(null)}

        </Accordion>

  ):(null)}
 

          {/* <NavLink to="/addrole" className="block p-4 text-white hover:underline">
          Add role
          </NavLink> */}

          {/* make a conditoinal rendering here using ? to show below on click  */}

          {/* <NavLink className="block  p-1 text-white hover:underline">
          Verification
          </NavLink> 

          <NavLink className="block  p-1 text-white hover:underline">
          Onboarded Drivers
          </NavLink> 

          <NavLink className="block  p-1 text-white hover:underline">
          Business Insights
          </NavLink>   */}

          <NavLink to="/" className="block p-1 text-white hover:underline">
          Log Out
          </NavLink>
        </Menu>
      )}


      
      <div className="bg-[#003b4d] " id="page-wrap">
{/* 
     {location.pathname==="/mainpage"?(null):(
       <header className="relative z-50 top-0 flex justify-around space-x-10 h-20 w-full bg-[#003b4d]">
        


      {location.pathname==="/" ?(


      <img className="h-20" src={echargelogo} alt="Logo" />
        //render this 
      ):(
       
        <NavLink to="/mainpage">
        <img className="h-20" src={echargelogo} alt="Logo" style={{position:'relative', right:'50px'}}  />
      
      </NavLink>

      )}


       {/* <NavLink to="/mainpage">
          <img className="h-20" src={echargelogo} alt="Logo" />

        </NavLink> */}
          {/* <p className=" text-slate-400 pt-5"></p>
          <p className="text-center text-slate-400 pt-5"></p>
          <p className="text-center text-slate-400 pt-5"></p>
    </header> */}
     {/* )} */}
      



     


{/* <header className="pb-10 flex justify-around space-x-10 mb-10 h-20 w-full bg-[#003b4d] fixed top-0 left-0 z-10">
  <img className="h-20" src={echargelogo} alt="Logo" />
  <p className="text-slate-400 pt-5"></p>
  <p className="text-center text-slate-400 pt-5"></p>
  <p className="text-center text-slate-400 pt-5"></p>
</header> */}

        

        <main className=" bg-[#003b4d]">
          <Outlet />
        </main>
      </div>


      
    </div>
  );
}

export default RootLayout;
