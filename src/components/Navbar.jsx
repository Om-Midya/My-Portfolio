import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom";

import {styles} from '../styles.js'
import {navLinks} from '../constants/constants.js'
import {logo,menu,close} from '../assets'


const Navbar = () => {
  const [active,setActive] = useState('')
  const [toggle,setToggle] = useState(false)


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-8xl mx-auto">
        <Link
            to={"/"}
            className={"flex items-center gap-2"}
            onClick={()=>{
              setActive("")
              window.scroll(0,0)
        }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className={"text-white text-[18px] font-bold cursor-pointer flex"}>Archisman &nbsp;<span className={"sm:block hidden"}>| Student | Developer</span></p>
        </Link>
        <ul className={"list-none hidden sm:flex flex-row gap-10"}>
          {navLinks.map((link) => (
              <li
                key={link.id}
                className={`text-white text-[18px] font-bold cursor-pointer ${active === link.id ? 'border-b-2 border-white text-white' : 'text-secondary'} hover:font-bold text-[18px] cursor-pointer`}
                onClick={()=>{
                  setActive(link.id)
                  window.scroll(0,document.getElementById(link.id).offsetTop-100)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
          ))}
        </ul>
        <div className={"sm:hidden flex flex-1 justify-end items-center"}>
          <img src={toggle? close:menu} alt="menu" className="w-7 h-7 cursor-pointer" onClick={()=>{
            setToggle(!toggle)
          }}/>
          <div className={`${toggle? 'flex':'hidden'} flex-col gap-5 absolute top-16 right-0 black-gradient p-5 z-10 rounded-xl min-w-[140px]`}>
            <ul className={"list-none flex justify-end items-start flex-col gap-4"}>
              {navLinks.map((link) => (
                  <li
                      key={link.id}
                      className={`text-white text-[18px] font-poppins font-medium cursor-pointer ${active === link.id ? 'border-b-2 border-white text-white' : 'text-secondary'} hover:font-bold text-[18px] cursor-pointer`}
                      onClick={()=>{
                        setToggle(!toggle)
                        setActive(link.id)
                        window.scroll(0,document.getElementById(link.id).offsetTop-100)
                      }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
