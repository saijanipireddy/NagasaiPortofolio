import { FaRegEye } from "react-icons/fa";
import { portfolio } from "../info";
import { useEffect, useState } from "react";
import ProjectDetails from "../components/ProjectDetails";

function Portfolio() {

    const [showProject, setShowProject] = useState(false);
    const [projectDetails,setProjectDetails] = useState([])

    const handleShowProject = (isShow,project=[]) => {
        setShowProject(isShow)
        setProjectDetails(project);
    }

//     useEffect(() => {
//     if (showProject) {
//         document.body.style.overflow = 'hidden'; // Disable scroll on body
//     } else {
//         document.body.style.overflow = 'auto'; // Enable scroll on body
//     }

//     return () => {
//         document.body.style.overflow = 'auto'; // Cleanup
//     };
// }, [showProject]);


    return (
        <div className="relative flex flex-col px-6 py-4 text-left whitespace-pre-line gap-5 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.length > 0 &&
                    portfolio.map((project, index) => (
                        <div
                            className="relative group overflow-hidden flex flex-col border dark:border-neutral-800 shadow-lg bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20 p-5 rounded-3xl cursor-pointer"
                            key={index}
                        >
                            <img
                                className=" h-full transition-transform transform group-hover:scale-105 ease-in-out duration-150 rounded-xl"
                                src={project.thumbnailurl}
                                alt={project.projectname}
                            />

                            <h1 className='text-lg font-bold capitalize mt-3'>{project.projectname}</h1>
                            <p className="text-gray-500 text-sm">{project.type}</p>

                            <div className="absolute bottom-0 left-0 right-0 h-full p-4 bg-blue-500/20 flex justify-center items-center text-center transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                                <button onClick={()=>handleShowProject(true,project)} className="flex items-center gap-3 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm">
                                    <FaRegEye/>
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
            {   showProject &&
                <ProjectDetails project={projectDetails} closeDetails={handleShowProject} />
            }
        </div>
    );
}

export default Portfolio;
