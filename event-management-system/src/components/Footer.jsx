import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 py-12 bg-[#0D162E] text-neutral-200 border-t border-neutral-400">
        <div className="flex w-full flex-row px-20  items-start uppercase gap-4 justify-between container">
            <div className="flex flex-col  items-start gap-2">
                <a href="" className="font-extrabold gap-2 capitalize inline-flex text-xl items-center ">
                    <img src="../../public/assets/logomark.ico" alt="Logo" className='w-8'/>
                    <span className='block'>SpotLight</span>
                </a>
            </div>
            <ul className="flex flex-col items-start gap-1">
                <a href="/" className="font-light text-sm">Explore</a>
                <a href="/" className="font-light text-sm">Dashboard</a>
            </ul>
        </div>
        <hr className="bg-neutral-100 border border-neutral-100 opacity-25" />
        <div className="">
            <p className="text-neutral-300 text-xs md:text-sm text-center">
                © SpotLight 
                 2025 
                | All rights reserved | 
                <a href="https://github.com/tushargtailor " className="hover:text-blue-500 hover:underline"> Tushar Tailor</a>
            </p>
        </div>
    </div>
  )
}

export default Footer