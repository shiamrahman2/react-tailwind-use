import React, { useState } from 'react';
import Link from '../Link/Link';
import { Menu, X } from 'lucide-react';


const navItems = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Portfolio", url: "/portfolio" },
  { id: 5, name: "Contact", url: "/contact" },
];



const NavBar = ({open,setOpen}) => {
   
    const links= navItems.map((route=><Link key={route.id} route={route} ></Link>))
    return (
        <nav className='flex justify-between mx-10 my-5'>
            <span className='flex'>
                <span className=''  onClick={()=>setOpen(!open)}>
                       {open ?
                   <X className='md:hidden'></X>:<Menu className='md:hidden'></Menu>
                 }
                </span>
                <ul className={`mt-1 md:hidden absolute duration-1000
                    ${open?'top-10':'-top-40'}
                    `}>
                     {
                         links
                     }
                </ul>
               
              <h2 className='ml-1'>My NavBar</h2>
            </span>
            <ul className=' hidden md:flex'>
                 {
                    links
                 }
            </ul>
            <button className='btn rounded-2xl bg-amber-200'>Sign In</button>
        </nav>
    );
};

export default NavBar;