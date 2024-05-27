import React from "react";


function Reacthello(){
const height= window.innerHeight;
const width= window.innerWidth;



return(
<div className="App" > 
            <div>
            
                
               
                <iframe width= "1280"
                        height={height}
                        src= "http://localhost:65161/"
                        title="CELL VOLTAGE LIVE CHART" > 
                </iframe> 
            </div> 
        </div> 
);
} 




export default Reacthello;