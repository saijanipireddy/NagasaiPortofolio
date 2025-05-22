import { useEffect, useState } from "react";



function Landing({knowmore}) {

    const [introVisible, setIntroVisible] = useState(true); 
      const [isRemoved, setIsRemoved] = useState(false);
  
    const [interval,setVal] = useState()
  
    const greeting = "Hello, I'm Ganapathi. I'm a Full Stack Developer!";


      const handleKnowMore = () => {
        clearInterval(interval)
          setIntroVisible(false);

           setTimeout(() => {
               setIsRemoved(true);
          knowmore(false);
               
    }, 300); 
    };

    useEffect(() => {
      let index = 0; // To track current position
      let typing = true; // To track whether it's typing or backspacing
      const textEl = document.getElementById("welcome-text");
      const interval = setInterval(async () => {
        if (index < greeting.length - 1 && typing) {
          textEl.textContent += greeting.charAt(index);
          index++
          typing = true;
        } else {
          textEl.textContent = textEl.textContent.slice(0, -1)
          index--;
          typing = false;
        }

        if (index === greeting.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        if (index === 0) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          typing = true;
        }
      }, 150);
      setVal(interval)
      return () => clearInterval(interval);
    }, []);

   if (isRemoved) return null;

    return (

        <div className={`transition-opacity duration-300 min-h-screen min-w-[100vw] fixed inset-0 z-50 flex flex-col items-center justify-center dark:bg-zinc-900 bg-zinc-50 text-inherit px-5
            ${introVisible ? 'opacity-100' : "opacity-0"}`
        }>
          <div className="text-center animate-fade-in">
            <div className="flex items-center">
              <h1 id="welcome-text" className="text-4xl font-bold mb-4"></h1>
              <span className="input-cursor"></span>
            </div>
            </div>
            <button 
              className="mt-10 justify-self-end bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full animate-bounce"
              onClick={handleKnowMore}
            >
              Know More
            </button>
        </div>
    )
}


export default Landing;