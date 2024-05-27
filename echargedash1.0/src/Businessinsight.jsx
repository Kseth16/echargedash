import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { BarList } from '@tremor/react';
import { TextInput, Button, Card, CategoryBar, BarList, BarChart, DonutChart, Legend} from '@tremor/react';
import GaugeChart from 'react-gauge-chart'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


let businessarr=null;

function Businessinsight(){

    
  const[mobileNumber,setMobileNumber]=useState("");
  const[graphvisible,setGraphVisibility]=useState(false);
  const[businessInsightVisible, setBusinessInsightVisible]=useState(true);
  const[riskScore,setRiskScore]=useState(0);
  const[socialScore,setSocialScore]=useState(0);
  const [tempholdingarr, setTempholdingarr] = useState(null);
  const [businessarray, setBusinessArray]= useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [topDivsHeight, setTopDivsHeight] = useState(0);

  


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


useEffect(() => {
    fetchData();
    // fetchbusinessdata();
    const div1Height = document.getElementById("div1").clientHeight;
    const div2Height = document.getElementById("div2").clientHeight;
    const combinedHeight = div1Height + div2Height;
    setTopDivsHeight(combinedHeight);

  }, []); 


  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);

  };



  const findDataByPhoneNumber = (phoneNumber) => {

    


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


  const windowHeight = window.innerHeight;
  const remainingHeight = windowHeight - topDivsHeight-10;



  const chartStyle = {
  

  }



    return(
        <>
<div style={{ minHeight: "100%", overflowY: "auto", overflow:'hidden' }}>



<div id="div1" className="flex flex-row " style={{gap:'10px', justifyContent:'flex-end', paddingTop:"10px", paddingRight:"10px"}} >

      
<Button variant="primary" onClick={()=>{
setTempholdingarr(findDataByPhoneNumber(0));

}}  className="bg-blue-500 text-white p-2 rounded-md">Business Overview</Button>



<TextInput value={mobileNumber} onChange={handleMobileNumberChange}  placeholder="enter Mobile number"  className=" max-w-xs "></TextInput>

<Button variant="primary" onClick={()=>{
console.log(mobileNumber);
console.log(dataarr);
setTempholdingarr(findDataByPhoneNumber(mobileNumber));



}} >Search Driver</Button>

</div>

<Card id="div2" style={{marginTop:'5px'}}>
<div style={{display:"flex", flexDirection:"row", placeContent:"space-evenly" }}>


<div style={{marginLeft:'50px', marginRight:'0px', marginTop: '5px'}}>

    <p  className=" text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span className="font-bold" >Total No. of Drivers</span>
        </p>
        {(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (

        <p className="font-bold text-center">{businessarr[0]["totaldrivers"][0][""]}</p>
        ):<p>Loading...</p>}

</div>

<div style={{width:'50%', position:"relative", top:"5px"}}>

          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-around">
          <span>Low Risk amt</span>
          {/* <p style={{ position:'absolute', top:"12px", left:"90px"}}>TEST</p> */}
          <span>Medium Risk amt</span>
          {/* <p style={{ position:'absolute', top:"12px", left:"310px"}}>TEST</p> */}
          <span>High Risk amt</span>
          {/* <p style={{ position:'absolute', top:"12px", right:"90px"}}>TEST</p> */}

        </p>
<CategoryBar 
            values={[333, 333, 334]}
            showLabels={false}
            colors={['emerald', 'yellow', 'rose']}
          
            
          />

<p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-around">
          <span>Low Risk</span>
          {/* <p style={{ position:'absolute', top:"12px", left:"90px"}}>TEST</p> */}
          <span>Medium Risk</span>
          {/* <p style={{ position:'absolute', top:"12px", left:"310px"}}>TEST</p> */}
          <span>High Risk</span>
          {/* <p style={{ position:'absolute', top:"12px", right:"90px"}}>TEST</p> */}

        </p>
</div>



</div>
</Card>


<div className="flex flex-row gap-1 mt-1" style={{height: `${remainingHeight}px`, overflow:'hidden'}}>

{/* <div className="flex flex-col w-1/3"> */}
<div className="flex flex-col w-1/3 " >

<Card style={{height:'33%', maxHeight:'33%'}}>
<div >

<>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
<span className="font-bold">Average Social Score</span>
</p>
</>
  
  <>


        {(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (

        <div  className="flex flex-col">

            <div style={{width:'70%', marginLeft:'60px'}} >
         <GaugeChart id="avgsocialscore" 
            
            
            colors={["#ff0000", "rgb(255, 255, 0)","rgb(0, 255, 0)"]}
            nrOfLevels={20}
            percent={(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])/1000):(0)}
            hideText
            
            
            />
            </div>

            
      <span style={{marginTop:"-15px"}}  className="font-bold flex justify-center items-center">{(businessarr!==null)?((businessarr[0]["socialscore"][0]["Avg_socialscore"])):(<p className="font-bold text-center">LOADING...</p>)}</span>


      </div> 




      








):(<p className="font-bold text-center">LOADING...</p>)}
</>



</div>


</Card>

<Card style={{height:'33%'}}>



<>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">

          <span className="font-bold">Social Media Count</span>
        </p>


<>

{(businessarr !== null && businessarr[0]?.acountsfound !== null) ? (


  <>
  <div className="flex flex-row justify-between">
  
{/* <PieChart


      series={[
        {
          
          data: businessarr[0]["acountsfound"].map(item => ({
            name: item["heading"],
            value: item["amount"],
            
             color: item["heading"] === "Less than 4 accounts" ? "rgb(126, 255, 126)" : item["heading"] === "Between 4 to 8 acocunts" ? "rgb(249, 72, 255)" : item["heading"] === "more than 8 accounts" ? "rgb(50, 54, 255)" : "rgb(255, 0, 0)"

          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '70%',
          
          cy: '10%',
          outerRadius: '130%',
          
          
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
    />   */}


<div className="bg-slate-100 flex flex-col  mt-4" style={{width:'100%', fontSize:'14px', whiteSpace: 'nowrap', overflowX: 'auto'}} >
  {/* <p>legend</p> */}
  {/* <p style={{color:"rgb(0, 255, 0)"}}> >4 accounts</p> */}
  <p style={{color: "rgb(0, 255, 0)"}}>&gt;4 accounts</p>
  <p style={{color:'rgb(249, 72, 255)'}}> 4 to 8 accounts</p>
  <p style={{color:'rgb(50, 54, 255)'}}> 8 to 12 accounts</p>
  {/* rgb(225, 238, 46) */}
</div>



</div>




</>






):(<p className="font-bold text-center">LOADING...</p>)}

</>
</>




</Card>


<Card style={{height:'33%'}}>
<>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">
          <span className="font-bold">Top 4 Social Sites</span>
        </p>


<>
{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


<>

<div >
<BarList
data={(businessarr!==null)?(businessarr[0]["totalsocialsites"]):(null)}
/>
</div>



      </>
      ):(<p className="font-bold text-center">LOADING...</p>)}
</>
</>





</Card>
</div>


<div className="flex flex-col w-1/3">

<Card style={{height:'33%'}}>
    

<>
<p  className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">

          <span className="font-bold"> Telecom Risk Score

</span>

          
        </p>


<>

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


  <>
    <div className="flex flex-row justify-between">

 
<PieChart


      series={[
        {
          
          data: businessarr[0]["totalriskmodel"].map(item => ({
            name: item["Risk_Model.telecomRisk"],
            value: item["value_count"],
            color: item["Risk_Model.telecomRisk"] === "High" ? "rgb(248, 83, 83)" : item["Risk_Model.telecomRisk"] === "Medium" ? "rgb(248, 248, 67)" : item["Risk_Model.telecomRisk"] === "Low" ? "rgb(80, 247, 80)": null,
            
          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '70%',
          
          cy: '10%',
          outerRadius: '130%',
          

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


<div className="bg-slate-100 flex flex-col  mt-4" style={{width:'100%', fontSize:'14px', whiteSpace: 'nowrap', overflowX: 'auto'}} >
  {/* <p>legend</p> */}
  <p style={{color:"rgb(248, 83, 83)"}}>High</p>
  <p style={{color:'rgb(248, 248, 67)'}}>Medium</p>
  <p style={{color:'rgb(80, 247, 80)'}}>Low</p>
  {/* rgb(225, 238, 46) */}
</div>






</div>







</>




):(<p className="font-bold text-center">LOADING...</p>)}

</>
</>












</Card>

<Card style={{height:'33%'}}>
   
   


<>
<p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">

          <span className="font-bold">Social Media Count</span>
        </p>


<>

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


  <>
  <div className="flex flex-row justify-between">
 

{/*  
<PieChart


      series={[
        {
          
          data: businessarr[0]["acountsfound"].map(item => ({
            name: item["heading"],
            value: item["amount"],
            
             color: item["heading"] === "Less than 4 accounts" ? "rgb(0, 255, 0)" : item["heading"] === "Between 4 to 8 acocunts" ? "rgb(249, 72, 255)" : item["heading"] === "more than 8 accounts" ? "rgb(50, 54, 255)" : "rgb(255, 0, 0)"

          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '70%',
          
          cy: '10%',
          outerRadius: '130%',
          
          
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
    />   */}

<div className="bg-slate-100 flex flex-col  mt-4" style={{width:'100%', fontSize:'14px', whiteSpace: 'nowrap', overflowX: 'auto'}} >
  {/* <p>legend</p> */}
  <p style={{color:"rgb(0, 255, 0)"}}>Less than 4 accounts</p>
  <p style={{color:'rgb(249, 72, 255)'}}>Between 4 to 8 accounts</p>
  <p style={{color:'rgb(50, 54, 255)'}}>Between 8 to 12 accounts</p>
  {/* rgb(225, 238, 46) */}
</div>



</div>




</>






):(<p className="font-bold text-center">LOADING...</p>)}

</>
</>





</Card>

<Card style={{height:'33%'}}>

<div  style={{marginTop:'-25px'}}>


{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


<div className="flex flex-row justify-between">

<p className="whitespace-nowrap" style={{position:'absolute', left:'10px'}}>Reachable/Non-Reachable </p>

<div className="flex flex-row justify-between">

 <PieChart


      series={[
        {
          
          data: businessarr[0]["prepaidPostpaid"].map(item => ({
            name: item["Phone_Network.numberBillingType"],
            value: item["value_count"],
            color: item["Phone_Network.numberBillingType"] === "prepaid" ? "rgb(126, 255, 126)":  "rgb(252, 126, 126)"
            
          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '40%',
          
          cy: '35%',
          outerRadius: '80%',

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

<div className="bg-slate-100 flex flex-col mt-12" style={{position:'absolute', right:'230px'}}  >

{/* <div className="bg-slate-100 flex flex-col  mt-4" style={{position:'absolute', right:'230px', width:'100%', fontSize:'14px', whiteSpace: 'nowrap', overflowX: 'auto'}} >  */}

  {/* <p>legend</p> */}
  <p style={{color: "rgb(126, 255, 126)"}}>prepaid</p>
  <p style={{color: "rgb(252, 126, 126)"}}>postpaid</p>
</div>
</div>


<div className="flex flex-col">


  {/* the heading */}
<p className="whitespace-nowrap" style={{position:'absolute', right:'10px'}}>Reachable/Non-Reachable </p>



{/* the chart */}
<>


<div style={{position:'absolute', left:'225px'}}>
   
 <PieChart
      

      series={[
        {
          
          data: businessarr[0]["phonereachable"].map(item => ({
            name: item["Phone_Network.isPhoneReachable"],
            value: item["value_count"],
            color: item["Phone_Network.isPhoneReachable"] === "TRUE" ? "rgb(126, 255, 126)" : 'rgb(252, 126, 126)',
            
          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '40%',
          
          cy: '35%',
          outerRadius: '80%',

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
    </div>



<div className=" bg-slate-100 flex flex-col mt-12" style={{position:'absolute', right: '0px'}}  >
  {/* <p>legend</p> */}
  <p style={{color: "rgb(126, 255, 126)"}}>Reachable</p>
  <p style={{color: "rgb(252, 126, 126)"}}>Non Reachable</p>

</div>


</>

</div>


</div>
):(<p className="font-bold text-center">LOADING...</p>)}


</div>
</Card>
</div>



<div className="flex flex-col w-1/3">

<Card style={{height:'33%'}}>
<>


<p  className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">

  <span className="font-bold"> Identity Confidence Score
 
</span>


        </p>
{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (

<div className="flex flex-row justify between">

 
<PieChart
      

      
      series={[
        {
          
          data: businessarr[0]["identityConfidenceScore"].map(item => ({
            name: item["Risk_Model.identityConfidence"],
            value: item["value_count"],
            color: item["Risk_Model.identityConfidence"] === "High" ? "rgb(126, 255, 126)" : item["Risk_Model.identityConfidence"] === "Medium" ? "rgb(248, 248, 67)" : item["Risk_Model.identityConfidence"] === "Low" ? "rgb(248, 83, 83)": null
          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '70%',
          
          cy: '10%',
          outerRadius: '130%',

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








<div className="bg-slate-100 flex flex-col  mt-4" style={{width:'100%', fontSize:'14px', whiteSpace: 'nowrap', overflowX: 'auto'}} >
  {/* <p>legend</p> */}
  <p style={{color:"rgb(248, 83, 83)"}}>High</p>
  <p style={{color:'rgb(248, 248, 67)'}}>Medium</p>
  <p style={{color:'rgb(80, 247, 80)'}}>Low</p>
  {/* rgb(225, 238, 46) */}



</div>
      

      </div>
):(<p className="font-bold text-center">LOADING...</p>)}



</>
</Card>

<Card style={{height:'33%'}}>
    

<>
<p  className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">

          <span className="font-bold"> Phone Name Match

</span>

          
        </p>


<>

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


  <>
    <div className="flex flex-row justify-between">

  
<PieChart


      series={[
        {
          
          data: businessarr[0]["upicount"].map(item => ({
            name: item["upi"],
            value: item["count"],
            color: item["upi"] === "Yes" ? 'rgb(126, 255, 126)' : "rgb(252, 126, 126)",
            
          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '70%',
          
          cy: '10%',
          outerRadius: '130%',
          

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


<div className="bg-slate-100 flex flex-col mt-4" style={{width:'100%', fontSize:'14px', whiteSpace: 'nowrap', overflowX: 'auto'}} >
  {/* <p>legend</p> */}
  <p style={{color: "rgb(126, 255, 126)"}}>Has UPI</p>
  <p style={{color: "rgb(252, 126, 126)"}}>No UPI</p>
  {/* rgb(225, 238, 46) */}
</div>






</div>







</>




):(<p className="font-bold text-center">LOADING...</p>)}

</>
</>













</Card>

<Card style={{height:'33%'}}>
     

<>
<p  className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-tremor-default text-tremor-content dark:text-dark-tremor-content whitespace-nowrap">

          <span className="font-bold"> UPI

</span>

          
        </p>


<>

{(businessarr !== null && businessarr[0]?.networksusedresult !== null) ? (


  <>
    <div className="flex flex-row justify-between">



  
<PieChart


      series={[
        {
          
          data: businessarr[0]["upicount"].map(item => ({
            name: item["upi"],
            value: item["count"],
            color: item["upi"] === "Yes" ? 'rgb(126, 255, 126)' : "rgb(252, 126, 126)",
            
          })),
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          cx: '70%',
          
          cy: '10%',
          outerRadius: '130%',
          

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


<div className="bg-slate-100 flex flex-col h-fit" style={{width:'100%', fontSize:'14px', whiteSpace: 'nowrap', overflowX: 'auto'}} >
  {/* <p>legend</p> */}
  <p style={{color: "rgb(126, 255, 126)"}}>Has UPI</p>
  <p style={{color: "rgb(252, 126, 126)"}}>No UPI</p>
  {/* rgb(225, 238, 46) */}
</div>






</div>







</>




):(<p className="font-bold text-center">LOADING...</p>)}

</>
</>















</Card>
</div>

</div>
</div>




        
        
        </>
  
    );
}

export default Businessinsight;