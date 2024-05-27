import {  Metric, Text } from '@tremor/react';
import { Card, DonutChart, List, ListItem, LineChart, Legend  } from '@tremor/react';
import echargelogo from './chargeuplogo.jpg';
import backgroundimage from './backgroundimage.png';
import React, {useState, useEffect} from 'react';
import { Axios } from 'axios';
import { AgChartsReact } from 'ag-charts-react';






import "./Maindash.css";




// const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/data');
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
















function classNames(...classes) {





    return classes.filter(Boolean).join(' ');
  }
let data3=[];
let data4=[];


const data2=[

  {
    name: 'Data 1',
    amount: 300,
    share: '30%',
    color: 'bg-cyan-500',
  },
  {
    name: 'Data 2',
    amount: 500,
    share: '70%',
    color: 'bg-slate-50',
  },


]
const data = [
    {
      name: 'Data 1',
      amount: 6730,
      share: '32.1%',
      color: 'bg-cyan-500',
    },
    {
      name: 'Data 2',
      amount: 4120,
      share: '19.6%',
      color: 'bg-blue-500',
    },
    {
      name: 'Data 3',
      amount: 3920,
      share: '18.6%',
      color: 'bg-indigo-500',
    },
  ];

let grpahdata=[]

// const grpahdata=[
//     {
//       "date": "2024-04-24T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 721
//     },
//     {
//       "date": "2024-05-03T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 853
//     },
//     {
//       "date": "2024-04-28T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 716
//     },
//     {
//       "date": "2024-05-09T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 837
//     },
//     {
//       "date": "2024-05-08T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 861
//     },
//     {
//       "date": "2024-04-21T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 705
//     },
//     {
//       "date": "2024-04-25T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 717
//     },
//     {
//       "date": "2024-04-19T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 668
//     },
//     {
//       "date": "2024-04-26T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 725
//     },
//     {
//       "date": "2024-05-07T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 803
//     },
//     {
//       "date": "2024-05-11T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 836
//     },
//     {
//       "date": "2024-05-12T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 814
//     },
//     {
//       "date": "2024-04-22T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 733
//     },
//     {
//       "date": "2024-04-20T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 715
//     },
//     {
//       "date": "2024-05-05T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 757
//     },
//     {
//       "date": "2024-05-10T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 847
//     },
//     {
//       "date": "2024-05-01T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 790
//     },
//     {
//       "date": "2024-04-27T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 723
//     },
//     {
//       "date": "2024-05-02T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 792
//     },
//     {
//       "date": "2024-05-06T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 771
//     },
//     {
//       "date": "2024-04-29T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 728
//     },
//     {
//       "date": "2024-05-14T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 786
//     },
//     {
//       "date": "2024-05-04T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 851
//     },
//     {
//       "date": "2024-04-30T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 744
//     },
//     {
//       "date": "2024-05-13T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 825
//     },
//     {
//       "date": "2024-04-23T00:00:00.000Z",
//       "Distinct_Vehicles_Running": 692
//     }
  
// ]




  const chartdata = [
    {
      date: 'Jan 22',
      Driver: 2890,
      Assets: 2338,
    },
    {
      date: 'Feb 22',
      Driver: 2756,
      Assets: 2103,
    },
    {
      date: 'Mar 22',
      Driver: 3322,
      Assets: 2194,
    },
    {
      date: 'Apr 22',
      Driver: 3470,
      Assets: 2108,
    },
    {
      date: 'May 22',
      Driver: 3475,
      Assets: 1812,
    },
    {
      date: 'Jun 22',
      Driver: 3129,
      Assets: 1726,
    },
    {
      date: 'Jul 22',
      Driver: 3490,
      Assets: 1982,
    },
    {
      date: 'Aug 22',
      Driver: 2903,
      Assets: 2012,
    },
    {
      date: 'Sep 22',
      Driver: 2643,
      Assets: 2342,
    },
    {
      date: 'Oct 22',
      Driver: 2837,
      Assets: 2473,
    },
    {
      date: 'Nov 22',
      Driver: 2954,
      Assets: 3848,
    },
    {
      date: 'Dec 22',
      Driver: 3239,
      Assets: 3736,
    },
  ];
  

