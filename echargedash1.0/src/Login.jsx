





// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate  } from 'react-router-dom'; // Import useHistory
// import echargelogo from './chargeuplogo.jpg';

// const initialValues = {
//   userId: '',
//   password: '',
// };

// const validationSchema = Yup.object().shape({
//   userId: Yup.string().required('User ID is required'),
//   password: Yup.string().required('Password is required'),
// });

// const LoginPage = () => {


//     const navigate= useNavigate();
//   return (
//     <div className="flex flex-col items-center pb-4">
//       <img src={echargelogo} alt="Logo" />
//       <h1 className="text-2xl text-black mb-4">Login</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={(values, actions) => {
//           console.log('Login Data:', JSON.stringify(values, null, 2));

//           // Check login data
//           if (values.userId === 'testuser' && values.password === 'testpassword') {
//             console.log('Login successful');
//             // Redirect to '/Maindash'
//             navigate("/maindash");
//           } else {
//             console.log('Login failed');
//             // Handle login failure (e.g., show error message)
//             setError('Incorrect user ID or password'); // Set error message

//           }
//           actions.setSubmitting(false);
//         }}
//       >
//         {({ setFieldValue }) => (
//           <Form className="flex flex-col items-center">
//             <div className="flex flex-col mb-4 w-80">
//               <label htmlFor="userId" className="text-black mb-1">User ID</label>
//               <Field type="text" name="userId" className="rounded-md border border-gray-300 p-2" />
//               <ErrorMessage name="userId" component="div" className="text-black" />
//             </div>

//             <div className="flex flex-col mb-4 w-80">
//               <label htmlFor="password" className="text-black mb-1">Password</label>
//               <Field type="password" name="password" className="rounded-md border border-gray-300 p-2" />
//               <ErrorMessage name="password" component="div" className="text-black" />
//             </div>

//             <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Login</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Card } from '@tremor/react';

import { useNavigate } from 'react-router-dom';
import backgroundimg from "./aiphoto.png";

import echargelogo from "./chargeupwhite.jpg";


const initialValues = {
  email: '',
  password: '',
};

// const validationSchema = Yup.object().shape({
//   userId: Yup.string().required(),
//   password: Yup.string().required(),
// });

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');







  //   const fetchData = async () => {
  //     try {
  //       // Make a GET request to the API endpoint
  //       const response = await fetch('http://localhost:3000/api/data', {
  //         method: 'GET',
  //         headers: {
  //           'Accept': 'application/json',
  //           // Add any necessary headers here
  //         }
  //       });
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
    
  //       // Parse the JSON response
  //       const data = await response.json();
        
  //       // Return the fetched data
  //       return data;
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       // You can handle errors here, e.g., show an error message to the user
  //       throw error; // Rethrow the error to be caught by the caller
  //     }
  //   };


  //   fetchData()
  // .then(data => {
  //   // Do something with the fetched data
  //   console.log('Fetched data:', data);
  // })
  // .catch(error => {
  //   // Handle errors here
  //   console.error('Error:', error);
  // });





  return (

  
<div className="flex flex-row">
  <div style={{marginLeft:'100px', paddingTop:'50px'}}>
<img src={backgroundimg} alt="background" width="500" height="600"  />
</div>

    
    <Card className=" mx-auto w-fit h-fit flex flex-col items-center pb-4 " style={{left:'50px', top:"90px"}}>
      <img className="w-80" src={echargelogo} alt="Logo" />
      <h1 className="text-2xl text-black mb-4"></h1>
      {error && <div className="text-red-500 mb-2">{error}</div>} {/* Display error message */}
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log('Login Data:', JSON.stringify(values, null, 2));


          // fetch('http://localhost:3000/api/loginpage',{
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify(values)
          // })
          // .then(response => {
          //   if(response.ok){
          //     return response.text();
            

          //     }else{
          //       throw new Error('Network response was not ok');
          //     }

          
          // }).then(data =>{
          //   console.log(data+" data test");
          //   if(data===true){
          //     console.log("login sucess");
          //     navigate('/mainpage');
          //   } else{
          //     console.log('Login failed');
          //     setError('Incorrect email ID or password'); // Set error message
          //   }
          //   actions.setSubmitting(false);
          // }).catch(error => {
          //   console.error("Error: ",error);
          // });
          

          // Making a POST request to the login API endpoint
fetch('http://localhost:3000/api/loginpage', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  // Sending the username and password in JSON format
  body: JSON.stringify(values)
})
.then(response => {
  // Checking if the response status is OK (status code 200)
  if (response.ok) {
    // If the response is OK, return the response text
    return response.text();
  } else {
    // If there is an error (response status is not OK), throw an error
    throw new Error('Network response was not ok');
  }
})
.then(data => {
  // Logging the response data for testing purposes
  console.log(data + " data test");
  // Checking if the response data is "true" (indicating successful login)
  if (data === "true") {
    // If the response is "true", login is successful
    console.log("Login success");
    // Redirecting to the main page
    navigate('/mainpage');
  } else {
    // If the response is not "true", login failed
    console.log('Login failed');
    // Setting an error message for incorrect email ID or password
    setError('Incorrect email ID or password');
  }
  // Resetting the form submission state
  actions.setSubmitting(false);
})
.catch(error => {
  // Handling any errors that occur during the fetch request
  console.error("Error: ", error);
});























          // Check login data
          // if (values.userId === 'testuser' && values.password === 'testpassword') {
          //   console.log('Login successful');
          //   // Redirect to '/Maindash'
          //   navigate('/mainpage');
          // } else {
          //   console.log('Login failed');
          //   setError('Incorrect email ID or password'); // Set error message
          // }
          actions.setSubmitting(false);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="flex flex-col items-center">
            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="email" className="text-black mb-1">Email ID</label>
              <Field type="text" name="email" className="rounded-md border border-gray-500 p-2" />
              <ErrorMessage name="email" component="div" className="text-black" />
            </div>

            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="password" className="text-black mb-1">Password</label>
              <Field type="password" name="password" className="rounded-md border border-gray-500 p-2" />
              <ErrorMessage name="password" component="div" className="text-black" />
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Login</button>
          </Form>
        )}
      </Formik>
    </Card>

    </div>
    
  );
};

export default LoginPage;

