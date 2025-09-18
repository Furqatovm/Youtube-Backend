import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='w-[15%] flex flex-col pr-[1rem] bg-tranparent'>
 <NavLink to={"/"} className={({isActive}) => isActive ? "bg-[#303030] py-[8px] px-[1.5rem] flex  gap-[1.5rem] items-center" : "bg-[#212121] py-[8px] px-[1.5rem]  flex  gap-[1.5rem] items-center"}>
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2139_592)">
<path d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2139_592">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
    <p className='text-white text-[14px]'>Home</p>
 </NavLink>

 <NavLink to={"/explore"} className={({isActive}) => isActive ? "bg-[#303030] py-[8px] px-[1.5rem] flex  gap-[1.5rem] items-center" : "bg-[#212121] py-[8px] px-[1.5rem]  flex  gap-[1.5rem] items-center"}>
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2139_600)">
<path d="M9.8 9.8L5.97 18.03L14.2 14.2L18.03 5.97L9.8 9.8ZM13.08 12.77C12.87 13.06 12.57 13.25 12.22 13.31C12.15 13.32 12.07 13.33 12 13.33C11.72 13.33 11.46 13.25 11.23 13.08C10.94 12.87 10.75 12.57 10.69 12.22C10.63 11.87 10.71 11.51 10.92 11.23C11.13 10.94 11.43 10.75 11.78 10.69C12.13 10.63 12.48 10.71 12.77 10.92C13.06 11.13 13.25 11.43 13.31 11.78C13.37 12.13 13.29 12.48 13.08 12.77ZM12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2139_600">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    <p className='text-white text-[14px]'>Explore</p>
 </NavLink>

 <div className="bg-[#212121] py-[8px] px-[1.5rem]  flex  gap-[1.5rem] items-center">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2139_608)">
<path d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2139_608">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

    <p className='text-white text-[14px]'>Subscriptions</p>
 </div>

<div className="bg-[#212121] py-[8px] px-[1.5rem]  flex  gap-[1.5rem] items-center border-t border-[#303030] mt-[10px]">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 7L17 10.5L11 14V7ZM18 20H4V6H3V21H18V20ZM21 18H6V3H21V18ZM7 17H20V4H7V17Z" fill="white"/>
</svg>
<p className='text-white text-[14px]'>Library</p>

</div>

<div className="bg-[#212121] py-[8px] px-[1.5rem]  flex  gap-[1.5rem] items-center">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2139_627)">
<path d="M14.97 16.95L9.99996 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM22 12C22 17.51 17.51 22 12 22C6.48996 22 1.99996 17.51 1.99996 12H2.99996C2.99996 16.96 7.03996 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C8.80996 3 5.91996 4.64 4.27996 7.38C4.16996 7.56 4.05996 7.75 3.96996 7.94C3.95996 7.96 3.94996 7.98 3.93996 8H7.99996V9H1.95996V3H2.95996V7.74C2.99996 7.65 3.02996 7.57 3.06996 7.49C3.17996 7.27 3.29996 7.07 3.41996 6.86C5.21996 3.86 8.50996 2 12 2C17.51 2 22 6.49 22 12Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2139_627">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

<p className='text-white text-[14px]'>History</p>

</div>

<div className="bg-[#212121] py-[8px] px-[1.5rem]  flex  gap-[1.5rem] items-center">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2139_643)">
<path d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2139_643">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


<p className='text-white text-[14px]'>Watch Later</p>

</div>


<div className="bg-[#212121] py-[8px] px-[1.5rem]  flex  gap-[1.5rem] items-center">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2139_643)">
<path d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2139_643">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


<p className='text-white text-[14px]'>Watch Later</p>

</div>


<div className="bg-[#212121] py-[8px] px-[1.5rem]  flex  gap-[1.5rem] items-center border-b border-[#303030] mb-[10px]">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2139_643)">
<path d="M14.97 16.95L10 13.87V7H12V12.76L16.03 15.25L14.97 16.95ZM12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2139_643">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>


<p className='text-white text-[14px]'>Watch Later</p>

</div>



    </div>
  )
}

export default Menu