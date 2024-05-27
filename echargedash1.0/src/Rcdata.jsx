
// import {HotTable} from '@handsontable/react';
// import {registerAllModules} from 'handsontable/registry';
// import 'handsontable/dist/handsontable.full.min.css';
// import sdk from '@api/bureauid'
// import React, { useState, useEffect } from 'react';
// import { TextInput, Button } from '@tremor/react';


// import React, { useState, useEffect } from 'react';
// import { TextInput, Button } from '@tremor/react';

// function Rcdata() {
//   const [responseData, setResponseData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [rcDetails, setRCDetails]=useState(' ');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async (numb) => {
//     try {
//       const response = await fetch('https://api.sandbox.bureau.id/v1/suppliers/rc-authentication', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Authorization': 'Basic NzZmYjczMzctOWJiYy00YTA4LWE2ZGEtNTQxZGNiYzBhY2UwOjk3OGJhYWE3LWY3YzctNGQ0Yy05ZTcyLTJlODI1NmJmZGQ1Yw==',
//           'Content-Type': 'application/json'
//         },
//         // body: JSON.stringify({ docNumber: 'MP07RA8006' })
//         body: JSON.stringify({ docNumber: numb || rcDetails })
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setResponseData(data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

// const handleChange = (event)=>{
//     setRCDetails(event.target.value);
    
// }



//   return (
//     <div className='text-black'>

//     <TextInput placeholder="enter RC details" className="mx-auto max-w-xs mb-2" value={rcDetails} onChange={handleChange}></TextInput>
    

//     <div className="mx-auto grid grid-cols-1 gap-12 mb-4">
//     <div className="space-y-3">
      
//       <div className="flex justify-center">
//         <Button onClick={() => fetchData()} variant="primary">Search Details</Button>
//       </div>
//     </div>
//     </div>


//       {loading ? (
//         <p>Loading...</p>
//       ) : responseData ? (
//         <pre>{JSON.stringify(responseData, null, 2)}</pre>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// }







































/*


{
  "blackListInfo": [],
  "blackListStatus": "",
  "bodyTypeDescription": "PASSENGER",
  "chassisNumber": "M6MCGADL21M000068",
  "color": "BLUE",
  "cubicCapacity": "22",
  "engineNumber": "OOOO68",
  "fatherName": "JAGDEESH PAL",
  "financier": "M P GRAMIN BANK CITY CENTRE GW",
  "fitnessUpto": "10-01-2024",
  "fuelDescription": "ELECTRIC(BOV)",
  "grossVehicleWeight": "710",
  "insuranceCompany": "Shriram General Insurance  Co. Ltd.",
  "insurancePolicyNumber": "214018/31/23/010357",
  "insuranceUpto": "02-01-2024",
  "makerDescription": "OTHERS",
  "makerModel": "ADBHUTAH (E-RICKSHAW)",
  "manufacturedMonthYear": "01-2021",
  "merchantId": "org_4wgKw3kWOStV6Kdz",
  "nationalPermitExpiryDate": "",
  "nationalPermitIssuedBy": "",
  "nationalPermitNumber": "",
  "nocDetails": "",
  "nonUseFrom": "",
  "nonUseTo": "",
  "normsDescription": "Not Available",
  "numberOfCylinders": "0",
  "ownerName": "SANTOSH  PAL",
  "ownerSerialNumber": "1",
  "permanentAddress": "SHRI KRISHNA NAGAR GALI NO-05, GADAIPURA BIRLA NAGAR, , , Madhya Pradesh, 999999",
  "presentAddress": "SHRI KRISHNA NAGAR GALI NO-05, GADAIPURA BIRLA NAGAR, , , Madhya Pradesh, 999999",
  "pucExpiryDate": "",
  "pucNumber": "",
  "rcMobileNo": "",
  "rcNonUseStatus": "",
  "rcStatus": "ACTIVE",
  "recordFound": true,
  "registeredAt": "GWALIOR RTO",
  "registrationDate": "11-01-2022",
  "registrationNumber": "MP07RA8006",
  "requestId": "12cfd265-fc74-4e53-ad60-9827d37a16e9",
  "seatingCapacity": "5",
  "sleeperCapacity": "0",
  "standingCapacity": "0",
  "stateCd": "",
  "statePermitExpiryDate": "",
  "statePermitIssuedDate": "",
  "statePermitNumber": "",
  "statePermitType": "",
  "statusAsOn": "",
  "statusCode": 200,
  "stautsMessage": "",
  "taxPaidUpto": "06-Jan-2037",
  "timestamp": 1714564375690,
  "unladenWeight": "216",
  "vehicleCatgory": "3WT",
  "vehicleClassDescription": "e-Rickshaw(P)",
  "wheelbase": "2080"
}

*/











import {HotTable} from '@handsontable/react';
import {registerAllModules} from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { Card, TextInput, Button, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@tremor/react';


registerAllModules();




function Rcdata(){
    const [responseData, setResponseData] = useState(null);
    const [verification, setVerification] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rcDetails, setRCDetails]=useState(' ');

    const [verificationstep2, setstep2visible]=useState(false);
    const [verificationstep3, setstep3visible]=useState(false);
    
      useEffect(() => {
        fetchData();
        // fetchbureauConsent();
      }, []);


      


            const fetchData= async () => {

              const myHeaders = new Headers();
myHeaders.append("Authorization", "Basic OWM4ZTFjNzYtNDViOS00ZDU2LWJkNDAtNzhmMmNlZGVhYmQ5OmEzMDE0MzNkLTYzODMtNDY5ZS1iN2I3LTUxNWM1MzcxNzgzNA==");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "scope": "credit_report",
  "data": {
    "gender": "male",
    "name": "Ritesh Kumar",
    "phoneNumber": "919572713796",
    "docType": "PAN",
    "docNumber": "EQWPK1713G",
    "address": "Singheshwar",
    "addressType": "H",
    "dob": "1998-05-16",
    "pinCode": "852128"
  }
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

 await fetch("https://api.bureau.id/v1/consents", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


            };








        // try {
        //   const response = await fetch('https://api.sandbox.bureau.id/v1/suppliers/rc-authentication', {
        //     method: 'POST',
            
        //     headers: {
        //       'Accept': 'application/json',
        //       'Authorization': 'Basic NzZmYjczMzctOWJiYy00YTA4LWE2ZGEtNTQxZGNiYzBhY2UwOjk3OGJhYWE3LWY3YzctNGQ0Yy05ZTcyLTJlODI1NmJmZGQ1Yw==',
        //       'Content-Type': 'application/json'
        //     },
        //     // body: JSON.stringify({ docNumber: 'MP07RA8006' })
        //     body: JSON.stringify({ docNumber: numb || rcDetails })
        //   });
    
        //   if (!response.ok) {
        //     throw new Error('Network response was not ok');
        //   }
    
        //   const data = await response.json();
        //   console.log(data);
        //   setResponseData(data);
        //   setLoading(false);
        // } catch (error) {
        //   console.error('Error fetching data:', error);
        //   setLoading(false);
        // }



      // };
    
    const handleChange = (event)=>{
        setRCDetails(event.target.value);
        
    }







    return(
      <div>

      <TabGroup>
        <TabList classname="mt-4" style={{justifyContent:'center'}}>
          <Tab>RC Details</Tab>
          <Tab>Risk Score</Tab>
          <Tab>Credit Score</Tab>

        </TabList>


        <TabPanels>

          <TabPanel>


        {/* rc data */}


        <Card className='text-black'>
    <div>


      {/* <Card className='w-fit mx-auto'> */}
    <TextInput placeholder="enter RC details" className="mx-auto max-w-xs mb-2" onChange={handleChange}></TextInput>
    

        <div className="mx-auto grid grid-cols-1 gap-12 mb-4">
        <div className="space-y-3">
          
          <div className="flex justify-center">
            <Button onClick={() => fetchData()} variant="primary">Search Details</Button>
          </div>
        </div>
        </div>

{/* </Card> */}
        {loading ? (
  <p>Loading...</p>


) : responseData ? (
  <div>
    <HotTable
      data={[
        
        {
          col1: "Body Type Description",
          col2: responseData.bodyTypeDescription === ("" || " " || null) ? "Not Available" : responseData.bodyTypeDescription
        },
        {
          col1: "Chassis Number",
          col2: responseData.chassisNumber === ("" || " " || null)  ? "Not Available" : responseData.chassisNumber
        },
        {
          col1: "Color",
          col2: responseData.color === ("" || " " || null) ? "Not Available" : responseData.color
        },
        {
          col1: "Cubic Capacity",
          col2: responseData.cubicCapacity === ("" || " " || null) ? "Not Available" : responseData.cubicCapacity
        },
        {
          col1: "Engine Number",
          col2: responseData.engineNumber === ("" || " " || null) ? "Not Available" : responseData.engineNumber
        },
        {
          col1: "Father Name",
          col2: responseData.fatherName === ("" || " " || null) ? "Not Available" : responseData.fatherName
        },
        {
          col1: "Financier",
          col2: responseData.financier === ("" || " " || null) ? "Not Available" : responseData.financier
        },
        {
          col1: "Fitness Upto",
          col2: responseData.fitnessUpto === ("" || " " || null) ? "Not Available" : responseData.fitnessUpto
        },
        {
          col1: "Fuel Description",
          col2: responseData.fuelDescription === ("" || " " || null) ? "Not Available" : responseData.fuelDescription
        },
        {
          col1: "Gross Vehicle Weight",
          col2: responseData.grossVehicleWeight === ("" || " " || null) ? "Not Available" : responseData.grossVehicleWeight
        },
        {
          col1: "Insurance Company",
          col2: responseData.insuranceCompany === ("" || " " || null) ? "Not Available" : responseData.insuranceCompany
        },
        {
          col1: "Insurance Policy Number",
          col2: responseData.insurancePolicyNumber === ("" || " " || null) ? "Not Available" : responseData.insurancePolicyNumber
        },
        {
          col1: "Insurance Upto",
          col2: responseData.insuranceUpto === ("" || " " || null) ? "Not Available" : responseData.insuranceUpto
        },
        {
          col1: "Maker Description",
          col2: responseData.makerDescription === ("" || " " || null) ? "Not Available" : responseData.makerDescription
        },
        {
          col1: "Maker Model",
          col2: responseData.makerModel === ("" || " " || null) ? "Not Available" : responseData.makerModel
        },
        {
          col1: "Manufactured Month Year",
          col2: responseData.manufacturedMonthYear === ("" || " " || null) ? "Not Available" : responseData.manufacturedMonthYear
        },
        
        {
          col1: "Number of Cylinders",
          col2: responseData.numberOfCylinders === ("" || " " || null) ? "Not Available" : responseData.numberOfCylinders
        },
        {
          col1: "Owner Name",
          col2: responseData.ownerName === ("" || " " || null) ? "Not Available" : responseData.ownerName
        },
        {
          col1: "Owner Serial Number",
          col2: responseData.ownerSerialNumber === ("" || " " || null) ? "Not Available" : responseData.ownerSerialNumber
        },
        {
          col1: "Permanent Address",
          col2: responseData.permanentAddress === ("" || " " || null) ? "Not Available" : responseData.permanentAddress
        },
        {
          col1: "Present Address",
          col2: responseData.presentAddress === ("" || " " || null) ? "Not Available" : responseData.presentAddress
        },
        
        {
          col1: "RC Status",
          col2: responseData.rcStatus === ("" || " " || null) ? "Not Available" : responseData.rcStatus
        },
        {
          col1: "Record Found",
          col2: responseData.recordFound === ("" || " " || null) ? "Not Available" : responseData.recordFound
        },
        {
          col1: "Registered At",
          col2: responseData.registeredAt === ("" || " " || null) ? "Not Available" : responseData.registeredAt
        },
        {
          col1: "Registration Date",
          col2: responseData.registrationDate === ("" || " " || null) ? "Not Available" : responseData.registrationDate
        },
        {
          col1: "Registration Number",
          col2: responseData.registrationNumber === ("" || " " || null) ? "Not Available" : responseData.registrationNumber
        },
       
        {
          col1: "Seating Capacity",
          col2: responseData.seatingCapacity === ("" || " " || null) ? "Not Available" : responseData.seatingCapacity
        },
        {
          col1: "Sleeper Capacity",
          col2: responseData.sleeperCapacity === ("" || " " || null) ? "Not Available" : responseData.sleeperCapacity
        },
        {
          col1: "Standing Capacity",
          col2: responseData.standingCapacity === ("" || " " || null) ? "Not Available" : responseData.standingCapacity
        },
        
        {
          col1: "Tax Paid Upto",
          col2: responseData.taxPaidUpto === ("" || " " || null) ? "Not Available" : responseData.taxPaidUpto
        },
        
        {
          col1: "Unladen Weight",
          col2: responseData.unladenWeight === ("" || " " || null) ? "Not Available" : responseData.unladenWeight
        },
        {
          col1: "Vehicle Category",
          col2: responseData.vehicleCategory === ("" || " " || null) ? "Not Available" : responseData.vehicleCategory
        },
        {
          col1: "Vehicle Class Description",
          col2: responseData.vehicleClassDescription === ("" || " " || null) ? "Not Available" : responseData.vehicleClassDescription
        },
        {
          col1: "Wheelbase",
          col2: responseData.wheelbase === ("" || " " || null) ? "Not Available" : responseData.wheelbase
        },
      ]}
      
      
      columns={[
        {
          title: " ",
          type: "text",
          data: "col1",
        },
        {
          title: " ",
          type: "text",
          data: "col2",
        },
      ]}
      filters={true}
      dropdownMenu={true}
      height="auto"
      width="100%"
      stretchH="all"
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
    




    {/* <pre>{JSON.stringify(responseData, null, 2)}</pre> */}
  </div>
) : (

  <div className='flex justify-center'>
  <p>No data available</p>
  </div>
)}



       


</div>


</Card>







            
          </TabPanel>

      <TabPanel>
                      
      <Card className='text-black'>
    <div>


      {/* <Card className='w-fit mx-auto'> */}
    <TextInput placeholder="enter Mobile Number" className="mx-auto max-w-xs mb-2 text-black" ></TextInput>
    
    <TextInput placeholder="enter Name" className="mx-auto max-w-xs mb-2 text-black" ></TextInput>


        <div className="mx-auto grid grid-cols-1 gap-12 mb-4">
        <div className="space-y-3">
          
          <div className="flex justify-center">
            <Button variant="primary">Search Risk Score</Button>
          </div>
        </div>
        </div>
        </div>
        
        </Card>

        </TabPanel>

        <TabPanel>


        <Card className='text-black'>
    <div>


      {/* <Card className='w-fit mx-auto'> */}
    <TextInput  placeholder="enter gender" className="mx-auto max-w-xs mb-2" ></TextInput>
    <TextInput  placeholder="enter name" className="mx-auto max-w-xs mb-2" ></TextInput>
    <TextInput  placeholder="enter phone number" className="mx-auto max-w-xs mb-2" ></TextInput>
    <TextInput  placeholder="enter pan number" className="mx-auto max-w-xs mb-2" ></TextInput>
    <TextInput  placeholder="enter address" className='mx-auto max-w-xs mb-2' ></TextInput>
    <TextInput  placeholder="enter address type" className="mx-auto max-w-xs mb-2" ></TextInput>
    <TextInput  placeholder="enter DOB YYYY-MM-DD" className="mx-auto max-w-xs mb-2" ></TextInput>
    <TextInput  placeholder="enter pin code" className="mx-auto max-w-xs mb-2" ></TextInput>


        <div className="mx-auto grid grid-cols-1 gap-12 mb-4">
        <div className="space-y-3">
          
          <div className="flex justify-center">
            <Button  variant="primary">Search Credit Score</Button>
          </div>
        </div>
        </div>
        </div>
        
        </Card>


        </TabPanel>

        </TabPanels>

      </TabGroup>

    


      </div>
      


    );
    
}



export default Rcdata;



  






















