import {  Metric, Text } from '@tremor/react';
import { Card, DonutChart, List, ListItem } from '@tremor/react';
import echargelogo from './chargeuplogo.jpg';
import backgroundimage from './backgroundimage.png';
import React, {useState, useEffect} from 'react';
import { Axios } from 'axios';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { TextInput, Button } from '@tremor/react';
import { NavLink } from "react-router-dom";




function CustomToolbar() {
  return (
    <div>

          <div className="flex justify-end">
          <NavLink to="/rolemangement" className="block p-4 text-white hover:underline">
            <Button variant="primary">Add New User</Button>
          </NavLink>
          </div>



    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>



    </div>

  );
}
  
   function Userpage() {

    const rows = [
      { id: 1, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 2, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 3, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 4, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 5, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 6, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 7, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 8, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 9, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 10, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },
      { id: 11, col1: 'data1', col2: 'data2', col3: 'data3', col4: 'data4' },

      
      
    ];
    


    const columns = [
      { field: 'id', headerName: 'id', width: 150},
      { field: 'col1', headerName: 'Column 1', width: 150, editable: true},
      { field: 'col2', headerName: 'Column 2', width: 150 },
      { field: 'col3', headerName: 'Column 3', width: 150 },
      { field: 'col4', headerName: 'Column 4', width: 150 },
    ];
    
    return (
      <div className="h-full pb-3.5">

           <p>test tests</p>

           <div className="bg-white " style={{ height: 500, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} slots={{
              toolbar: CustomToolbar,
            }} />
          </div>

      </div>
    );
  }

  



export default Userpage;