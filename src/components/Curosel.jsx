// import React, { useState, useEffect } from 'react'
// // import { ChevronLeft, ChevronRight } from "react-feather"
// import { BiLeftArrow, BiRightArrow, BiRightArrowCircle, BiSolidLeftArrow, BiSolidLeftArrowAlt, BiSolidRightArrow, BiSolidRightArrowAlt, BiSolidRightArrowSquare } from 'react-icons/bi';


// const Curosel = ({ children : slides, autoSlide = false, autoSlideInterval = 3000 }) => {
//     const [curr, setCurr] = useState(0)

//     const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

//     const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

//     useEffect(() => {
//         if (!autoSlide) return
//         const slideInterval = setInterval(next, autoSlideInterval)
//         return () => clearInterval(slideInterval)
//     }, [])


//     return (
//         <div className='overflow-hidden relative'>
//             <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
//                 {slides}
//             </div>
//             <div className="absolute inset-0 flex items-center justify-between ">
//                 {curr === 0 ?
//                 <button onClick={prev} className='p-1 hidden rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
//                     {/* <ChevronLeft /> */}
//                     <BiSolidLeftArrow/>
//                 </button>
//                 :
//                 <button onClick={prev} className='p-1  flex rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
//                     {/* <ChevronLeft /> */}
//                     <BiSolidLeftArrow/>
//                 </button>
//                 }
//                 {/* <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
//                     <BiSolidRightArrow/>
//                 </button> */}
//                 {(slides.length > 1 && curr < slides.length - 1)&& ( // Conditionally render right arrow button
//                     <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
//                     <BiSolidRightArrow/>

//                     </button>
//                 )}
//             </div>
//             <div className='absolute bottom-4 right-0 left-0'>
//                 <div className='flex items-center justify-center gap-2'>
//                     {slides.map((s, i) => (
//                         <div key={i} className={`transition-all w-1.5 h-1.5 bg-black rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
//                     ))}
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Curosel

// Carousel.js
import React, { useState, useEffect } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import jsonData from '../data.json'; // Importing jsonData

const Carousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr(curr === 0 ? jsonData.resources.length - 1 : curr - 1);

    const next = () => setCurr(curr === jsonData.resources.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {/* {jsonData.resources.map((item, index) => (
                    <div key={index} className='slide'>
                        <img src={item.src} alt={`Slide ${index + 1}`} />
                    </div>
                ))} */}
                {jsonData}
            </div>
            <div className="absolute inset-0 flex items-center justify-between ">
                <button onClick={prev} className={`p-1 ${curr === 0 ? 'hidden' : 'flex'} rounded-full shadow bg-white/80 text-gray-800 hover:bg-white`}>
                    <BiLeftArrow />
                </button>
                {(jsonData.resources.length > 1 && curr < jsonData.resources.length - 1) && ( // Conditionally render right arrow button
                    <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                        <BiRightArrow />
                    </button>
                )}
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {jsonData.resources.map((res, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-black rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
