import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { BarList } from '@tremor/react';
import { TextInput, Button, Card, CategoryBar, BarList, BarChart, DonutChart, Legend} from '@tremor/react';
import GaugeChart from 'react-gauge-chart'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';



// const[mobileNumber,setMobileNumber]=useState("");


// const handleMobileNumberChange = (event) => {
//     setMobileNumber(event.target.value);
//   };


const dummydata = [
  {
    name: 'New York',
    sales: 980,
  },
  {
    name: 'London',
    sales: 456,
  },
  {
    name: 'Hong Kong',
    sales: 390,
  },
  {
    name: 'San Francisco',
    sales: 240,
  },
  {
    name: 'Singapore',
    sales: 190,
  },
];



const datahero1 = [
  { name: 'Telco Risk', value: 333, color:'#ff0000' },
  { name: 'Identity Confidence', value: 666, color: 'rgb(255, 255, 0)' },
  { name: 'Digital Footprint Score', value: 1000, color: 'rgb(0, 255, 0)' },
];

const datahero2 = [
  // { name: 'Telco Risk', value: 333, Color:'slate-500' },
  { name: 'Identity Confidence', value: 666, color: 'red-500' },
  // { name: 'Digital Footprint Score', value: 1000, Color: 'slate-500' },
];

const socialdata=[
  {
    "social_site": "a23games",
    "account_found": 0
  },
  {
    "social_site": "amazon",
    "account_found": 111
  },
  {
    "social_site": "byjus",
    "account_found": 24
  },
  {
    "social_site": "flipkart",
    "account_found": 179
  },
  {
    "social_site": "housing",
    "account_found": 13
  },
  {
    "social_site": "indiamart",
    "account_found": 243
  },
  {
    "social_site": "instagram",
    "account_found": 206
  },
  {
    "social_site": "jeevansaathi",
    "account_found": 10
  },
  {
    "social_site": "jiomart",
    "account_found": 49
  },
  {
    "social_site": "my11",
    "account_found": 0
  },
  {
    "social_site": "paytm",
    "account_found": 288
  },
  {
    "social_site": "rummycircle",
    "account_found": 0
  },
  {
    "social_site": "shaadi",
    "account_found": 6
  },
  {
    "social_site": "swiggy",
    "account_found": 36
  },
  {
    "social_site": "whatsapp",
    "account_found": 212
  },
  {
    "social_site": "yatra",
    "account_found": 0
  }
]

let riskscore=0;
const initialValues = {
    driverid: '',
    mobilenumber: '',
  };

let dataarr=null;

let businessarr=null;



