import React, { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// Carousel data
const slides = [
  {
    id: 1,
    title: "First Slide",
    description: "This is the first slide.",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 2,
    title: "Second Slide",
    description: "This is the second slide.",
    image: "https://via.placeholder.com/800x400",
  },
  {
    id: 3,
    title: "Third Slide",
    description: "This is the third slide.",
    image: "https://via.placeholder.com/800x400",
  },
];

function Carousel({slides})  {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    };
    
    useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(timer);
  });

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[300px] md:h-[400px] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg flex justify-center">
        <img
          src={slides[currentIndex]}
          className="object-scale-down"
        />
        <div
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 dark:bg-black/40 p-2 rounded-full cursor-pointer"
          onClick={prevSlide}
        >
          <MdArrowBackIos className="text-2xl text-black dark:text-white" />
        </div>

        <div
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 dark:bg-black/40 p-2 rounded-full cursor-pointer"
          onClick={nextSlide}
        >
          <MdArrowForwardIos className="text-2xl text-black dark:text-white" />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentIndex
                ? "bg-blue-500 dark:bg-blue-300"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
