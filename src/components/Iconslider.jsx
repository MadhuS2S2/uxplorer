import React from 'react';
import { motion } from 'framer-motion';
import { FiFigma } from 'react-icons/fi'
import { FaBehance, FaDribbble, FaSketch, FaTrello } from 'react-icons/fa'
import { SiAdobexd, SiAntdesign, SiCanva, SiIconfinder, SiInteractiondesignfoundation, SiMaterialdesign, SiNotion, SiSlack, SiTailwindcss } from 'react-icons/si'
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';


const slides = [
    { icon: <FiFigma /> },
    { icon: <FaSketch /> },
    { icon: <SiAdobexd /> },
    { icon: <FaBehance /> },
    { icon: <FaDribbble /> },
    { icon: <FaTrello /> },
    { icon: <SiNotion /> },
    { icon: <SiSlack /> },
    { icon: <SiMaterialdesign /> },
    { icon: <SiTailwindcss /> },
    { icon: <SiIconfinder /> },
    { icon: <SiAntdesign /> },
    { icon: <DiIllustrator /> },
    { icon: <DiPhotoshop /> },
    { icon: <SiCanva /> },
    { icon: <SiInteractiondesignfoundation /> },
];
           
const Iconslider = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative h-full overflow-hidden py-12 bg-white  dark:bg-blue-gray-900  dark:text-white mx-auto" style={{ width: "50%" }}>

            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full  before:bg-gradient-to-r dark:before:from-blue-gray-900 before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l dark:after:from-blue-gray-900 after:from-white after:to-transparent after:filter after:blur-3"></div>

            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 lg:p-2 p-2">
                    <div className="flex items-center justify-center h-full">
                    {slide.icon}
                    </div>
                </div>
                ))}
            </motion.div>
            <style jsx>{`
        @media (max-width: 768px) {
          .flex-shrink-0 svg {
            width: 3rem;
            height: 3rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Iconslider;