function Onboarding(){
 

  const[mobileNumber,setMobileNumber]=useState("");
  const[graphvisible,setGraphVisibility]=useState(false);
  const[businessInsightVisible, setBusinessInsightVisible]=useState(true);
  const[riskScore,setRiskScore]=useState(0);
  const[socialScore,setSocialScore]=useState(0);
  const [tempholdingarr, setTempholdingarr] = useState(null);
  const [businessarray, setBusinessArray]= useState(null);
  const [isHovered, setIsHovered] = useState(false);



  const fetchData = async () => {
    try {
        const response1 = await fetch('http://localhost:3000/api/getriskscore', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                // Add any necessary headers here
            }
        });

        if (!response1.ok) {
            throw new Error('Network response was not ok');
        }

        const data1 = await response1.json();
        dataarr = data1.recordset;
        console.log(dataarr);
    } catch (error) {
        console.error("Error fetching getriskscore: ", error);
    }

    try {
        const response2 = await fetch('http://localhost:3000/api/businessinsight', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                // Add any necessary headers here
            }
        });

        if (!response2.ok) {
            throw new Error('Network response was not ok');
        }

        const data2 = await response2.json();
        businessarr = data2;
        setBusinessArray(data2);
        console.log("business insight arr");
        console.log(businessarr);
    } catch (error) {
        console.error("Error fetching businessinsight: ", error);
    }
};













  // const fetchbusinessdata=() =>{
  //   fetch('http://localhost:3000/api/businessinsight',{
  //     method: 'GET',
  //             headers: {
  //                 'Accept': 'application/json',
  //                 // Add any necessary headers here
  //               }
  // }).then(response => {
  //     // Checking if the response status is OK (status code 200)
  //     if (response.ok) {
  //       // If the response is OK, return the response text
  //       return response.json();
  //     } else {
  //       // If there is an error (response status is not OK), throw an error
  //       throw new Error('Network response was not ok');
  //     }
  //   }).then(data =>{
  //     businessarr=data;
  //     console.log("business insight arr");
  //     console.log(businessarr);
  //     // console.log(dataarr);
  //     // console.log("data in dataarr")
  //   }).catch(error => {
  //     // Handling any errors that occur during the fetch request
  //     console.error("Error: ", error);
  //   });
  // };

  // useEffect(() => {
  //   fetchbusinessdata();
  // }, []); 


    // const fetchData = () =>{
    //      fetch('http://localhost:3000/api/getriskscore',{
    //         method: 'GET',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     // Add any necessary headers here
    //                   }
    //     }).then(response => {
    //         // Checking if the response status is OK (status code 200)
    //         if (response.ok) {
    //           // If the response is OK, return the response text
    //           return response.json();
    //         } else {
    //           // If there is an error (response status is not OK), throw an error
    //           throw new Error('Network response was not ok');
    //         }
    //       }).then(data =>{
    //         dataarr=data.recordset;
    //         console.log(dataarr);
    //         // console.log("data in dataarr")
    //       }).catch(error => {
    //         // Handling any errors that occur during the fetch request
    //         console.error("Error: ", error);
    //       });


    //     //   fetch('http://localhost:3000/api/businessinsight',{
    //     //     method: 'GET',
    //     //             headers: {
    //     //                 'Accept': 'application/json',
    //     //                 // Add any necessary headers here
    //     //               }
    //     // }).then(response => {
    //     //     // Checking if the response status is OK (status code 200)
    //     //     if (response.ok) {
    //     //       // If the response is OK, return the response text
    //     //       return response.json();
    //     //     } else {
    //     //       // If there is an error (response status is not OK), throw an error
    //     //       throw new Error('Network response was not ok');
    //     //     }
    //     //   }).then(data =>{
    //     //     businessarr=data;
    //     //     console.log("business insight arr");
    //     //     console.log(businessarr);
    //     //     // console.log(dataarr);
    //     //     // console.log("data in dataarr")
    //     //   }).catch(error => {
    //     //     // Handling any errors that occur during the fetch request
    //     //     console.error("Error: ", error);
    //     //   });

    // };

    useEffect(() => {
        fetchData();
        // fetchbusinessdata();
      }, []); // Run once on component mount

      
    // fetch('http://localhost:3000/api/getriskscore',{
    //     method: 'GET',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 // Add any necessary headers here
    //               }
    // }).then(response => {
    //     // Checking if the response status is OK (status code 200)
    //     if (response.ok) {
    //       // If the response is OK, return the response text
    //       return response.json();
    //     } else {
    //       // If there is an error (response status is not OK), throw an error
    //       throw new Error('Network response was not ok');
    //     }
    //   }).then(data =>{
    //     dataarr=data.recordset;
    //     // console.log(dataarr);
    //     // console.log("data in dataarr")
    //   }).catch(error => {
    //     // Handling any errors that occur during the fetch request
    //     console.error("Error: ", error);
    //   });
      


    // const[mobileNumber,setMobileNumber]=useState("");
    // const[graphvisible,setGraphVisibility]=useState(false);
    // const[businessInsightVisible, setBusinessInsightVisible]=useState(true);
    // const[riskScore,setRiskScore]=useState(0);
    // const[socialScore,setSocialScore]=useState(0);
    // const [tempholdingarr, setTempholdingarr] = useState(null);


    

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);

      };

      const findDataByPhoneNumber = (phoneNumber) => {

        // if(dataarr.find(item => item.Phone_Number === phoneNumber)===null){
        //   setGraphVisibility(false);
        //   setBusinessInsightVisible(true);
        //   setGraphVisibility(false);
        //   console.log("no data found test")
        //   return null;
        // }else
        
        // setBusinessInsightVisible(false);
        // setGraphVisibility(true);
        // console.log("data found");
        // console.log(dataarray);
        // return dataarr.find(item => item.Phone_Number === phoneNumber);




        const foundData = dataarr.find(item => item.Phone_Number === phoneNumber);
        if (!foundData) {
            console.log("No data found for the provided phone number:", phoneNumber);
            setGraphVisibility(false);
            setBusinessInsightVisible(true);
            return null;
        } else {
            console.log("Data found for the provided phone number:", phoneNumber);
            setBusinessInsightVisible(false);
            setGraphVisibility(true);
            return foundData;
        }



      };

      


      const size = {
        width: 250,
        height: 250,
      };

    return(
 <>

 {/* <Card>
 {(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (
 <PieChart


      series={[
        {
          // arcLabel: (item) => `${item.Risk_Model.identityConfidence} (${item.value_count})`,
          // arcLabelMinAngle: 45,
          // data: businessarr[0]["identityConfidenceScore"],
          data: businessarr[0]["identityConfidenceScore"].map(item => ({
            name: item["Risk_Model.identityConfidence"],
            value: item["value_count"]
          })),
          arcLabel: (item) => `${item.name} (${item.value})`,
          arcLabelMinAngle: 45,

        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  ):("LOADING...")}

  </Card> */}
        <div style={{ maxHeight: "100vh", overflowY: "auto", overflow:'hidden' }}  className="max-h-screen">
        {/* overflow:'hidden' */}

        
        {/* <TextInput  placeholder="Enter Driver ID" className="mx-auto max-w-xs mb-2" ></TextInput> */}
       <div className="flex flex-row " style={{gap:'10px', justifyContent:'flex-end', paddingTop:"10px", paddingRight:"10px"}} >

      
            <Button variant="primary" onClick={()=>{
            setTempholdingarr(findDataByPhoneNumber(0));

            }}  className="bg-blue-500 text-white p-2 rounded-md">Business Overview</Button>
           

       
        <TextInput value={mobileNumber} onChange={handleMobileNumberChange}  placeholder="enter Mobile number"  className=" max-w-xs "></TextInput>
        {/* className="mx-auto max-w-xs mb-2" */}

        {/* <div className="flex fle justify-center"> */}
            <Button variant="primary" onClick={()=>{
            console.log(mobileNumber);
            console.log(dataarr);
            // tempholdingarr=findDataByPhoneNumber(mobileNumber);
            setTempholdingarr(findDataByPhoneNumber(mobileNumber));
            // console.log("after button");
            // console.log(dataarr);

            // console.log("temp dataholding after button");
            // console.log(tempholdingarr);
            // // console.log(findDataByPhoneNumber(mobileNumber))
            // // setGraphVisibility(true);
            // riskscore=parseInt(dataarr['Risk_Model.alternateRiskScore']);
            // console.log(dataarr['Risk_Model.alternateRiskScore']);

            
            
            
            }} >Search Driver</Button>

          

          {/* </div> */}
         


          </div>
          

          {(businessInsightVisible)?(
<>            

{/* <div className="flex flex-row h-fit gap-4 mt-10 "> */}



<div className="h-44 mr-5 ml-5 flex justify-center gap-10 mt-5">

{/* <h1>BUSSINESS STUFF</h1> */}





<Card className="m-h-56" >
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span className="font-bold" >Total Number of Drivers</span>
          {/* <span>{riskscore}</span> */}
        </p>

        {(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (



        <h1 className="mt-8 flex justify-center items-center font-bold text-center">{businessarr[0]["totaldrivers"][0][""]}</h1>
        ):(<p className="font-bold text-center">LOADING...</p>)}
</Card>





<Card className="m-h-56	">
{/* className=" text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content  items-center justify-between" */}
{/* className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content" */}
<p  className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          {/* <span className="font-bold">Identity Confidence Score</span> */}

  <span className="font-bold"> Identity Confidence Score
  {' '}
  <span className="text-red-500">Low</span>
  {' '}
  <span className="text-yellow-500">Medium</span>
  {' '}
  <span className="text-green-500">High</span>
</span>


          {/* <span>{riskscore}</span> */}
        </p>
{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (

<div className="flex flex-col">
<div className="flex flex-col">


<PieChart className="h-fit"
      

      
      series={[
        {
          
          data: businessarr[0]["identityConfidenceScore"].map(item => ({
            name: item["Risk_Model.identityConfidence"],
            value: item["value_count"],
            color: item["Risk_Model.identityConfidence"] === "High" ? "rgb(0, 255, 0)" : item["Risk_Model.identityConfidence"] === "Medium" ? "rgb(255, 255, 0)" : item["Risk_Model.identityConfidence"] === "Low" ? "rgb(255, 0, 0)": null
          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '90%',
          cy: '30%',
          outerRadius: '100%',

        },
      ]}
      
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'black',
          fontSize:"12px",
          fontWeight: 'bold',
        },
      }}
      {...size}
    />









      {/* <DonutChart
        // style={{height: "50%"}}
        // className="h-1/2"
        // style={{height:"200px%"}}
        // height="100px"

        data={(businessarr!==null)?(businessarr[0]["identityConfidenceScore"]):(null)}
        category="value_count"
        index="Risk_Model.identityConfidence"
        
        // valueFormatter={valueFormatter}
        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      />


<p>High Risk: {(businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "High"))? businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "High")["value_count"] : (null)}</p>
<p>Medium Risk: {(businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "Medium"))? businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "Medium")["value_count"] : (null)}</p>
<p>Low Risk {(businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "Low"))? businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "Low")["value_count"] : (null)}</p> */}


      </div>
</div>
):(<p className="font-bold text-center">LOADING...</p>)}
</Card>



<Card className="m-h-56">
<>
<>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
<span className="font-bold">Average Social Score</span>
</p>
</>
<>


        {(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (

        <div className="flex flex-col">
         <GaugeChart id="avgsocialscore"
            // style={{height:"50%"}}
            
            colors={["#ff0000", "rgb(255, 255, 0)","rgb(0, 255, 0)"]}
            nrOfLevels={20}
            percent={(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])/1000):(0)}
            // percent={0.5}
            hideText
            />

            
      <span style={{marginTop:"-10px"}}  className="font-bold flex justify-center items-center">{(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])):(<p className="font-bold text-center">LOADING...</p>)}</span>


      </div> 




      








):(<p className="font-bold text-center">LOADING...</p>)}
</>



</>
</Card>






<Card className="m-h-56" >
<>
<p  className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          {/* <span className="font-bold">Telecom Risk Score</span> */}

          <span className="font-bold"> Telecom Risk Score
  {' '}
  <span className="text-green-500">Low</span>
  {' '}
  <span className="text-yellow-500">Medium</span>
  {' '}
  <span className="text-red-500">High</span>
</span>

          
          {/* <span>{riskscore}</span> */}
        </p>


<>

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


  <>

<PieChart


      series={[
        {
          
          data: businessarr[0]["totalriskmodel"].map(item => ({
            name: item["Risk_Model.telecomRisk"],
            value: item["value_count"],
            color: item["Risk_Model.telecomRisk"] === "High" ? "rgb(255, 0, 0)" : item["Risk_Model.telecomRisk"] === "Medium" ? "rgb(255, 255, 0)" : item["Risk_Model.telecomRisk"] === "Low" ? "rgb(0, 255, 0)": null,
            
          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '90%',
          cy: '30%',
          outerRadius: '100%',

        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'black',
          fontSize:"15px",
          fontWeight: 'bold',
        },
      }}
      {...size}
    />






  {/* <DonutChart
        // height="100px"

data={businessarr[0]["totalriskmodel"]}
    category="value_count"
    index="Risk_Model.telecomRisk"
    onValueChange={(v) => setValue(v)}
  />

  
<p>High Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "High") ?  businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "High")["value_count"] :"0"}</p>
<p>Medium Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Medium") ? businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Medium")["value_count"] :"0"}</p>
<p>Low Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Low") ? businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.digitalFootprint"] === "Low")["value_count"] :"0"}</p>


</> */}

</>




):(<p className="font-bold text-center">LOADING...</p>)}

</>
</>









</Card>

{/* className="max-w-sm" */}



{/* 


<Card>

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (
  <>
<p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
          <span>Average Risk Score</span>
        </p>

        <div className="flex flex-col">
         <GaugeChart id="avgriskscore"
            // style={{height:"50%"}}
            
            colors={["#ff0000", "rgb(255, 255, 0)","rgb(0, 255, 0)"]}
            nrOfLevels={20}
            percent={(businessarr!==null)?((businessarr[0]["riskscore"][0]["Avg_riskscore"])/900):(0)}
            // percent={0.5}
            hideText
            />
      <span className="font-bold flex justify-center items-center">{(businessarr!==null)?((businessarr[0]["riskscore"][0]["Avg_riskscore"])):("Loading...")}</span>

      </div> 


{/* 

      <div className="flex flex-col">
      <DonutChart
        // style={{height: "50%"}}
        // className="h-1/2"
        // style={{height:"200px%"}}
        height="200px"

        data={(businessarr!==null)?(businessarr[0]["identityConfidenceScore"]):(null)}
        category="value_count"
        index="Risk_Model.identityConfidence"
        
        // valueFormatter={valueFormatter}
        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      />


<p>High Risk: {(businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "High"))? businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "High")["value_count"] : (null)}</p>
<p>Medium Risk: {(businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "Medium"))? businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "Medium")["value_count"] : (null)}</p>
<p>Low Risk {(businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "Low"))? businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "Low")["value_count"] : (null)}</p>

      </div>
 */}





      {/* </div> */}


{/* </>):("LOADING...")} */}
{/* </Card> */}

 





{/* <Card> */}


{/* 

<Card className="max-w-sm">

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (
<>




<div className="flex flex-row gap-4 ">
<DonutChart
        style={{height: '100px'}}
        data={(businessarr!==null)?(businessarr[0]["identityConfidenceScore"]):(null)}
        category="value_count"
        index="Risk_Model.identityConfidence"
        
        // valueFormatter={valueFormatter}
        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      />


<DonutChart
style={{height: '100px'}}
        data={(businessarr!==null)?(businessarr[0]["totaldigitalfootprint"]):(null)}
        category="value_count"
        index="Risk_Model.digitalFootprint"
        // colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      />
      


    
    </div>   




      {/* <CodeBlock source={JSON.stringify(value, null, 2)} variant="empty" className="mt-8" /> */}

{/* </>):("LOADING...")} */}
{/* </Card>  */}



 {/* */}




{/* <Card className="h-fit"> */}




{/* 



<Card>
{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (
<>

<p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
          <span>Average Social Score</span>
          {/* <span>{riskscore}</span> */}




        {/* </p>


        {/* <div className="flex flex-row  ">        */}
        {/* <div className="flex flex-col">
<GaugeChart id="avgsocialscore"
            colors={["#ff0000", "rgb(255, 255, 0)","rgb(0, 255, 0)"]}
            nrOfLevels={20}
            percent={(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])/900):(0)}
            hideText
            />

<span className="font-bold flex justify-center items-center">{(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])):("Loading...")}</span> */}

{/* </div> */} 





{/* 

<div className="flex flex-col">

<DonutChart
// style={{height: '100px'}}
height="200px"

        data={(businessarr!==null)?(businessarr[0]["totaldigitalfootprint"]):(null)}
        category="value_count"
        index="Risk_Model.digitalFootprint"
        // colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      />




{/* <p>High Risk: {(businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "High"))? businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "High")["value_count"] : (null)}</p> */}


{/* (businessarr[0]["sociaslscore"][0]["Avg_socialscore"]) */}
{/* <p>High Risk: {(businessarr[0]["totaldigitalfootprint"][0].find(item => item["Risk_Model.digitalFootprint"] === "High"))? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "High")["value_count"] : (null)}</p>
<p>Medium Risk: {(businessarr[0]["totaldigitalfootprint"][0].find(item => item["Risk_Model.digitalFootprint"] === "Medium"))? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Medium")["value_count"] : (null)}</p>
<p>Low Risk {(businessarr[0]["totaldigitalfootprint"][0].find(item => item["Risk_Model.digitalFootprint"] === "Low"))? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Low")["value_count"] : (null)}</p>
 */}

{/* 

<p>High Risk: {businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "High") ?  businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "High")["value_count"] :"0"}</p>
<p>Medium Risk: {businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Medium") ? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Medium")["value_count"] :"0"}</p>
<p>Low Risk: {businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Low") ? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Low")["value_count"] :"0"}</p>
  </div> */}


 

  
  {/* </div> */}

  


{/* <span className="font-bold flex justify-center items-center">{(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])):("Loading...")}</span> */}



{/* </>):("LOADING...")} */}

{/* </Card> */}



 







</div>



{/* <div className="flex flex-row h-48 gap-4 mt-10 ml-5 mr-5"> */}
<div className="h-44 mr-5 ml-5 flex justify-center gap-10 mt-5">



{/* <Card className="max-w-sm">  */}


 {/* <DonutChart
style={{height: '100px'}}
        data={(businessarr!==null)?(businessarr[0]["totalriskmodel"]):(null)}
        category="value_count"
        index="Risk_Model.telecomRisk"
        // value_count
        // valueFormatter={valueFormatter}
        // colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      /> */}




{/* 
{businessarr !== null && (
  <>
  <DonutChart
    style={{ height: '100px' }}
    data={businessarr[0]["totalriskmodel"]}
    category="value_count"
    index="Risk_Model.telecomRisk"
    onValueChange={(v) => setValue(v)}
  />

  
<p>High Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "High") ?  businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "High")["value_count"] :"0"}</p>
<p>Medium Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Medium") ? businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Medium")["value_count"] :"0"}</p>
<p>Low Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Low") ? businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.digitalFootprint"] === "Low")["value_count"] :"0"}</p>


</>





)}
 */}


{/* </Card>  */}








{/*

<Card className="max-w-sm">

// {/* <div className="flex flex-row gap-4"> */}
{/* // <div> */}
{/* // {(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? ( */}
{/* //   <> */}
  {/* <DonutChart */}
{/* //         // style={{height: '100px'}}
//         data={(businessarr!==null)?(businessarr[0]["upibankresult"][0]):(null)}
//         category="value_count"
//         index="Phone_to_Name.source"

//         onValueChange={(v) => setValue(v)}
//       />
 */}



{/* telecom risk */}
{/* */}





{/* 
<DonutChart
style={{height: '100px'}}
        data={(businessarr!==null)?(businessarr[0]["networksusedresult"]):(null)}
        // data={(businessarr?.[0]?.networksusedresult !== null) ? (businessarr[0]["networksusedresult"]) : (null)}

        category="networknames"
        index="value_count"
        // valueFormatter={valueFormatter}
        colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia','pink']}
        onValueChange={(v) => setValue(v)}
      />
     */}



{/* {(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? ( */}


{/* networks used */}
    {/* <DonutChart
        style={{height: '100px'}}
        data={businessarr[0]["networksusedresult"]}
        category="value_count"
        index="networknames"
        // colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia','pink']}
        onValueChange={(v) => setValue(v)}
    /> */}

{/* </>
) : "LOADING..."}
    </div>   
      {/* <CodeBlock source={JSON.stringify(value, null, 2)} variant="empty" className="mt-8" /> */}
{/* </Card> */}
 {/* */} 




{/* <Card   > */}


{/* ZONE CHARTS */}
{/* <Card className="max-w-sm">


<BarChart
        style={{height:"200px", marginTop:"-25px"}}
        className="mt-6"
        data={(businessarr!==null)?(businessarr[0]["zonedata"]):(null)}
        index="Zone"
        categories={['value_count']}
        colors={['blue']}
        layout="vertical"
        // valueFormatter={dataFormatter}
        yAxisWidth={1}

      />

</Card> */}


<Card>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span className="font-bold" >Average Risk Score</span>
        </p>
{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (
  <>


        <div className="flex flex-col">
         <GaugeChart id="avgriskscore"
            // style={{height:"50%"}}
            // width="25%"
            colors={["rgb(0, 255, 0)", "rgb(255, 255, 0)","rgb(255, 0, 0)"]}
            nrOfLevels={20}
            percent={(businessarr!==null)?((businessarr[0]["riskscore"][0]["Avg_riskscore"])/1000):(0)}
            // percent={0.5}
            hideText
            />

{/* <div style={{marginTop:"-10px"}}> */}
      <span style={{marginTop:"-10px"}} className="font-bold flex justify-center items-center">{(businessarr!==null)?((businessarr[0]["riskscore"][0]["Avg_riskscore"])):(<p className="font-bold text-center">LOADING...</p>)}</span>

      </div> 




      








</>):(<p className="font-bold text-center">LOADING...</p>)}
</Card>













{/* SOCIAL SITE GRAPHS */}

<Card>
  {/* <h1>PHONE Name Match</h1> */}


  <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span className="font-bold">Phone Name Match</span>
          {/* <span>{riskscore}</span> */}
        </p>

        {(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (



        <h1 className="mt-8 font-bold text-center">{businessarr[0]["phonenamematch"][0][""]}</h1>
        ):(<p className="font-bold text-center">LOADING...</p>)}




</Card>


<Card>
<>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          {/* <span className="font-bold" >UPI : Yes and No </span> */}
          <span className="font-bold">
  UPI : {' '}
  <span className="text-green-500">Yes</span>
  {' '}
  <span className="text-red-500">No</span>
</span>
          {/* <span>{riskscore}</span> */}
        </p>


<>

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


  <>

<PieChart


      series={[
        {
          
          data: businessarr[0]["upicount"].map(item => ({
            name: item["upi"],
            value: item["count"],
            
             color: item["upi"] === "Yes" ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)"
          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '90%',
          
          cy: '30%',
          outerRadius: '100%',
          
          
        },
      ]}

     

      
      
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'black',
          fontSize:"15px",
          fontWeight: 'bold',
        },
      }}
      {...size}
    />





  {/* <DonutChart
        // height="100px"

data={businessarr[0]["upicount"]}
    category="count_of_values"
    // index="Risk_Model.telecomRisk"
    onValueChange={(v) => setValue(v)}
  />

  
<p>Have UPI: {businessarr[0]["upicount"].find(item => item["count_of_values"] > 0) ?  businessarr[0]["upicount"][0]["count_of_values"]:"0"}</p>
{/* <p>Medium Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Medium") ? businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Medium")["value_count"] :"0"}</p> */}


</>






):(<p className="font-bold text-center">LOADING...</p>)}