// background image #003b4d
function Maindash(){

const [data, setData]= useState([null]);
const [loading, setLoading]= useState(true);
const [error, setError]= useState(null);
const piechart1=[];
const piechart2=[];
const piechart3=[];




useEffect(() => {
  const fetchData = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await fetch('http://localhost:3000/api/data', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          // Add any necessary headers here
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON response
      const data = await response.json();

      setData(data);
      setLoading(false);

    if(data !==null && data !== undefined) {
       data3 = [
        {
          name: 'Data 1',
          amount: data[0].totalrunningasset,
          share: data[0].runningassetpercentage,
          color: 'bg-cyan-500',
        },
        {
          name: 'Data 2',
          amount: data[0].totalidleasset,
          share: data[0].idleassetpercentage,
          color: 'bg-slate-100'
        }
      ];



      data4 = [
        {
          name: 'Data 1',
          amount: data[0].totalidleasset,
          share: data[0].idleassetpercentage,
          color: 'bg-cyan-500',
        },
        {
          name: 'Data 2',
          amount: data[0].totalrunningasset,
          share: data[0].runningassetpercentage,
          color: 'bg-slate-100'
        }
      ];

      grpahdata = data[0].graphdata;
      console.log(grpahdata);
    }

      // {
      //   name: 'Data 1',
      //   amount: 300,
      //   share: '30%',
      //   color: 'bg-cyan-500',
      // },
      // {
      //   name: 'Data 2',
      //   amount: 500,
      //   share: '70%',
      //   color: 'bg-slate-50',
      // },
      
      // Return the fetched data
      // return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // You can handle errors here, e.g., show an error message to the user
      setError(error); // Rethrow the error to be caught by the caller
      setLoading(false);
    
    }
  };

  fetchData();

},[]);

  // const fetchData = async () => {
  //   try {
  //     // Make a GET request to the API endpoint
  //     const response = await fetch('http://localhost:3000/api/data', {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         // Add any necessary headers here
  //       }
  //     });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     // Parse the JSON response
  //     const data = await response.json();
      
  //     // Return the fetched data
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     // You can handle errors here, e.g., show an error message to the user
  //     throw error; // Rethrow the error to be caught by the caller
  //   }
  // };


  // fetchData()
  // .then(data => {
  //   // Do something with the fetched data
  //   console.log(data[0].totalasset);
  //   console.log('Fetched data:', data);
  // })
  // .catch(error => {
  //   // Handle errors here
  //   console.error('Error:', error);
  // });




  const roledata={
    rolename: "",
    graph1acess: true,
    graph2acess: true,
    graph3acess: true,
    linechart1: true,
    linechart2: true
}




    return(
        // 'flex flex-row gap-10'

        <div className='ml-10 mr-10'>
{/* flex-row */}
        {/* <header className='flex justify-around  space-x-10  mb-10 h-24 w-[1280px] bg-gradient-to-r from-green-400 via-green-200 to-emerald-300 '>
          
          <img  className='h-20 ' src={echargelogo} alt='Logo'/>

          <Card className="h-20 bg-opacity-80	mx-auto max-w-xs">
            <p className="text-center text-slate-400">Users</p>
          </Card>

          <Card className="h-20 bg-opacity-80 mx-auto max-w-xs">
            <p className="text-center text-slate-400">Role Management</p>
          </Card>

          <Card className="h-20 bg-opacity-80 mx-auto max-w-xs">
            <p className="text-center text-slate-400">Query</p>
          </Card>

          


          
        </header> */}


        <div className="	mt-10 flex flex-row gap-10 justify-center">
{/* ====================================================================================================================================== */}




<Card 




      className="mx-auto max-w-xs "
      decoration="top"
      decorationColor="indigo"
      style={{height:'175px'}}>


<h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Total Assets</h1>

{/* <h1 style={{fontSize: '64px', textAlign:'center'}}>{( data[0].totalasset !== null && data[0].totalasset !== undefined) ? `${data[0].totalasset}` : 'Loading...'}</h1> */}

<>

{loading ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Loading....</h1>
) : error ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Error: {error.message}</h1>
 
) :(
  <>
  <h1 style={{ fontSize: '64px', textAlign:"center"}}>{JSON.stringify(data[0].totalasset, null, 2)}</h1>
  </>
)}

{/* <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px' }}>Total Drivers</h1>
<h1 style={{fontSize: '64px', textAlign:'center'}}>1000</h1> */}


</>




