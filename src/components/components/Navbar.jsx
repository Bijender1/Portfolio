// import React,{useEffect,useState} from 'react';
import{ Link } from 'react-router-dom';
// import {styles} from'../styles.js';
// import{navLinks} from'../constants';
// import {logo,menu,close} from'../assets/assets';
const Navbar = () => {
  // const[ active,setActive]=useState(' ');
  return (
    <nav 
     className={'${styles.paddingX}w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}>
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
      to="/"
      className="flex items-centeer gap-2"
      onClick={()=>{
        // setActive("");
        window.scrollTo(0,0);
      }}>
        {/* <img src={logo}alt="logo" className="w-9 h-9 object-contains"/> */}
        <p className="text-white text-[18px] font-bold cursor-ppointer">Bijender Kumar</p>
      </Link>
      </div>
      </nav>

      )
}

export default Navbar