</>
</>





</Card>

<Card>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span className="font-bold">Average Digital Age</span>
          </p>
          {(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


          <h1 className="font-bold text-center">{businessarr[0]["averagedigitalage"][0][""]} Days</h1>


):(<p className="font-bold text-center">LOADING...</p>)}
       
</Card>



</div>


<div className="mr-5 ml-5 h-44  flex justify-center gap-10 mt-5">




<Card>
  <>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span className="font-bold">Average Credit Score</span>
          {/* <span>{riskscore}</span> */}
        </p>
{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (
<>




        {/* <div className="flex flex-row  ">        */}
        <div className="flex flex-col">
<GaugeChart id="avgsocialscore"
            colors={["#ff0000", "rgb(255, 255, 0)","rgb(0, 255, 0)"]}
            nrOfLevels={20}
            percent={(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])/900):(0)}
            hideText
            />

<span style={{marginTop:"-10px"}} className="font-bold flex justify-center items-center">{(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])):(<p className="font-bold text-center">LOADING...</p>)}</span>

</div>

{/* 

<div className="flex flex-col">

<DonutChart
// style={{height: '100px'}}
height="200px"

        data={(businessarr!==null)?(businessarr[0]["totaldigitalfootprint"]):(null)}
        category="value_count"
        index="Risk_Model.digitalFootprint"
        // colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      />




{/* <p>High Risk: {(businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "High"))? businessarr[0]["identityConfidenceScore"].find(item => item["Risk_Model.identityConfidence"] === "High")["value_count"] : (null)}</p> */}


