import React from 'react'
import Mynavbar from './Mynavbar';
import "../styles/global.css";
import Footer from './Footer';

export default function Mylayout({children}) {
  return (
    <div className='Mymain-layout'>
        <Mynavbar/>
        <div className='content'>
            {children}
        </div>
        <Footer/>
    </div>
  );
}
