import { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { about } from '../info';

function About() {
        
    const [showTestinomial, setShowTestinomial] = useState('');
        
        return (
            <div className="flex px-6 py-4 text-left whitespace-pre-line flex-col">
                <h1 className='text-base dark:text-neutral-300' >{about.desc}</h1>
                <h1 className='text-xl font-bold capitalize mt-3'>service&apos;s offering</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-2'>
                    {about.services.map((service,index) => (
                        <div key={`service-${index}`} className=' scale-95 hover:scale-100 border dark:border-neutral-800 transition-all duration-200 px-3 flex flex-col bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20 items-center w-full gap-3 text-center shadow-lg rounded-xl py-3' >
                            <service.icon className='text-[#ffd900aa] text-[50px]' />
                            <h2 className='font-bold' >{service.service}</h2>
                            <p>{ service.description }</p>
                        </div>
                    ))}
                </div>
                <h1 className='text-xl font-bold capitalize mt-7'>Testinomials</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 px-2 gap-2 relative'>
                    {about.testinomials.map((testinomial, index) => (
                        <>
                           <div 
                                onClick={() => setShowTestinomial(testinomial.name)} 
                                key={`testinomial_${index}`} 
                                className={`flex cursor-pointer overflow-hidden scale-95 hover:scale-100 border dark:border-neutral-800 transition-all duration-200 bg-gradient-to-br dark:from-neutral-900 from-neutral-200/10 dark:to-neutral-800 to-neutral-50/20 items-center w-full gap-5 text-center shadow-lg rounded-xl p-4 
                                ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}
                            >
                                <img className='h-20' src="./assets/testinomialavatar.png" alt="testiavatar" />
                                <div className='text-left flex flex-col gap-3'>
                                    <h2 className='font-bold text-xl'>{testinomial.name}</h2>
                                    <p className='text-neutral-400 italic w-full overflow-hidden text-ellipsis max-w-xs line-clamp-3'>
                                        <q>{testinomial.testimonial}</q>
                                    </p>
                                </div>
                            </div>

                            <div onClick={() => setShowTestinomial('')} className={`fixed top-0 left-0 z-50 dark:bg-zinc-900/80 bg-zinc-500/50 w-screen h-screen justify-center items-center 
                                ${showTestinomial === testinomial.name ? 'flex' : 'hidden'}`} key={`popup_${index}`}>
                                <div className='mx-1 dark:bg-zinc-900 max-w-[500px] box-content bg-zinc-50 opacity-100 py-4 sm:p-4 shadow-xl rounded-lg border border-neutral-300/50 dark:border-neutral-700 flex  sm:flex-col w-auto h-auto'>
                                    <button onClick={()=>setShowTestinomial('')} type="button" className='text-2xl sm:self-end hidden md:block'>
                                        <IoCloseCircleOutline/>
                                    </button>
                                    <div className="flex lg:text-ellipsis md:flex-row flex-col gap-5 items-center px-10">
                                         <button onClick={()=>setShowTestinomial('')} type="button" className='text-2xl mr-[-20px] self-end md:hidden'>
                                            <IoCloseCircleOutline/>
                                        </button>
                                        <img className='h-20' src="./assets/testinomialavatar.png" alt="testiavatar" />
                                        <div className='text-left flex flex-col gap-3'>
                                            <h2 className='font-bold text-xl' >{testinomial.name}</h2>
                                            <p className='text-neutral-400 italic ' ><q>{ testinomial.testimonial }</q></p>
                                            { testinomial.clientlink && <a href={testinomial.clientlink} target="_blank" rel="noopener noreferrer" className='flex gap-3 items-center'>
                                                Client Info
                                                <FaExternalLinkAlt/>
                                            </a>                                    }
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <h1 className='text-xl font-bold capitalize mt-7'>Github Contribution</h1>
                <img src="https://ghchart.rshah.org/saijanipireddy" alt="GitHub Contribution Chart" className='' />
            </div>
        )
    }

    export default About;