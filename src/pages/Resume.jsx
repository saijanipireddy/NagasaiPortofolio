import { IoBookOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { resume } from "../info";

function Resume() {
    return (
        <div className="flex flex-col px-6 py-4 text-left whitespace-pre-line gap-5">

            {resume.education.length > 0 &&
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <div className="flex flex-col ml-[-8px] items-center self-start">
                                <span className="text-xl shadow-lg bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20 p-3 rounded-lg">
                                    <IoBookOutline />
                                </span>
                                <span className="h-5 w-1 bg-gray-300"></span>
                            </div>
                            <h2 className="text-2xl font-bold ml-6">Education</h2>
                        </div>
                        <a href="https://drive.google.com/file/d/1ht7ueH4o83r6MuZYSRu-R1QjtDBhqkaM/view?usp=sharing" className="flex items-center gap-3" download>
                            <HiOutlineFolderDownload className="text-3xl md:text-base" />
                            <span className="hidden md:block">Download Resume</span>
                        </a>
                    </div>
                    {
                        resume.education.map((education, index) => (
                            // <div className="relative flex flex-col items-start">
                            <div className="relative flex items-start w-full" key={index}>
                                <div className="flex flex-col items-center">
                                    <div className="border-[8px] rounded-full border-blue-500/20 opacity-75">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    </div>
                                    {index !== resume.education.length - 1 && <div className="h-20 w-1 bg-gray-300"></div>}
                                </div>
                                <div className="ml-6 w-full">
                                    <div className="flex justify-between w-full">
                                        <h3 className="font-bold">{education.collegename}</h3>
                                        <p className="text-gray-600 font-bold">{education.duration}</p>
                                    </div>
                                    <p className="text-gray-600">{education.branch}</p>
                                    <p className="text-gray-600">{education.location}</p>
                                </div>
                            </div>
                            // </div>
                        ))}
                </div>
            }

            {resume.experience.length > 0 &&
                <div className="flex flex-col w-full">
                    <div className="flex">
                        <div className="flex flex-col ml-[-8px] items-center self-start">
                            <span className="text-xl shadow-lg bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20 p-3 rounded-lg">
                                <MdWorkOutline />
                            </span>
                            <span className="h-5 w-1 bg-gray-300"></span>
                        </div>
                        <h2 className="text-2xl font-bold ml-6">Work Experience</h2>
                    </div>
                    {
                        resume.experience.map((experience, index) => (
                            // <div className="relative flex flex-col items-start">
                            <div className="relative flex items-start w-full" key={index}>
                                <div className="flex flex-col items-center">
                                    <div className="border-[8px] rounded-full border-blue-500/20 opacity-75">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    </div>
                                    {index !== resume.experience.length - 1 && <div className="h-20 w-1 bg-gray-300"></div>}
                                </div>
                                <div className="ml-6 w-full">
                                    <div className="flex justify-between w-full gap-5 sm:gap-0">
                                        <h3 className="font-bold">{experience.company}</h3>
                                        <p className="text-gray-600 font-bold">{experience.duration}</p>
                                    </div>
                                    <p className="text-gray-600">{experience.role}</p>
                                    <p className="text-gray-600">{experience.location}</p>
                                </div>
                            </div>
                            // </div>
                        ))}
                </div>
            }
            <div className="flex items-center">
                <span className="text-xl shadow-lg bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20 p-3 rounded-lg">
                    <GiSkills />
                </span>
                <h2 className="text-2xl font-bold ml-6">Skills</h2>
            </div>

            <div className="flex flex-col p-5 w-full bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20 rounded-xl shadow-lg gap-5">
                {resume.skills.length > 0 &&
                    resume.skills.sort((a, b) => b.percentage - a.percentage).map((skill, index) => (
                        <div className="flex flex-col gap-3" key={index}>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-3">
                                    <skill.icon className={`text-xl ${skill.color}`}/>
                                    <h1 className="text-base font-bold">{ skill.technology}</h1>
                                </div>
                                <p className="text-gray-600 font-bold">{skill.percentage}%</p>
                            </div>
                            <div className="w-full rounded-lg h-2 bg-neutral-300 dark:bg-neutral-500/20" >
                                <div style={{ width: skill.percentage+'%' }} className="w-full rounded-lg h-2 bg-blue-500/90" >

                                </div>
                            </div>       
                        </div>
                    ))

                }
            </div>
        </div>
    );
}

export default Resume;
