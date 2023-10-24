'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function Post() {
  const router = useRouter()

  return (
    <div className="bg-slate-200  w-[calc(80%-2rem)]  max-w-5xl pt-16 pr-16 pb-8 pl-16  m-auto z-2"> 
     {/* Main Project */}
     <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center underline">Hello Welcome to My Protfolio Site</h5> 
          </a>
     <div className="flex  pb-8">
           {/* w-3/4 is what controls the width of the table */}
          <div className="p-6 bg-transparent  ">
          <p className="mb-3">I am full-stack developer which means I specialize in  building both The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) of a website which require different skill sets. </p>
          <h2 className="underline">Technology Specilizations</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside  mb-8">
            <li>C#</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Postgrsql</li>
            <li>Nextjs</li>
          </ul>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Below are projects that showcase my skills as a Full Stack Software Developer</p>
          </div>
      </div>
  
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-1/2  p-6 bg-white border border-gray-200 rounded-lg ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Todo Application</h5> 
          </a>
          <p className="mb-3 font-normal text-gray-700"> An Application  to effectively plan out your tasks
          so that they are all accomplished in the correct time frame.</p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium 
                text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300">
                <Link href="/todo">View Project</Link>   
          </button>
        </div>

       <div className="w-1/2  p-6 bg-white border border-gray-200 rounded-lg ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Review Application</h5> 
          </a>
          <p className="mb-3 font-normal text-gray-700">An Application to provide users a way to leave reviews 
          on specific resturants they have visited</p>
          <button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
          bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" 
          onClick={() => router.push('/resturant')}>
            View Project
          </button>
        </div>

        {/* <div className="w-1/2  p-6 bg-white border border-gray-200 rounded-lg ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Sample Project A</h5> 
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Project
          </a>
        </div>

        <div className="w-1/2  p-6 bg-white border border-gray-200 rounded-lg ">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Sample Project A</h5> 
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Project
          </a>
        </div> */}
    
      </div>
    </div>
  )
}
