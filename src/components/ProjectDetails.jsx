import { IoMdArrowBack } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";

import { resume } from "../info";
import Card from "../ui/Card";
import Carousel from "./Carousel";

function ProjectDetails({ project, closeDetails }) {
    console.log(project)
    return (
        <Card className="fixed lg:mx-14 inset-0 z-50 flex flex-col rounded-2xl top-10 lg:top-4 lg:px-10 px-5 mx-1 gap-3 pb-5">
            <button onClick={()=>closeDetails(false)} className=" z-[51] self-start my-4 ml-4 capitalize text-xl flex items-center font-bold gap-3 top-10 left-0">
                <IoMdArrowBack className="text-2xl"/>
                back    
            </button>
            <div className=" overflow-auto flex flex-col gap-3 mt-5">
                {project.images.length > 0 ?
                    <Carousel slides={project.images} /> :
                    <img className="h-[300px] md:h-[400px] object-scale-down" src={project.thumbnailurl} alt={project.projectname} />
                }
                <h1 className='text-3xl font-bold capitalize mt-3 xl:leading-4'>{project.projectname}</h1>
                <p className="text-gray-500 text-base ">{project.type}</p>

                <h1 className='text-base dark:text-neutral-300 mt-4' >{project.projectdesc}</h1>
                <p className={` rounded-xl shadow-xl p-3 border max-w-sm  font-bold flex gap-4 items-center mt-3 
                    ${project.status.toLowerCase().includes('progress') ? "bg-yellow-500/30 text-yellow-600 border-yellow-400" : "border-green-400 bg-green-600/30 text-green-600"}`}>
                    <span className={`h-3 w-3 rounded-full 
                        ${project.status.toLowerCase().includes('progress') ? "bg-yellow-500" : "bg-green-600"} `}></span>
                    <span>{project.status}</span>
                </p>

                {project.credentials && 
                    <>
                    <h2 className="text-lg font-bold ">Username: {project.credentials.username}</h2>
                    <h2 className="text-lg font-bold leading-3">Password: {project.credentials.password}</h2>
                    </>
                }

                {project.livelink && 
                    
                    <a href={project.livelink} target="_blank" className="flex items-center gap-3 text-xl">
                        Live demo 
                        <CiShare1/>
                    </a>
                }

                <h2 className="text-2xl font-bold">Technologies</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.techstack.length > 0 &&
                        resume.skills.map((skill, index) => {
                            if (project.techstack.includes(skill.technology)) {
                                return (
                                    <div className="p-4 flex items-center border rounded-xl gap-3 dark:border-neutral-800 shadow-lg bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20" key={index}>
                                        <skill.icon className={`${skill.color} text-2xl`} />
                                        <p className="text-lg font-bold">{skill.technology}</p>
                                    </div>
                                );
                            }
                            return null;
                        })
                    }
                </div>
            </div>
        </Card>
    )
}

export default ProjectDetails;