import { certifications } from "../info";

function Certifications() {
    
    return (
        <div className="flex flex-col px-6 py-4 text-left whitespace-pre-line gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {certifications.length > 0 && 
                certifications.map((cert, index) => (
                    <div className=" flex flex-col shadow-lg border dark:border-neutral-800 bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20 p-5 rounded-2xl cursor-pointer hover:scale-105 transition-all ease-in-out duration-150" key={index}>
                        <a href={cert.link} target="_blank"  className="no-underline text-inherit hover:text-inherit">
                            <img src={cert.image} alt={cert.name} className="rounded-2xl" />
                            <h1 className='text-xl font-bold capitalize mt-3'>{ cert.name}</h1>
                        </a>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Certifications;