import { FaRegEnvelope, FaInstagram, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationArrow1,CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import Card from "../ui/Card";
import { useState } from "react";

function Profile() {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Card className="xl:w-80 w-full min-h-[fit-content] flex-grow overflow-y-auto px-6 flex flex-col gap-3 xl:h-auto xl:py-4 pb-2 xl:pb-8 transition-all duration-300 ease-out">
      <div className="bg-neutral-600/20 dark:bg-neutral-800 self-end px-5 py-1 block xl:hidden mr-[-1.5rem] shadow-md text-black dark:text-white rounded-bl-xl custom-gradient-hover">
        <button onClick={handleShowInfo} type="button" className="self-end flex items-center gap-3">
          <p className="hidden md:block">Show info</p>
          <span className="block lg:hidden text-base">
            { showInfo ? <FaAngleUp />: <FaAngleDown />}
          </span>
        </button>
      </div>

      <div className="flex self-start xl:flex-col flex-row sm:justify-start justify-between items-center sm:px-10 gap-5 w-full">
        <div className="xl:mt-4 flex items-center justify-center border dark:border-neutral-800 transition-all duration-200 bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20 rounded-2xl shadow-lg">
          <img
            className="w-28 md:w-32 h-28 md:h-32"
            src="https://res.cloudinary.com/dk9buau62/image/upload/v1681579243/WhatsApp_Image_2023-04-15_at_10.22.33_PM_dlmdsz.jpg"
            alt="profileImg"
          />
        </div>
        <div className="grid gap-3 md:gap-5">
          <h1 className="md:text-2xl text-base">Naga sai kumar Janipireddy</h1>
          <div className="dark:bg-neutral-800 bg-zinc-200 rounded-md py-2 px-4">
            <p className="text-sm">Full stack developer</p>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out max-xl:overflow-hidden flex flex-col xl:max-h-full lg:opacity-100 gap-3 pb-4 ${
          showInfo ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="dark:bg-neutral-800 bg-zinc-200 h-0.5 my-5"></div>
        <div className="flex items-center gap-5 dark:bg-neutral-800 bg-zinc-200 rounded-md px-3 py-3 shadow-md">
          <FaRegEnvelope size="20px" />
          <p>saijanipireddy@gmail.com</p>
        </div>
        <div className="flex items-center gap-5 dark:bg-neutral-800 bg-zinc-200  rounded-md px-3 py-3 shadow-md">
          <MdOutlinePhone size="20px" />
          <p>+91 9666592066</p>
        </div>
        <div className="flex items-center gap-5 dark:bg-neutral-800 bg-zinc-200  rounded-md px-3 py-3 shadow-md">
          <CiLocationArrow1 size="20px" />
          <p>Bhimavaram,Andrapradesh.</p>
        </div>
        <div className="flex self-center gap-4">
            <div className="flex items-center justify-center gap-5 hover:dark:!bg-zinc-200 hover:bg-neutral-800 hover:text-white hover:dark:!text-black  dark:bg-neutral-800 bg-zinc-200 border border-transparent hover:border-neutral-900 w-10 h-10 rounded-full shadow-lg">
                <a className="no-underline text-inherit hover:text-inherit" href="https://github.com/saijanipireddy" target="_blank" rel="noopener noreferrer">
                    <LuGithub size="20px" />
                </a>
            </div>
            {/* <div className="flex items-center justify-center gap-5 hover:dark:!bg-zinc-200 hover:bg-neutral-800 hover:text-white hover:dark:!text-black dark:bg-neutral-800 bg-zinc-200 border border-transparent hover:border-yellow-500 w-10 h-10 rounded-full shadow-lg">
                <a className=" no-underline text-inherit hover:text-inherit" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size="20px" />
                </a>
            </div> */}
          
          <div className="flex items-center justify-center gap-5 hover:dark:!bg-zinc-200 hover:bg-neutral-800 hover:text-white hover:dark:!text-black dark:bg-neutral-800 bg-zinc-200 border border-transparent hover:border-yellow-500 w-10 h-10 rounded-full shadow-lg">
                <a className=" no-underline text-inherit hover:text-inherit" href="https://www.linkedin.com/in/naga-sai-kumar-janipireddy/" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin size="20px" />
                </a>
            </div>
        </div>
      </div>
    </Card>
  );
}

export default Profile;
