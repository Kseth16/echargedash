

// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// function Gettest() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch data from the API
//         axios.get("http://localhost:3000/api/data", {
//             // params: {
//             //     date: '2024-04-26', // Example date
//             //     vehicleNo: 'CGR10863' // Example vehicle number
//             // }
//         })
//         .then(response => {
//             console.log("Data received:", response.data);
//             setData(response.data);
//         })
//         .catch(error => {
//             setError(error.message);
//         })
//         .finally(() => {
//             setLoading(false);
//         });


        
//     }, []);


    
//     return (
//         <div className="Gettest">
//             {loading && <p>Loading...</p>}
//             {error && <p>Error: {error}</p>}
//             {data && (
//                 <div>
//                     {data.map((item, index) => (
//                         <div key={index}>
//                             <p>Id: {item.Id}</p>
//                             <p>Vehicle No: {item.vehicleNo}</p>
//                             <p>Type: {item.type}</p>
//                             <p>allow_charging: {item.allow_charging}</p>

                            
                            
//                             {/* Add other fields as needed */}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Gettest;



// // import React, { useState, useEffect } from 'react';
// // import { Line } from 'react-chartjs-2';

// // // Assuming you have a function to fetch data from your API
// // const fetchDataFromAPI = async (queryParams) => {
// //   try {
// //     const response = await fetch('http://localhost:3000/api/data', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(queryParams),
// //     });
// //     const data = await response.json();
// //     return data;
// //   } catch (error) {
// //     console.error('Error fetching data:', error);
// //     return null;
// //   }
// // };

// // const Gettest = () => {
// //   // State variables
// //   const [vehicleNoOptions, setVehicleNoOptions] = useState([]);
// //   const [selectedVehicleNo, setSelectedVehicleNo] = useState('');
// //   const [selectedDateRange, setSelectedDateRange] = useState([]);
// //   const [chartData, setChartData] = useState(null);

// //   // Fetch vehicle number options on component mount
// //   useEffect(() => {
// //     // Fetch vehicle numbers from API
// //     // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
// //     const fetchVehicleNumbers = async () => {
// //       try {
// //         const response = await fetch('http://localhost:3000/api/data/vehicle_numbers');
// //         const data = await response.json();
// //         setVehicleNoOptions(data.vehicleNumbers);
// //       } catch (error) {
// //         console.error('Error fetching vehicle numbers:', error);
// //       }
// //     };

// //     fetchVehicleNumbers();
// //   }, []);

// //   // Function to fetch data based on selected vehicle number and date range
// //   const fetchData = async () => {
// //     const queryParams = {
// //       vehicleNo: selectedVehicleNo,
// //       startDate: selectedDateRange[0],
// //       endDate: selectedDateRange[1],
// //     };

// //     const data = await fetchDataFromAPI(queryParams);
// //     // Assuming the API returns data in the format compatible with Chart.js
// //     setChartData(data);
// //   };

// //   // Event handlers
// //   const handleVehicleNoChange = (event) => {
// //     setSelectedVehicleNo(event.target.value);
// //   };

// //   const handleDateRangeChange = (dateRange) => {
// //     setSelectedDateRange(dateRange);
// //   };

// //   // Render chart component
// //   const renderChart = () => {
// //     if (chartData) {
// //       return <Line data={chartData} />;
// //     } else {
// //       return <div>No data to display</div>;
// //     }
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <label>Select VehicleNo:</label>
// //         <select value={selectedVehicleNo} onChange={handleVehicleNoChange}>
// //           <option value="">Select VehicleNo</option>
// //           {vehicleNoOptions.map((vehicleNo) => (
// //             <option key={vehicleNo} value={vehicleNo}>
// //               {vehicleNo}
// //             </option>
// //           ))}
// //         </select>
// //       </div>
// //       <div>
// //         <label>Select Date Range:</label>
// //         {/* Date range picker component */}
// //         {/* Implement your date range picker component here */}
// //       </div>
// //       <button onClick={fetchData}>Fetch Data</button>
// //       {/* Render chart */}
// //       {renderChart()}
// //     </div>
// //   );
// // };

// // export default Gettest;




import React, { useState, useEffect } from 'react';
import { Select, DatePicker, Spin } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Option } = Select;
const { RangePicker } = DatePicker;

const Gettest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [minVoltage, setMinVoltage] = useState(null);
  const [maxVoltage, setMaxVoltage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = filteredData();
    if (filtered.length > 0) {
      const cellVoltages = filtered.flatMap(item => {
        return Array.from({ length: 16 }, (_, i) => item[`cell_voltage_${i + 1}`]);
      });
      setMinVoltage(Math.min(...cellVoltages));
      setMaxVoltage(Math.max(...cellVoltages));
    } else {
      setMinVoltage(null);
      setMaxVoltage(null);
    }
  }, [selectedVehicle, selectedDateRange, data]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data');
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleVehicleChange = (value) => {
    setSelectedVehicle(value);
  };

  const handleDateRangeChange = (dates) => {
    setSelectedDateRange(dates);
  };

  const filteredData = () => {
    let filtered = data;
    if (selectedVehicle) {
      filtered = filtered.filter(item => item.vehicleNo === selectedVehicle);
    }
    if (selectedDateRange) {
      filtered = filtered.filter(item => {
        const date = new Date(item.Doe);
        return date >= selectedDateRange[0] && date <= selectedDateRange[1];
      });
    }
    return filtered;
  };

  const renderCellVoltageCharts = () => {
    const filtered = filteredData(); // Retrieve filtered data only once
    return Array.from({ length: 16 }, (_, i) => i + 1).map(index => {
      return (
        <div key={index} style={{ marginBottom: '20px', width: '600px', height: '400px' }}>
          <h3>Cell Voltage {index}</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filtered} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Doe" />
              <YAxis domain={[minVoltage, maxVoltage]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={`cell_voltage_${index}`} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    });
  };

  return (
    <div style={{ backgroundColor: '#003b4d', color: 'black', padding: '20px' }}>
      <Spin spinning={loading}>
        <Select defaultValue="Select Vehicle" onChange={handleVehicleChange} style={{ marginBottom: '20px' }}>
          {Array.from(new Set(data.map(item => item.vehicleNo))).map(vehicleNo => (
            <Option key={vehicleNo} value={vehicleNo}>{vehicleNo}</Option>
          ))}
        </Select>
        <RangePicker onChange={handleDateRangeChange} style={{ marginBottom: '20px' }} />
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <h2>Cell Voltages for {selectedVehicle}</h2> {/* Display selected vehicle */}
          <ResponsiveContainer width="80%" height={400}>
            <LineChart data={filteredData()} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Doe" />
              <YAxis domain={[minVoltage, maxVoltage]} />
              <Tooltip />
              <Legend />
              {Array.from({ length: 16 }, (_, i) => i + 1).map(index => (
                <Line key={index} type="monotone" dataKey={`cell_voltage_${index}`} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} dot={false} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {renderCellVoltageCharts()}
        </div>
      </Spin>
    </div>
  );
};

export default Gettest;



