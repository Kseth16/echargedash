import React, {useState} from "react";
import { Link} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu'


function Sidebar(){
    return (
      <Menu right>
        <Link to="/" className="block p-4 text-white hover:underline">Home</Link>
        <Link to="/userpage" className="block p-4 text-white hover:underline">User Page</Link>
        <Link to="/rolemangement" className="block p-4 text-white hover:underline">Role Mangement</Link>
      </Menu>



    );
}

export default Sidebar;