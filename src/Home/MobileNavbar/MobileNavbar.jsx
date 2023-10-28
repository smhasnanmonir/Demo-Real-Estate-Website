import logo from "../../assets/Logo/whiteLogo.png"
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid'
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
        <div className=' bg-[#28282B] text-white py-4 px-7 w-full fixed z-50'>
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <Link to="/">
                <img className="w-[128px]" src={logo} alt="" srcset="" />
                </Link>
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
                <div className={`flex py-[7px] flex-col gap-1 ml-[8px] ${openAbout? 'block' : 'hidden'}`}>
                    <li>
                        <Link onClick={()=>setOpen(!open)} to="/aboutus/ourstory" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Our Story</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setOpen(!open)} to="/aboutus/missionVision" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Mission,Visson and Values</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setOpen(!open)} to="/aboutus/ourclients" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Corporate clients</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setOpen(!open)} to="/aboutus/ourteam" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Our Team</Link>
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
                        <Link onClick={()=>setOpen(!open)} to="/business" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">All Business</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setOpen(!open)} to="/business/details/Mak-Inno-Development-Ltd" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Mak Inno Development Ltd.</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setOpen(!open)} to={"/business/details/Dreams-Square-Development"} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Dreams Square Development Ltd.</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setOpen(!open)} to={"/business/details/Organic-Laboratories-Ltd"} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Organic Laboratories Ltd.</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setOpen(!open)} to={"/business/details/Universe-Group"} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Universe Group</Link>
                    </li>
                </div>
             <li onClick={()=>setOpenProperties(!openProperties)} className="py-[5px] cursor-pointer list-none ">
                <div className="flex justify-between gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
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
                        <Link to="/allproperties" onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">All Projects</Link>
                        </li>
                            <li>
                                <Link to={"/allproperties/ongoing"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Ongoing</Link>
                            </li>
                            <li>
                                <Link to={"/allproperties/upcoming"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Upcoming</Link>
                            </li>
                            <li>
                                <Link to={"/allproperties/completed"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Completed</Link>
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
                                <Link to={"/allproperties/residential"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Residential</Link>
                            </li>
                            <li>
                                <Link to={"/allproperties/commercial"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Commercial</Link>
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
                                <Link to={"/allproperties/dhanmondi"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Dhanmondi</Link>
                            </li>
                            <li>
                                <Link to={"/allproperties/keraniganj"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Keraniganj</Link>
                            </li>
                            <li>
                                <Link to={"/allproperties/mohammadpur"} onClick={()=>setOpen(!open)}>Mohammadpur</Link>
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
                                <Link to={"/media/blog"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Blog</Link>
                            </li>
                            <li>
                                <Link to={"/media/news"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">News</Link>
                            </li>
                            <li>
                                <Link to={"/media/events"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50">Event</Link>
                            </li>
                        </div>
            </ul>
            {/* button */}
           </div>
        </div>
    )
}
 
export { MobileNavbar };