{/* (businessarr[0]["sociaslscore"][0]["Avg_socialscore"]) */}
{/* <p>High Risk: {(businessarr[0]["totaldigitalfootprint"][0].find(item => item["Risk_Model.digitalFootprint"] === "High"))? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "High")["value_count"] : (null)}</p>
<p>Medium Risk: {(businessarr[0]["totaldigitalfootprint"][0].find(item => item["Risk_Model.digitalFootprint"] === "Medium"))? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Medium")["value_count"] : (null)}</p>
<p>Low Risk {(businessarr[0]["totaldigitalfootprint"][0].find(item => item["Risk_Model.digitalFootprint"] === "Low"))? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Low")["value_count"] : (null)}</p>
 */}

{/* 

<p>High Risk: {businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "High") ?  businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "High")["value_count"] :"0"}</p>
<p>Medium Risk: {businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Medium") ? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Medium")["value_count"] :"0"}</p>
<p>Low Risk: {businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Low") ? businessarr[0]["totaldigitalfootprint"].find(item => item["Risk_Model.digitalFootprint"] === "Low")["value_count"] :"0"}</p>
  </div> */}


 

  
  {/* </div> */}

  


{/* <span className="font-bold flex justify-center items-center">{(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])):("Loading...")}</span> */}