{/* <h1 style={{fontSize: '64px', textAlign:'center'}}>
{data.length > 0 && data[0].totalasset !== null && data[0].totalasset !== undefined ? (
  // Render totalasset if it exists and is not null or 
  <>
  {console.log(data.totalasset+" without index")}
  {console.log(data[0].totalasset+" with index")}

  <h1 style={{fontSize: '64px', textAlign:'center'}}>{data[0].totalasset}</h1>
  </>
) : (
  // Otherwise, render "Loading..."

  <>
  {console.log(data.totalasset+" without index")}
  {console.log(data[0].totalasset+" with index")}
  <h1 style={{fontSize: '64px', textAlign:'center'}}>Loading...</h1>

  </>
)}


</h1> */}
{/* <h1 style={{fontSize: '24px', textAlign:"end", marginTop:"40px"}}>Total Assets</h1> */}



        </Card>

        <Card 




className="mx-auto max-w-xs "
decoration="top"
decorationColor="indigo"
style={{height:'175px'}}>




<p style={{textAlign:'center',marginTop:'-20px', marginBottom:'40px'}}>Running Assets</p>
{/* <>

{loading ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Loading....</h1>
) : error ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Error: {error.message}</h1>
 
) :(
  <>
  <h1 style={{ textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>{JSON.stringify(data[0].totalasset, null, 2)}</h1>
  </>
)}


const data2=[

  {
    name: 'Data 1',
    amount: 300,
    share: '30%',
    color: 'bg-cyan-500',
  },
  {
    name: 'Data 2',
    amount: 500,
    share: '70%',
    color: 'bg-slate-50',
  },



</> */}



{loading ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Loading....</h1>
) : error ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Error: {error.message}</h1>
 
) :(
 
  <>



<div className='flex flex-row' >

<div className=' donutchart' style={{position:"relative", right:'-10px',width:'100px', top:'-45px'}}>
<DonutChart 

data={data3}
category="amount"
index="name"
label= {parseFloat(data3[0].share).toFixed(2)+"%"}
colors={['blue','blue-100']}
showTooltip={false}
showAnimation

// colors="color"
//  valueFormatter={valueFormatter}
// customTooltip={customTooltip}
/>

</div>

<div className='text-center' style={{position: 'relative',left:'50px',top:'2px'}}>
<h1>{data3[0].amount}</h1>
</div>


</div>
</>
)}




  </Card>

  <Card 




      className="mx-auto max-w-xs "
      decoration="top"
      decorationColor="indigo"
      style={{height:'175px'}}>



{/* marginTop:'-20px', marginBottom:'40px' */}
<p style={{textAlign:'center',marginTop:'-20px', marginBottom:'40px'}}>Idle Assets</p>

{/* {loading ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Loading....</h1>
) : error ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Error: {error.message}</h1>
 
) :(
 
  <>



<div className='flex flex-row' >

<div className=' donutchart' style={{position:"relative", right:'-10px',width:'100px', top:'-45px'}}>
<DonutChart 

data={data3}
category="amount"
index="name"
label= {parseFloat(data3[0].share).toFixed(2)+"%"}
colors={['blue','blue-100']}
showTooltip={false}
showAnimation

// colors="color"
//  valueFormatter={valueFormatter}
// customTooltip={customTooltip}
/>

</div>

<div className='text-center' style={{position: 'relative',left:'50px',top:'2px'}}>
<h1>{data3[0].amount}</h1>
</div>


</div>
</>
)} */}

{loading ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Loading....</h1>
) : error ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Error: {error.message}</h1>
 
) :(
 
  <>
  <div className='flex flex-row' >
  <div className=' donutchart' style={{position:"relative", right:'-10px',width:'100px', top:'-45px'}}>
<DonutChart 

data={data4}
category="amount"
index="name"
label= {parseFloat(data4[0].share).toFixed(2)+"%"}
colors={['blue','blue-100']}
showTooltip={false}
showAnimation

// colors="color"
//  valueFormatter={valueFormatter}
// customTooltip={customTooltip}
/>
</div>

<div className='text-center' style={{position: 'relative',left:'50px',top:'2px'}}>
<h1>{data4[0].amount}</h1>
</div>


</div>
</>
)}



