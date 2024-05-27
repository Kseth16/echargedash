import {React, useState} from "react";
import {Card, Switch, TextInput, Button } from '@tremor/react';





function Addrole(){
    const roledata={
        rolename: "",
        graph1acess: false,
        graph2acess: false,
        graph3acess: false
    }

    const[rolename, setrolename]= useState("");
    const[graph1value, setgraphvalue]= useState(false);
    const[graph2value, setgraph2value]= useState(false);
    const[graph3value, setgraph3value]= useState(false);


    const handlerolenamechange= (event)=>{
        setrolename(event.target.value);
    }

    const handlegraph1InputChange= (event)=>{
        setgraphvalue(!graph1value);
    }

    const handlegraph2InputChange= (event)=>{
        setgraph2value(!graph2value);
    }
    const handlegraph3InputChange= (event)=>{
        setgraph3value(!graph3value);
    }


    const handleButtonClick= ()=>{
        roledata.rolename=rolename;
        roledata.graph1acess=graph1value;
        roledata.graph2acess=graph2value;
        roledata.graph3acess=graph3value;


        console.log(roledata);
                

    }


    

    return(
        <div className="pb-10">

            <Card
            className="mx-auto max-w-xs text-black"
            decoration="top"
            decorationColor="indigo"
            

            >

            <h1 className="text-black pb-10">
                Add Role
            </h1>

            <div className="items-center justify-center gap-2">

            <p>Role Name</p>
            <TextInput className="mx-auto max-w-xs" placeholder="please enter role name" onChange={handlerolenamechange} />



            <p>Graph 1 acess</p>
            <Switch  id="r1" onChange={handlegraph1InputChange}/>

            <p>Graph 2 acess</p>
            <Switch id="r1"  onChange={handlegraph2InputChange} />

            <p>Graph 3 acess</p>
            <Switch id="r1" onChange={handlegraph3InputChange}/>


            <div className="items-center justify-center gap-2 mt-10">
            <Button onClick={handleButtonClick} variant="primary">Add Role</Button>
            </div>


            </div>


            </Card>
            </div>
        
    );
}

export default Addrole;