</>):(<p className="font-bold text-center">LOADING...</p>)}



</>
</Card>





<Card>
<>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          {/* <span className="font-bold">Phone Footprint Risk</span> */}


          <span className="font-bold"> Phone Footprint Risk
  {' '}
  <span className="text-green-500">Low</span>
  {' '}
  <span className="text-yellow-500">Medium</span>
  {' '}
  <span className="text-red-500">High</span>
</span>
          {/* <span>{riskscore}</span> */}
        </p>


<>

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


  <>


<PieChart


series={[
  {
    
    data: businessarr[0]["phonefootprint"].map(item => ({
      name: item["Phone_Name_Attributes.phoneFootprintStrengthOverall"],
      value: item["value_count"],
      color: item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "High" ? "rgb(255, 0, 0)" : item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "Medium" ? "rgb(255, 255, 0)" : item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "Low" || "Very Low" ? "rgb(0, 255, 0)": null,
      
    })),
    arcLabel: (item) => `${item.value}`,
    arcLabelMinAngle: 45,
    cx: '90%',
          cy: '30%',
          outerRadius: '100%',

  },
]}
sx={{
  [`& .${pieArcLabelClasses.root}`]: {
    fill: 'black',
    fontSize:"15px",
    fontWeight: 'bold',
  },
}}
{...size}
/>




