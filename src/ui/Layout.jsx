import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoBriefcaseOutline, IoNewspaperOutline } from "react-icons/io5";
import { TbCertificate } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import Profile from '../components/Profile';
import { NavLink, Outlet } from 'react-router-dom';
import Card from './Card';

function Layout() {
  const location = useLocation();
  const pageName = location.pathname.replace('/', '') === "" ? 'About' : location.pathname.replace('/', '');
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');


  const handleIsDark = () => {
    setIsDark(!isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  // const handleKnowMore = () => {
  //   clearInterval(interval)
  //   setIntroVisible(false);
  // };

    // useEffect(() => {
    //   let index = 0; // To track current position
    //   let typing = true; // To track whether it's typing or backspacing
    //   const textEl = document.getElementById("welcome-text");
    //   const interval = setInterval(async () => {
    //     if (index < greeting.length - 1 && typing) {
    //       textEl.textContent += greeting.charAt(index);
    //       index++
    //       typing = true;
    //     } else {
    //       textEl.textContent = textEl.textContent.slice(0, -1)
    //       index--;
    //       typing = false;
    //     }

    //     if (index === greeting.length - 1) {
    //       await new Promise(resolve => setTimeout(resolve, 1000));
    //     }

    //     if (index === 0) {
    //       await new Promise(resolve => setTimeout(resolve, 1000));
    //       typing = true;
    //     }
    //   }, 150);
    //   setVal(interval)
    //   return () => clearInterval(interval);
    // }, []);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <>
      {/* Dark/Light mode toggle button */}
      <div className="self-end sticky top-0 lg:fixed mt-2 mr-2 z-[100]">
        <button 
          onClick={handleIsDark} 
          className={`transition-all duration-300 ease-in-out p-5 rounded-full text-xl relative flex items-center justify-center 
            ${isDark ? 'bg-neutral-400/50 text-white' : 'bg-yellow-200/80 text-black'}`}
        >
          <span className={`absolute transition-transform duration-300 flex items-center justify-center  ${isDark ? 'translate-y-0' : '-translate-y-2'}`}>
            {isDark ? <MdOutlineDarkMode /> : <MdOutlineLightMode className="mt-4" />}
          </span>
        </button>
      </div>

      {/* Layout content */}
      <div className=' sm:w-[80%] md:w-[90%] xl:flex-row w-full flex flex-col justify-between px-1 overflow-auto gap-5 py-4'>
        <Profile />
        <Card className="relative duration-100 transition-all ease-out xl:w-[calc(100%-22rem)] flex flex-col rounded-2xl flex-grow min-h-[calc(80vh-4rem)] mb-28 lg:mb-0" >
          <div className="flex justify-between">
            <div className="pl-5 mt-5">
              <h1 className="text-2xl font-bold capitalize" >{ pageName}</h1>
              <div className="dark:bg-white bg-neutral-600 h-1 md:h-1.5 w-6 md:w-11 rounded-2xl mt-1" ></div>
            </div>
            <div className='!text-sm hidden lg:flex dark:bg-neutral-800 bg-zinc-400/30 py-3 px-5 rounded-bl-2xl rounded-tr-3xl gap-4 xl:gap-8 flex-wrap' >
              <NavLink to="/" className={({ isActive }) => isActive ? 'dark:text-blue-500 text-blue-600 flex gap-1 items-center ' : 'text-inherit' + ` flex gap-1 items-center `}>
                <IoMdInformationCircleOutline />
                <span >About</span>
              </NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'dark:text-blue-500 text-blue-600 flex gap-1 items-center' : 'text-inherit' + ` flex gap-1 items-center`}>
                <IoBriefcaseOutline />
                <span>Portfolio</span>
              </NavLink>
              <NavLink to="/resume" className={({ isActive }) => isActive ? 'dark:text-blue-500 text-blue-600 flex gap-1 items-center' : 'text-inherit' + ` flex gap-1 items-center`}>
                <IoNewspaperOutline />
                <span>Resume</span>
              </NavLink>
              <NavLink to="/certifications" className={({ isActive }) => isActive ? 'dark:text-blue-500 text-blue-600 flex gap-1 items-center' : 'text-inherit' + ` flex gap-1 items-center`}>
                <TbCertificate />
                <span>Certifications</span>
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'dark:text-blue-500 text-blue-600 flex gap-1 items-center' : 'text-inherit' + ` flex gap-1 items-center`}>
                <RiCustomerService2Fill />
                <span>Contact</span>
              </NavLink>
            </div>
          </div>
          <div className="lg:overflow-auto">
            <Outlet />
          </div>
        </Card>

        {/* Mobile Bottom Navbar */}
        <div className=' lg:hidden border-t-1 border-gray-400 fixed w-full z-40 m-[-10] bottom-0 left-0 dark:bg-neutral-900/30 bg-zinc-500/30 backdrop-blur-sm shadow-lg py-3 px-5 rounded-tl-2xl rounded-tr-2xl flex gap-8 justify-around flex-wrap sm:flex-nowrap ' >
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 flex gap-1 items-center' : 'text-inherit' + ` flex gap-1 items-center`}>
            <IoMdInformationCircleOutline />
            <span>About</span>
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'text-blue-600 flex gap-1 items-center' : 'text-inherit' + ` flex gap-1 items-center`}>
            <IoBriefcaseOutline />
            <span>Portfolio</span>
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'text-blue-600 flex gap-1 items-center' : 'text-inherit' + ` flex gap-1 items-center`}>
            <IoNewspaperOutline />
            <span>Resume</span>
          </NavLink>
          <NavLink to="/certifications" className={({ isActive }) => isActive ? 'text-blue-600 flex gap-1 items-center' : 'text-inherit' + ` flex gap-1 items-center`}>
            <TbCertificate />
            <span>Certifications</span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-600 flex gap-1 items-center' : 'text-inherit' + ` flex gap-1 items-center`}>
            <RiCustomerService2Fill />
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Layout;
