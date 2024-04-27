import React, { useState } from 'react';
import jsonData from '../data.json'; // Import your JSON data
import { } from '@heroicons/react/24/outline'
import { BiRightArrow, BiRightArrowCircle, BiSolidRightArrowAlt, BiSolidRightArrowSquare } from 'react-icons/bi';
import Curosel from './Curosel';
// import { Carousel } from '@material-tailwind/react';


function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Function to filter resources based on the search query and selected category
    const filterResources = () => {
        if (searchQuery === '') {
            // If no search query, filter based on selected category
            return filterResourcesByCategory(selectedCategory);
        } else {
            // If search query present, filter based on both search query and selected category
            const filteredBySearch = filterResourcesBySearch(jsonData.resources);
            return filterResourcesByCategory(selectedCategory, filteredBySearch);
        }
    };

    const filterResourcesByCategory = (category, resources = jsonData.resources) => {
        const uniqueTitles = new Set(); // Set to store unique titles
        return resources.filter(resource => {
            // Check if the title is unique and the category matches
            if (!uniqueTitles.has(resource.title.toLowerCase()) && (category === '' || resource.category.toLowerCase() === category.toLowerCase())) {
                uniqueTitles.add(resource.title.toLowerCase()); // Add title to set to mark it as seen
                return true; // Include resource in filtered list
            }
            return false; // Exclude resource from filtered list
        });
    };


    // Function to filter resources based on the search query
    const filterResourcesBySearch = (resources) => {
        return resources.filter(resource =>
            resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };


    // Handle search input change event
    const handleSearchInputChange = event => {
        setSearchQuery(event.target.value);
    };

    // Handle category filter change event
    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
        setSearchQuery(event.target.value);
    };

    // Get the filtered resources
    const filteredResources = filterResources();

    // Get unique categories from filtered resources
    const categories = [...new Set(filteredResources.map(resource => resource.category))];

    return (
        <div className="Search max-w-full">
            <header>
                <div className='mb-40'>
                    <select className=' bg-purple-200 border border-gray-200 lg:max-w-36 rounded-lg shadow p-2 lg:rounded-r-none md:rounded-r-none sm:rounded-r-none h-11' value={selectedCategory} onChange={handleCategoryChange}>
                        <option value=""  className='lg:text-lg sm:text-xs'>All Categories</option>    
                        {[...new Set(jsonData.resources.map(resource => resource.category))].map(category => (
                            <option className='bg-yellow-300 lg:text-lg sm:text-xs' key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <input
                        className=' bg-white border border-gray-200 max-w-80 rounded-lg shadow p-2 lg:rounded-l-none md:rounded-l-none sm:rounded-l-none h-11 '
                        type="text"
                        placeholder="Search resources..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </header>
            <main >
                {categories.map(category => (
                    <div>
                        {searchQuery.toLowerCase() !== category.toLowerCase()?
                            <section className='lg:-mt-14 lg:p-20 overflow-scroll scrollbar-hide max-h-30' key={category}>
                                <h2 className='flex mt-5 mb-2 lg:text-2xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{category}</h2>
                                <ul className='flex p-5 max-w-fit min-h-10 overflow-scroll scrollbar-hide space-x-3 max-h-30 ' >
                                    {filterResourcesByCategory(category).map(resource => (
                                        <div className=" lg:flex lg:h-full items-center">
                                            <div className="group shadow-md relative mx-auto lg:w-96 overflow-hidden rounded-[16px] hover:shadow-inner shadow-gray-500/80 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                                                <div className="  group-hover:animate-spin-slow invisible absolute -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                                                <div className="relative rounded-[15px]  bg-white dark:bg-blue-gray-800 p-6 ">
                                                    <div className="space-y-4">
                                                            <li className='lg:max-w-80 max-h-full' key={resource.id}>
                                                                {/* <a href="#">
                                                                    <img className="rounded-t-lg ml-20" src={resource.image} alt="" />
                                                                </a> */}
                                                                <div className="lg:p-5 min-w-52 ">
                                                                    <a className="mb-2 lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white 
                                                                     dark:bg-gradient-to-r bg-gradient-to-r from-primary to-danger bg-clip-text hover:text-transparent hover:text-2xl dark:hover:text-transparent dark:hover:text-2xl" href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a>
                                                                    {resource.description.length > 100 ? (
                                                                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 '>{resource.description.substring(0, 121)}</p>
                                                                    ) : (
                                                                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{resource.description}</p>
                                                                    )}
                                                                </div>

                                                            </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                            </section>
                            :
                            <section className='overflow-scroll scrollbar-hide lg:space-x-3 max-h-30 mt-16 lg:ml-10' key={category}>
                                <h2 className=' mb-2 lg:text-2xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{category}</h2>
                                <ul className='lg:grid lg:grid-cols-3 p-5 max-w-fit min-h-10 overflow-scroll scrollbar-hide max-h-30 mt-11 '>
                                    {filterResourcesByCategory(category).map(resource => (
                                        <div className="flex  h-full items-center">
                                        <div className=" group m-4 lg:mr-4 shadow-md relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                                            <div className="group-hover:animate-spin-slow invisible absolute -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                                            <div className="relative rounded-[15px] bg-white dark:bg-blue-gray-800">
                                            <li className=' max-w-80 max-h-full' key={resource.id}>
                                                {/* <a href="#">
                                                    <img className="rounded-t-lg max-w-96" src={resource.image} alt="" />
                                                </a> */}
                                                <div className=" p-5 pl-2 min-w-80 min-h-10 lg:-mr-20  ">
                                                    <a className="mb-2 bg-red lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white
                                                    dark:bg-gradient-to-r bg-gradient-to-r from-primary to-danger bg-clip-text hover:text-transparent hover:text-2xl dark:hover:text-transparent dark:hover:text-2xl
                                                    " href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a>
                                                    <p className='mb-3 p-5 pt-3 pb-0 font-normal text-gray-700 dark:text-gray-400' >{resource.description}</p>
                                                    {/* <p className='mb-3 font-normal text-gray-700 dark:text-gray-400' >Category: {resource.category}</p> */}
                                                </div>

                                            </li>
                                        </div>
                                        </div>
                                        </div>

                                    ))}
                                </ul>
                            </section>
                        }
                    </div>
                ))}
            </main>
        </div>
    );
}

export default Search;