{/* 
  <DonutChart
        // height="100px"

data={businessarr[0]["phonefootprint"]}
    category="value_count"
    index="Phone_Name_Attributes.phoneFootprintStrengthOverall"
    // colors={"Red, Yellow, Lime, Green"}
    onValueChange={(v) => setValue(v)}
  />

  
<p>High Risk: {businessarr[0]["phonefootprint"].find(item => item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "High") ?  businessarr[0]["phonefootprint"].find(item => item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "High")["value_count"] :"0"}</p>
<p>Medium Risk: {businessarr[0]["phonefootprint"].find(item => item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "Medium") ? businessarr[0]["phonefootprint"].find(item => item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "Medium")["value_count"] :"0"}</p>
<p>Low Risk: {businessarr[0]["phonefootprint"].find(item => item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "Low") ? businessarr[0]["phonefootprint"].find(item => item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "Low")["value_count"] :"0"}</p>
<p>Very Low Risk: {businessarr[0]["phonefootprint"].find(item => item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "Very Low") ? businessarr[0]["phonefootprint"].find(item => item["Phone_Name_Attributes.phoneFootprintStrengthOverall"] === "Very Low")["value_count"] :"0"}</p> */}


</>






):(<p className="font-bold text-center">LOADING...</p>)}

</>
</>
</Card>