{/* <div className='flex flex-row' ></div> */}
{/* <div className='flex flex-row' >
 
  <div className=' donutchart' style={{position:"relative", right:'-10px',width:'100px', top:'-45px'}}>
    <DonutChart 
      
      data={data2}
      category="amount"
      index="name"
      label= {data2[0].share}
      colors={['blue','blue-100']}
      showTooltip={false}
      showAnimation
      
      // colors="color"
      //  valueFormatter={valueFormatter}
      // customTooltip={customTooltip}
    />

  </div>

 <div className='text-center' style={{position: 'relative',left:'50px',top:'-2px'}}>
    <h1>{data2[0].amount}</h1>
</div>


</div> */}
     
      



        </Card>


        {/* <Card 




      className="mx-auto max-w-xs "
      decoration="top"
      decorationColor="indigo"
      style={{height:'175px'}}>




<p style={{textAlign:'center',marginTop:'-20px',  marginBottom:'40px'}}> Asset</p>


<div className='flex flex-row' >
 
  <div className=' donutchart' style={{position:"relative", right:'-10px',width:'100px', top:'-45px'}}>
    <DonutChart 
      
      data={data2}
      category="amount"
      index="name"
      label= {data2[0].share}
      colors={['blue','blue-100']}
      showTooltip={false}
      showAnimation
      
      // colors="color"
      //  valueFormatter={valueFormatter}
      // customTooltip={customTooltip}
    />

  </div>

 <div className='text-center' style={{position: 'relative',left:'50px',top:'-2px'}}>
    <h1>{data2[0].amount}</h1>
</div>


</div>
     
      



        </Card> */}












        </div>




{/* mt-36	 */}
        <div className="mt-10	flex flex-row gap-10 justify-center">

        <Card 




className="mx-auto max-w-xs "
decoration="top"
decorationColor="indigo"
style={{height:'175px'}}>


<h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px' }}>Total Drivers</h1>
<h1 style={{fontSize: '64px', textAlign:'center'}}>1000</h1>




  </Card>

  <Card 




className="mx-auto max-w-xs "
decoration="top"
decorationColor="indigo"
style={{height:'175px'}}>




<p style={{textAlign:'center',marginTop:'-20px', marginBottom:'40px'}}>Active Drivers</p>


<div className='flex flex-row' >

<div className=' donutchart' style={{position:"relative", left:'-10px',width:'100px', top:'-45px'}}>
<DonutChart 

data={data2}
category="amount"
index="name"
label= {data2[0].share}
colors={['blue','blue-100']}
showTooltip={false}
showAnimation

// colors="color"
//  valueFormatter={valueFormatter}
// customTooltip={customTooltip}
/>

</div>

<div className='text-center' style={{position: 'relative',left:'50px',top:'-2px'}}>
<h1>{data2[0].amount}</h1>
</div>


</div>





</Card>

<Card 




className="mx-auto max-w-xs "
decoration="top"
decorationColor="indigo"
style={{height:'175px'}}>




<p style={{textAlign:'center',marginTop:'-20px', marginBottom:'40px'}}>Inactive Drivers</p>


<div className='flex flex-row' >

<div className=' donutchart' style={{position:"relative", left:'-10px',width:'100px', top:'-45px'}}>
<DonutChart 

data={data2}
category="amount"
index="name"
label= {data2[0].share}
colors={['blue','blue-100']}
showTooltip={false}
showAnimation

// colors="color"
//  valueFormatter={valueFormatter}
// customTooltip={customTooltip}
/>

</div>

<div className='text-center' style={{position: 'relative',left:'50px',top:'-2px'}}>
<h1>{data2[0].amount}</h1>
</div>


</div>





  </Card>


  <Card 




className="mx-auto max-w-xs "
decoration="top"
decorationColor="indigo"
style={{height:'175px'}}>




<p style={{textAlign:'center',marginTop:'-20px',  marginBottom:'40px'}}> Churned Drivers</p>


<div className='flex flex-row' >

<div className=' donutchart' style={{position:"relative", left:'-10px',width:'100px', top:'-45px'}}>
<DonutChart 

data={data2}
category="amount"
index="name"
label= {data2[0].share}
colors={['blue','blue-100']}
showTooltip={false}
showAnimation

// colors="color"
//  valueFormatter={valueFormatter}
// customTooltip={customTooltip}
/>

</div>

<div className='text-center' style={{position: 'relative',left:'50px',top:'-2px'}}>
<h1>{data2[0].amount}</h1>
</div>


</div>





  </Card>
</div>


