
// import React from "react";

// function rolemangement(){
//     return(
//         <div className="pb-10">
//             <h1 className="text-black">
//                 Welcome to the add user page
//             </h1>
//         </div>
//     );
// }



// export default rolemangement;




import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from "react-router-dom";
import { Card } from '@tremor/react';


const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  Password: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  clearanceLevel: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  Password: Yup.string().required('ID Number is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('Zip Code is required'),
  clearanceLevel: Yup.string().required('Clearance Level is required'),
});

const App = () => {
  return (
    <Card className="w-fit mx-auto flex flex-col items-center"
    decoration="top"
    decorationColor="indigo">
      <h1 className="text-2xl text-black mb-4">Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log('Form Data:', JSON.stringify(values, null, 2));


          // send data 

          fetch('http://localhost:3000/api/insert-data',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          })
          .then(response => {
            if(response.ok){
              console.log('Data sent sucessfully');
            }else{
              console.error('Failed to send data');
            }
          })
          .catch(error => {
            console.error('Error: ', error);
          });

          actions.setSubmitting(false);
          





        }}
      >
        {({ setFieldValue }) => (
          <Form className="flex flex-col items-center">

              <div className="flex flex-col mb-4 w-80">
              <label htmlFor="clearanceLevel" className="text-black mb-1">Clearance Level</label>
              <Field as="select" name="clearanceLevel" className="rounded-md border border-gray-300 p-2">
                <option value="">Select Clearance Level</option>
                <option value="Admin">Admin</option>
                <option value="Client">Client</option>
              </Field>
              <ErrorMessage name="clearanceLevel" component="div" className="text-black" />
            </div>



            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="firstName" className="text-black mb-1">First Name</label>
              <Field type="text" name="firstName" className="rounded-md border border-gray-300 p-2" />
              <ErrorMessage name="firstName" component="div" className="text-black" />
            </div>

            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="lastName" className="text-black mb-1">Last Name</label>
              <Field type="text" name="lastName" className="rounded-md border border-gray-300 p-2" />
              <ErrorMessage name="lastName" component="div" className="text-black" />
            </div>

            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="email" className="text-black mb-1">Email</label>
              <Field type="email" name="email" className="rounded-md border border-gray-300 p-2" />
              <ErrorMessage name="email" component="div" className="text-black" />
            </div>

            {/* <div className="flex flex-col mb-4 w-80">
              <label htmlFor="userName" className="text-black mb-1">User Name</label>
              <Field type="text" name="userName" className="rounded-md border border-gray-300 p-2" />
              <ErrorMessage name="userName" component="div" className="text-black" />
            </div> */}

            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="Password" className="text-black mb-1">Password</label>
              <Field type="text" name="Password" className="rounded-md border border-gray-300 p-2" />
              <ErrorMessage name="idNumber" component="div" className="text-black" />
            </div>


            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="address" className="text-black mb-1">Address</label>
              <Field type="text" name="address" className="rounded-md border border-gray-300 p-2" />
              <ErrorMessage name="address" component="div" className="text-black" />
            </div>

            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="city" className="text-black mb-1">City 
              </label>
              <Field type="text" name="city" className="rounded-md border border-gray-300 p-2" />
              <ErrorMessage name="city" component="div" className="text-black" />
            </div>

            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="state" className="text-black mb-1">State </label>
              <Field type="text" name="state" className="rounded-md border border-gray-300 p-2" />
              <ErrorMessage name="state" component="div" className="text-black" />
            </div>

            <div className="flex flex-col mb-4 w-80">
              <label htmlFor="zipCode" className="text-black mb-1">Zipcode </label>
              <Field type="text" name="zipCode" className="rounded-md border border-gray-300 p-2" />
              <ErrorMessage name="zipCode" component="div" className="text-black" />
            </div>

            {/* <div className="flex flex-col mb-4 w-80">
              <label htmlFor="clearanceLevel" className="text-black mb-1">Clearance Level</label>
              <Field as="select" name="clearanceLevel" className="rounded-md border border-gray-300 p-2">
                <option value="">Select Clearance Level</option>
                <option value="admin">Admin</option>
                <option value="client">Client</option>
              </Field>
              <ErrorMessage name="clearanceLevel" component="div" className="text-black" />
            </div> */}


            <div className='flex flex-row gap-10 pb-10'>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
            <NavLink to="/userpage" className="block text-white hover:underline">
            <button type="button" className="bg-blue-500 text-white p-2 rounded-md">Close</button>
            </NavLink>
            </div>

          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default App;