{/* <Card style={{width:"3000px"}}  >  */}
{/* className="max-w-sm" */}
 <Card > 

 <>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span className="font-bold">Top 4 Social Sites</span>
          {/* <span>{riskscore}</span> */}
        </p>


<>
{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


<>

<BarList
data={(businessarr!==null)?(businessarr[0]["totalsocialsites"]):(null)}
style={{height: "100px"}}
/>
{/* 
<BarChart
        style={{height:"150px",marginTop:'-10px',zIndex:"1"}}
        className="mt-6"
        data={(businessarr!==null)?(businessarr[0]["totalsocialsites"]):(null)}
        index="social_site"
        categories={['account_found']}
        colors={['blue']}
        layout="vertical"
        showLegend={false}
        // valueFormatter={dataFormatter}
        yAxisWidth={30}
        rotateLabelX={{ angle:270,verticalShift:20, xAxisHeight:50}}
        
        showXAxis={true}
        showYAxis={true}

      /> */}



      </>
      ):(<p className="font-bold text-center">LOADING...</p>)}
</>
</>

</Card> 



<Card>
<>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          {/* <span className="font-bold">Prepaid PostPaid</span> */}
          <span className="font-bold">
  <span className="text-green-500">Prepaid</span>
  {' '}
  <span className="text-black-500">VS</span>
  {' '}
  <span className="text-blue-500">Postpaid</span>
</span>
          {/* <span>{riskscore}</span> */}
        </p>


<>

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


  <>



<PieChart


series={[
  {
    
    data: businessarr[0]["prepaidPostpaid"].map(item => ({
      name: item["Phone_Network.numberBillingType"],
      value: item["value_count"],
      
      color: item["Phone_Network.numberBillingType"] === "prepaid" ? "rgb(0, 255, 0)":  "rgb(0, 0, 255)"

    })),
    arcLabel: (item) => `${item.value}`,
    arcLabelMinAngle: 45,
    cx: '90%',
    cy: '30%',
    outerRadius: '100%',

  },
]}
sx={{
  [`& .${pieArcLabelClasses.root}`]: {
    fill: 'black',
    fontSize:"15px",
    fontWeight: 'bold',
  },
}}
{...size}
/>


{/* 
  <DonutChart
        // height="100px"

data={businessarr[0]["prepaidPostpaid"]}
    category="value_count"
    index="Phone_Network.numberBillingType"
    // colors={"Red, Yellow, Lime, Green"}
    onValueChange={(v) => setValue(v)}
  />

  
<p>Prepaid: {businessarr[0]["prepaidPostpaid"].find(item => item["Phone_Network.numberBillingType"] === "postpaid") ?  businessarr[0]["prepaidPostpaid"].find(item => item["Phone_Network.numberBillingType"] === "postpaid")["value_count"] :"0"}</p>
<p>Postpaid: {businessarr[0]["prepaidPostpaid"].find(item => item["Phone_Network.numberBillingType"] === "prepaid") ? businessarr[0]["prepaidPostpaid"].find(item => item["Phone_Network.numberBillingType"] === "prepaid")["value_count"] :"0"}</p>
 */}

</>






):(<p className="font-bold text-center">LOADING...</p>)}

</>
</>
</Card>

