
// import React from 'react';
// import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function Mainpage(){
//     return(
//         <div className='h-screen'>
// <div className='text-left'>
//             <h1 className='p-10 text-black'>
//                 Live Charge, Live Insight:</h1>
//                 <h1 className='p-10 text-black'>

//                  Your EV Reporting Hub</h1>


//                  </div>

// <div className='text-center'>
//             <Link to="/Maindash">
//                     <button className='bg-transparent mt-10'>Lets Dive In</button>

                    
//                 </Link>


//                 </div>
            
            


//         </div>  




//     );
// }


// import React from 'react';
// import { Link } from "react-router-dom";
// function Mainpage() {
//     const mainDivStyle = {
//         backgroundImage: `url('https://echargeup.com/wp-content/uploads/2023/05/Untitled-1.gif')`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'relative',
//     };

//     const overlayStyle = {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         backdropFilter: 'blur(8px)',
//     };

//     const contentDivStyle = {
//         color: 'white',
//         zIndex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//     };

//     const buttonStyle = {
//         marginTop: '10px',
//         zIndex: 1,
//         backgroundColor: 'transparent',
//         border: 'default',
//         color: 'white',
//         cursor: 'pointer',
//         transition: 'border-radius 0.3s, border-color 0.3s',
//         position: 'relative',
//         overflow: 'hidden',
//         animation: 'pulse 3s infinite',
//         fontSize: '20px',
//     };

//     const h1ContainerStyle = {
//         textAlign: 'left',
//         marginLeft: '20px',
//     };

//     const pulseKeyframes = `
//         @keyframes pulse {
//             0% {
//                 transform: scale(1);
//             }
//             50% {
//                 transform: scale(1.15);
//             }
//             100% {
//                 transform: scale(1);
//             }
//         }
//     `;

//     // Inject pulse animation keyframes into the DOM
//     const style = document.createElement('style');
//     style.innerHTML = pulseKeyframes;
//     document.head.appendChild(style);

//     return (
//         <div style={mainDivStyle}>
//             <div style={overlayStyle}></div>
//             <div style={contentDivStyle}>
//                 <div style={h1ContainerStyle}>
//                     <h1 className='p-10 text-white'>Live Charge, Live Insight:</h1>
//                     <h1 className='p-10 text-white'>Your EV Reporting Hub</h1>
//                 </div>
//                 <Link to="/Maindash">
//                     <button style={buttonStyle}>Let's Dive In</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Mainpage;

































import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import background from './backformain.jpg'



function Mainpage() {
    const [isHovered, setIsHovered] = useState(false);

    const mainDivStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        position: 'relative',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(1px)',
    };

    const contentDivStyle = {
        color: 'white',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const buttonStyle = {
        marginTop: '10px',
        justifyContent: 'center',
        zIndex: 1,
        backgroundColor: 'transparent',
        border: 'default',
        color: 'white',
        cursor: 'pointer',
        transition: 'border-radius 0.3s, border-color 0.3s, box-shadow 0.3s',
        position: 'relative',
        overflow: 'hidden',
        animation: 'pulse 2s infinite',
        fontSize: '20px',
        boxShadow: isHovered ? '0 0 10px 2px rgba(255, 255, 255, 0.8)' : '0 0 10px 2px rgba(255, 255, 255, 0)',
    };

    const h1ContainerStyle = {
        textAlign: 'left',
        marginLeft: '20px',
        marginTop: '-30px',
    };

    const pulseKeyframes = `
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.15);
            }
            100% {
                transform: scale(1);
            }
        }
    `;

    // Inject pulse animation keyframes into the DOM
    const style = document.createElement('style');
    style.innerHTML = pulseKeyframes;
    document.head.appendChild(style);

    return (
        <div style={mainDivStyle}>
            <div style={overlayStyle}></div>
            <div style={contentDivStyle}>
                <div style={h1ContainerStyle}>
                    <h1 className='p-1 text-white'>Live Charge, Live Insight :</h1>
                    <h1 className='p-1 text-white'>Your EV Reporting Hub</h1>
                </div>
                <Link to="/Maindash">
                    <button
                        style={buttonStyle} 
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Let's Dive In
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Mainpage;



















//h1 to the sides



// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Mainpage() {
//     const [isHovered, setIsHovered] = useState(false);

//     const mainDivStyle = {
//         backgroundImage: `url('https://echargeup.com/wp-content/uploads/2023/05/Untitled-1.gif')`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'contain',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'left',
//         alignItems: 'left',
//         position: 'relative',
//     };

//     const overlayStyle = {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         backdropFilter: 'blur(8px)',
//     };

//     const contentDivStyle = {
//         color: 'white',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//         position: 'relative',
//         zIndex: 1,
//         width: '100%',
//     };

//     const buttonStyle = {
//         marginTop: '10px',
//         // justifyContent: 'left',
//         backgroundColor: 'transparent',
//         border: 'default',
//         color: 'white',
//         cursor: 'pointer',
//         transition: 'border-radius 0.3s, border-color 0.3s, box-shadow 0.3s',
//         position: 'relative',
//         overflow: 'hidden',
//         animation: 'pulse 2s infinite',
//         fontSize: '20px',
//         boxShadow: isHovered ? '0 0 10px 2px rgba(255, 255, 255, 0.8)' : '0 0 10px 2px rgba(255, 255, 255, 0)',
//     };

//     const h1ContainerStyle = {
//         textAlign: 'left',
//         margin: '0',
//         width: '100%',
//         paddingLeft: '20px',
//     };

//     const pulseKeyframes = `
//         @keyframes pulse {
//             0% {
//                 transform: scale(1);
//             }
//             50% {
//                 transform: scale(1.15);
//             }
//             100% {
//                 transform: scale(1);
//             }
//         }
//     `;

//     // Inject pulse animation keyframes into the DOM
//     const style = document.createElement('style');
//     style.innerHTML = pulseKeyframes;
//     document.head.appendChild(style);

//     return (
//         <div style={mainDivStyle}>
//             <div style={overlayStyle}></div>
//             <div style={contentDivStyle}>
//                 <div style={h1ContainerStyle}>
//                     <h1 className='p-1 text-white'>Live Charge, Live Insight:</h1>
//                     <h1 className='p-1 text-white'>Your EV Reporting Hub</h1>
//                 </div>
//                 <Link to="/Maindash">
//                     <button
//                         style={buttonStyle} 
//                         onMouseEnter={() => setIsHovered(true)} 
//                         onMouseLeave={() => setIsHovered(false)}
//                     >
//                         Let's Dive In
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Mainpage;
