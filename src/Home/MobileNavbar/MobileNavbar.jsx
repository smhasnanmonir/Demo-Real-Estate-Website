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
            <ul className={`pt-[15px] flex flex-col pb-8 absolute bg-[#28282B] text-white z-[10] left-0 w-full pl-9 pr-9 transition-all duration-300 ease-in ${open ? 'top-[63px] transition-all duration-300 ease-linear' : 'top-[-720px] transition-all duration-300 ease-linear'}`}>
            
             <Link className="py-[7px] inline-block border-b-[1px] border-cyan-100 border-opacity-50 text-xl" onClick={()=>setOpen(!open)} to="/">Home</Link>
             <li onClick={()=>setOpenAbout(!openAbout)} className="py-[7px] cursor-pointer list-none ">
                <div className="flex justify-between gap-2 border-b-[1px] border-cyan-100 border-opacity-50 py-[7px]">
                <h1 className="text-xl">About us</h1>
                {
                    openAbout? <ArrowUpIcon className="w-[15px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[15px] mt-[3px]"></ArrowDownIcon>
                }
                </div>
             </li>
                <div className={` flex py-[7px] flex-col gap-1 ml-[8px] ${openAbout? 'block' : 'hidden'}`}>
                  
                        <Link onClick={()=>setOpen(!open)} to="/aboutus/ourstory" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Our Story</Link>
                   
                 
                        <Link onClick={()=>setOpen(!open)} to="/aboutus/missionVision" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Mission,Visson and Values</Link>
                   
                   
                        <Link onClick={()=>setOpen(!open)} to="/aboutus/ourclients" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Corporate clients</Link>
                 
               
                        <Link onClick={()=>setOpen(!open)} to="/aboutus/ourteam" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Our Team</Link>
                 
                </div>
             <li onClick={()=>setOpenBusi(!openBusi)} className="py-[7px] cursor-pointer list-none ">
                <div className="flex justify-between gap-2 border-b-[1px] border-cyan-100 border-opacity-50">
                <h1 className="text-xl">Business</h1>
                {
                    openBusi? <ArrowUpIcon className="w-[15px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[15px] mt-[3px]"></ArrowDownIcon>
                }
                </div>
             
             </li>
             <div className={`flex flex-col gap-1 ml-[8px] transition-all duration-300 ease-linear  ${openBusi? 'block transition-all duration-300 ease-linear' : 'transition-all duration-300 ease-linear hidden'}`}>
                  
                        <Link onClick={()=>setOpen(!open)} to="/business" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">All Business</Link>
                  
                  
                        <Link onClick={()=>setOpen(!open)} to="/business/details/Mak-Inno-Development-Ltd" className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Mak Inno Development Ltd.</Link>
                 
                 
                        <Link onClick={()=>setOpen(!open)} to={"/business/details/Dreams-Square-Development"} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Dreams Square Development Ltd.</Link>
                
                
                        <Link onClick={()=>setOpen(!open)} to={"/business/details/Organic-Laboratories-Ltd"} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Organic Laboratories Ltd.</Link>
                 
                  
                        <Link onClick={()=>setOpen(!open)} to={"/business/details/Universe-Group"} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Universe Group</Link>
                 
                </div>
             <li onClick={()=>setOpenProperties(!openProperties)} className=" cursor-pointer list-none ">
                <div className="flex justify-between gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                <h1 className="text-xl">Properties</h1>
                {
                    openProperties? <ArrowUpIcon className="w-[15px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[15px] mt-[3px]"></ArrowDownIcon>
                }                </div>
             
             </li>
             <div className={`flex flex-col gap-1 ml-[8px]  ${openProperties? 'block transition-all duration-300 ease-linear' : 'transition-all duration-300 ease-linear hidden'}`}>
                    <li className="cursor-pointer list-none" onClick={()=>setOpenPhase(!openPhase)}>
                        <div className="flex gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                            <h1 className="text-xl">Phase</h1>
                            {
                    openPhase? <ArrowUpIcon className="w-[15px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[15px] mt-[3px]"></ArrowDownIcon>
                }
                        </div>
               
                    </li>
                    <div className={`ml-3 ${openPhase? 'block': 'hidden'}`}>
                       
                        <Link to="/allproperties" onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">All Projects</Link>
                  
                           
                                <Link to={"/allproperties/ongoing"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Ongoing</Link>
                
                                <Link to={"/allproperties/upcoming"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Upcoming</Link>
                          
                          
                                <Link to={"/allproperties/completed"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Completed</Link>
                         
                        </div>
                    <li className="cursor-pointer list-none" onClick={()=>setOpenType(!openType)}>
                        <div className="flex gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                            <h1 className="text-xl">Type</h1>
                            {
                    openType? <ArrowUpIcon className="w-[15px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[15px] mt-[3px]"></ArrowDownIcon>
                }
                        </div>
               
                    </li>
                    <div className={`ml-3 ${openType? 'block': 'hidden'}`}>
                        
                                <Link to={"/allproperties/residential"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Residential</Link>
                        
                         
                                <Link to={"/allproperties/commercial"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Commercial</Link>
                         
                        </div>
                    <li className="cursor-pointer list-none" onClick={()=>setOpenLocation(!openLocation)}>
                        <div className="flex gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                            <h1 className="text-xl">Location</h1>
                            {
                    openLocation? <ArrowUpIcon className="w-[15px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[15px] mt-[3px]"></ArrowDownIcon>
                }
                        </div>
               
                    </li>
                        <div className={`ml-3 ${openLocation? 'block': 'hidden'}`}>
                       
                                <Link to={"/allproperties/dhanmondi"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Dhanmondi</Link>
                    
                         
                                <Link to={"/allproperties/keraniganj"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Keraniganj</Link>
                     
                        
                                <Link className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl" to={"/allproperties/mohammadpur"} onClick={()=>setOpen(!open)}>Mohammadpur</Link>
                       
                        </div>
                </div>
                <li className="cursor-pointer list-none" onClick={()=>setOpenMedia(!openMedia)}>
                <div className="flex justify-between gap-2 py-[7px] border-b-[1px] border-cyan-100 border-opacity-50">
                <h1 className="text-xl">Media</h1>
                {
                    openMedia? <ArrowUpIcon className="w-[15px] mt-[3px]"></ArrowUpIcon> : <ArrowDownIcon className="w-[15px] mt-[3px]"></ArrowDownIcon>
                }
                </div>
                </li>
                <div className={`ml-3 ${openMedia? 'block': 'hidden'}`}>
                        
                                <Link to={"/media/blog"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Blog</Link>
                          
                          
                                <Link to={"/media/news"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">News</Link>
                          
                                <Link to={"/media/events"} onClick={()=>setOpen(!open)} className="py-[7px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Event</Link>
                        
                        </div>
             <Link to={"/service"} onClick={()=>setOpen(!open)} className="py-[9px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Service</Link>
             <Link to={"/career"} onClick={()=>setOpen(!open)} className="py-[9px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Career</Link>
             <Link to={"/contact"} onClick={()=>setOpen(!open)} className="py-[9px] block border-b-[1px] border-cyan-100 border-opacity-50 text-xl">Contact</Link>
            </ul>
           </div>
        </div>
    )
}
 
export { MobileNavbar };