{/* ====================================================================================================================================== */}
          {/* <Card 
      className="mx-auto max-w-xs "
      decoration="top"
      decorationColor="indigo">

     
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Batteries</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">100</p>

        </Card>



        <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo">
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">active batteries</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">50</p>
 

        </Card>




        <Card
      className="mx-auto max-w-xs "
      decoration="top"
      decorationColor="indigo">
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">idle batteries</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">20</p>
 

        </Card>



        <Card
      className="mx-auto max-w-xs "
      decoration="top"
      decorationColor="indigo">
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">unavailable batteries</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">30</p>
 

        </Card> */}
        



        {/* //graphs and charts */}

        <div className='flex  flex-row gap-10 justify-center pt-10'>
        {roledata.linechart1 ? (<Card className="gap-10 " >

        {loading ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Loading....</h1>
) : error ? (
  <h1 style={{fontSize: '24px', textAlign:"center", marginTop:'-20px',marginBottom:'20px'}}>Error: {error.message}</h1>
 
) :(

<LineChart
      
      // width="100%"
    
      className="h-80"
      data={grpahdata}
      index="date"
      categories={['Distinct_Vehicles_Running']}
      colors={['indigo']}
      // valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
)}
</Card>): (null) }


{roledata.linechart2 ? (<Card className="gap-10 ">

<LineChart
      
      className="h-80"
      data={chartdata}
      index="date"
      categories={['Driver', 'Assets']}
      colors={['indigo', 'rose']}
      // valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
</Card>): (null) }
</div>
        

<div className='flex flex-row gap-10 justify-center pt-10'>



 {/* {roledata.graph1acess ? ( <Card className="sm:mx-auto sm:max-w-lg ">
        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          data graphs
        </h3>
        <DonutChart
          className="mt-8"
          data={data}
          category="amount"
          index="name"
        //   valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={['cyan', 'blue', 'indigo', 'violet', 'fuchsia']}
        />
        <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
          <span>Category</span>
          <span>Amount / Share</span>
        </p>
        <List className="mt-2">
          {data.map((item) => (
            <ListItem key={item.name} className="space-x-6">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={classNames(
                    item.color,
                    'h-2.5 w-2.5 shrink-0 rounded-sm',
                  )}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-dark-tremor-content-emphasis">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.amount}
                </span>
                <span className="  rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                  {item.share}
                </span>
              </div>
            </ListItem>
          ))}
        </List>
      </Card> ) : (null) } */}




      {/* {roledata.graph2acess ? (<Card id="testingcard" className="sm:mx-auto sm:max-w-lg ">
        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          data graphs
        </h3>
        <DonutChart
          className="mt-8"
          data={data}
          category="amount"
          index="name"
        //   valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={['cyan', 'blue', 'indigo', 'violet', 'fuchsia']}
        />
        <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
          <span>Category</span>
          <span>Amount / Share</span>
        </p>
        <List className="mt-2">
          {data.map((item) => (
            <ListItem key={item.name} className="space-x-6">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={classNames(
                    item.color,
                    'h-2.5 w-2.5 shrink-0 rounded-sm',
                  )}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-dark-tremor-content-emphasis">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.amount}
                </span>
                <span className="  rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                  {item.share}
                </span>
              </div>
            </ListItem>
          ))}
        </List>
      </Card> ) : (null) } */}





      {/* {roledata.graph3acess ? ( <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          data graphs
        </h3>
        <DonutChart
          className="mt-8"
          data={data}
          category="amount"
          index="name"
        //   valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={['cyan', 'blue', 'indigo', 'violet', 'fuchsia']}
        />
        <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
          <span>Category</span>
          <span>Amount / Share</span>
        </p>
        <List className="mt-2">
          {data.map((item) => (
            <ListItem key={item.name} className="space-x-6">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={classNames(
                    item.color,
                    'h-2.5 w-2.5 shrink-0 rounded-sm',
                  )}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-dark-tremor-content-emphasis">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.amount}
                </span>
                <span className="  rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis">
                  {item.share}
                </span>
              </div>
            </ListItem>
          ))}
        </List>
      </Card> ):(null)} */}



      {/* {roledata.graph3acess ? ( <Card className="sm:mx-auto sm:max-w-lg">
      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={data}
          category="amount"
          index="name"
          // valueFormatter={valueFormatter}
          colors={['cyan', 'blue', 'indigo', 'violet', 'fuchsia']}
          className="w-40"
        />
        <Legend
          categories={['New York', 'London', 'Hong Kong', 'San Francisco', 'Singapore']}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="max-w-xs"
        />
      </div>


      </Card> ):(null)} */}






      </div>



        </div>
    );
}

export default Maindash;