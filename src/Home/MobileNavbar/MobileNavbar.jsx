import { useState } from "react";
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
const MobileNavbar = () => {
    let [open, setOpen] =useState(false);
    let [openAbout, setOpenAbout] =useState(false);
    let [openBusi, setOpenBusi] =useState(false);
    let [openProperties, setOpenProperties] =useState(false);
    let [openPhase, setOpenPhase] =useState(false);
    let [openType, setOpenType] =useState(false);
    let [openLocation, setOpenLocation] =useState(false);
    let [openMedia, setOpenMedia] =useState(false);



    return (
        <div className=''>
        <div className=' bg-[#28282B] text-white py-4 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <BookOpenIcon className='w-7 h-7 text-blue-600'/>
                <span>Universe Group</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`flex flex-col pb-8 absolute bg-[#28282B] text-white z-[10] left-0 w-full pl-9 pr-9 transition-all duration-300 ease-in ${open ? 'top-[63px] transition-all duration-300 ease-linear' : 'top-[-720px] transition-all duration-300 ease-linear'}`}>
            
             <Link className="py-[5px] inline-block border-b-[1px] border-blue-500" onClick={()=>setOpen(!open)} to="/">Home</Link>
             <li onClick={()=>setOpenAbout(!openAbout)} className="py-[7px] cursor-pointer list-none ">
                <div className="flex justify-between gap-2 border-b-[1px] border-cyan-100 border-opacity-50 py-[7px]">
                <h1 className="">About us</h1>
                {
                    openAbout? <ArrowUpIcon className="w-[12px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[12px] mt-[3px]"></ArrowDownIcon>
                }
                </div>
             </li>
                <div className={`flex flex-col gap-1 ml-[8px] ${openAbout? 'block' : 'hidden'}`}>
                    <li>
                        <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Our Story</Link>
                    </li>
                    <li>
                        <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Mission,Visson and Values</Link>
                    </li>
                    <li>
                        <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Corporate clients</Link>
                    </li>
                    <li>
                        <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Our Team</Link>
                    </li>
                </div>
             <li onClick={()=>setOpenBusi(!openBusi)} className="py-[7px] cursor-pointer list-none ">
                <div className="flex justify-between gap-2  py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                <h1 className="">Business</h1>
                {
                    openBusi? <ArrowUpIcon className="w-[12px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[12px] mt-[3px]"></ArrowDownIcon>
                }
                </div>
             
             </li>
             <div className={`flex flex-col gap-1 ml-[8px]  ${openBusi? 'block transition-all duration-300 ease-linear' : 'transition-all duration-300 ease-linear hidden'}`}>
                    <li>
                        <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">All Business</Link>
                    </li>
                    <li>
                        <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Mak Inno Development Ltd.</Link>
                    </li>
                    <li>
                        <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Dreams Square Development Ltd.</Link>
                    </li>
                    <li>
                        <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Organic Laboratories Ltd.</Link>
                    </li>
                    <li>
                        <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Universe Group</Link>
                    </li>
                </div>
             <li onClick={()=>setOpenProperties(!openProperties)} className="py-[5px] cursor-pointer list-none ">
                <div className="flex gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                <h1 className="">Properties</h1>
                {
                    openProperties? <ArrowUpIcon className="w-[12px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[12px] mt-[3px]"></ArrowDownIcon>
                }                </div>
             
             </li>
             <div className={`flex flex-col gap-1 ml-[8px]  ${openProperties? 'block transition-all duration-300 ease-linear' : 'transition-all duration-300 ease-linear hidden'}`}>
                    <li className="cursor-pointer" onClick={()=>setOpenPhase(!openPhase)}>
                        <div className="flex gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                            <h1 className="">Phase</h1>
                            {
                    openPhase? <ArrowUpIcon className="w-[12px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[12px] mt-[3px]"></ArrowDownIcon>
                }
                        </div>
               
                    </li>
                    <div className={`ml-3 ${openPhase? 'block': 'hidden'}`}>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Ongoing</Link>
                            </li>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Upcoming</Link>
                            </li>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Completed</Link>
                            </li>
                        </div>
                    <li className="cursor-pointer" onClick={()=>setOpenType(!openType)}>
                        <div className="flex gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                            <h1 className="">Type</h1>
                            {
                    openType? <ArrowUpIcon className="w-[12px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[12px] mt-[3px]"></ArrowDownIcon>
                }
                        </div>
               
                    </li>
                    <div className={`ml-3 ${openType? 'block': 'hidden'}`}>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Residential</Link>
                            </li>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Commercial</Link>
                            </li>
                        </div>
                    <li className="cursor-pointer" onClick={()=>setOpenLocation(!openLocation)}>
                        <div className="flex gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                            <h1 className="">Location</h1>
                            {
                    openLocation? <ArrowUpIcon className="w-[12px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[12px] mt-[3px]"></ArrowDownIcon>
                }
                        </div>
               
                    </li>
                        <div className={`ml-3 ${openLocation? 'block': 'hidden'}`}>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Dhanmondi</Link>
                            </li>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Keraniganj</Link>
                            </li>
                            <li>
                                <Link>Mohammadpur</Link>
                            </li>
                        </div>
                </div>
                <li className="cursor-pointer" onClick={()=>setOpenMedia(!openMedia)}>
                <div className="flex justify-between gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                <h1 className="">Media</h1>
                {
                    openMedia? <ArrowUpIcon className="w-[12px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[12px] mt-[3px]"></ArrowDownIcon>
                }
                </div>
                </li>
                <div className={`ml-3 ${openMedia? 'block': 'hidden'}`}>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Blog</Link>
                            </li>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">News</Link>
                            </li>
                            <li>
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Event</Link>
                            </li>
                        </div>
            </ul>
            {/* button */}
           </div>
        </div>
    )
}
 
export { MobileNavbar };