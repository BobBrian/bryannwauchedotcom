import React from 'react'
//bg-white border border-gray-200 rounded-lg
//mx-auto w-[calc(100%-2rem)] max-w-6xl z-2 pt-16 pr-7 pb-8 pl-7
{/* <div className=" border-4">
        <div> 
          <p className="block text-sm relative "> 1st October 2023</p>
          <h2 className="text-2xl font-serif">Sample Project A</h2>
          <p className="text-2xl font-serif">Quick Description of the Project<br/></p>
        </div>
        <button className=" ">
           View Project
          </button>
</div> */}
//This is a Medium Screen

export default function Post() {
  return (
    // Main Body + className=""
    <div className="sm:w-32 md:w-full lg:w-full ">
      {/* Main Post */}
        <div className="flex justify-center items-center">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Sample Project A</h5> 
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Project
          </a>
          </div>
        </div>
        
    </div>
  )
}