{/* <Card className="max-w-sm">  */}

 {/* <DonutChart
style={{height: '100px'}}
        data={(businessarr!==null)?(businessarr[0]["totalriskmodel"]):(null)}
        category="value_count"
        index="Risk_Model.telecomRisk"
        // value_count
        // valueFormatter={valueFormatter}
        // colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
        onValueChange={(v) => setValue(v)}
      /> */}




{/* 
{businessarr !== null && (
  <>
  <DonutChart
    style={{ height: '100px' }}
    data={businessarr[0]["totalriskmodel"]}
    category="value_count"
    index="Risk_Model.telecomRisk"
    onValueChange={(v) => setValue(v)}
  />

  
<p>High Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "High") ?  businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "High")["value_count"] :"0"}</p>
<p>Medium Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Medium") ? businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Medium")["value_count"] :"0"}</p>
<p>Low Risk: {businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.telecomRisk"] === "Low") ? businessarr[0]["totalriskmodel"].find(item => item["Risk_Model.digitalFootprint"] === "Low")["value_count"] :"0"}</p>


</>







)}
 */}


{/* </Card>  */}



{/* 
<Card className="max-w-sm"> 





<BarChart
        style={{height:"200px", marginTop:"-25px"}}
        className="mt-6"
        data={(businessarr!==null)?(businessarr[0]["totalsocialsites"]):(null)}
        index="social_site"
        categories={['account_found']}
        colors={['blue']}
        // valueFormatter={dataFormatter}
        yAxisWidth={1}

      />

</Card>  */}


</div>

</>








          ):(null)}

         <div>
            {(graphvisible)?(
            <div className="mt-10 space-y-3">
            {/* <p className="text-center font-mono text-sm text-slate-500">
            Alternate Risk Score
            </p> */}







            <div className="mr-5 ml-5 flex justify-center gap-10">

            <Card className="max-w-sm">
              <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
               <span>Name</span>
              {/* <span>{dataarr.Name}</span> */}
              </p>
                <h1 style={{fontSize:"26px"}}>{tempholdingarr.name}</h1>
                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
            <span>zone</span>
</p>



            <span className="font-bold">{tempholdingarr.Zone}</span>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
            <span>city</span>
            </p>

            <span className="font-bold">{tempholdingarr.City}</span>
   {/* <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">

            <span>state</span>
            </p>
            <span className="font-bold">{dataarr.State}</span> */}


{/* </p> */}
              {/* <p>{dataarr.name} */}

              {/* </p> */}
                  </Card>
              <Card className="max-w-sm">
              <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span>Alternate Risk Score</span>
          {/* <span>{riskscore}</span> */}
        </p>

              {/* <p className="text-center font-mono text-sm text-slate-500">
            Alternate Risk Score 
            </p> */}
            {/* <p>{dataarr['Risk_Model.alternateRiskScore']}</p> */}
            


            <GaugeChart id="altriskchart"
            nrOfLevels={20}
            percent={tempholdingarr["Risk_Model.alternateRiskScore"]/1000}
            hideText
            />
            <span className="font-bold flex justify-center items-center">{tempholdingarr["Risk_Model.alternateRiskScore"]}</span>

            
            
                {/* <CategoryBar
                  values={[400, 300, 200, 100]}
                  colors={['emerald', 'yellow', 'orange', 'rose']}
                  markerValue= {riskscore}
                //   markerValue={(parseInt(dataarr['Risk_Model.alternateRiskScore']))}

                //   parseInt(dataarr[0]['Risk_Model.alternateRiskScore'])
                //   markerValue={parseInt(dataarr['Risk_Model.alternateRiskScore'])}
                //   parseInt(dataarr['Risk_Model.alternateRiskScore']);
                // markerValue={(dataarr['Risk_Model.alternateRiskScore'])}

                // markerValue={62}

                  
                /> */}
              </Card>

              {/* <Card className="max-w-sm">
              <p>SOCIAL SITES</p>
              </Card> */}


              <Card className="max-w-sm">
             
          <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span> Social Footprint Score</span>
          {/* <span>{dataarr["Risk_Model.socialFootprintScore"]}</span> */}
        </p>

            <GaugeChart id="socialfootprintchart"
            colors={["#ff0000", "rgb(255, 255, 0)","rgb(0, 255, 0)"]}
            nrOfLevels={20}
            percent={tempholdingarr["Risk_Model.socialFootprintScore"]/1000}
            hideText
            />
             {/* <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center"> */}

<span className="font-bold flex justify-center items-center">{tempholdingarr["Risk_Model.socialFootprintScore"]}</span>
{/* </p> */}
            
              </Card>
              
       </div>




<div className="mr-5 ml-5 flex justify-center">
<Card>


<BarChart
        className="h-72"
        data={datahero1}
        index="name"
        categories={['value']}
        // colors={datahero1.map(item => item.color)} 
        color={['colors']}
        yAxisWidth={30}
        layout="vertical"
        

/>



</Card>





</div>





       </div>
  



  




            
            
            
            
            
            
            
            
            
            ):(null)}


          </div>


        </div>





</>
    )
}


export default Onboarding;