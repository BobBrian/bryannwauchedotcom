import React from 'react'

export default function Project() {
  return (
    <div> 
        <div className="text-slate-200">
            {/* The h1 tags will be turned into links to the projects themselves and change colour once 
            they are hovered over*/}

            <h1 className="text-5xl mb-8 underline hover:text-red-700">Project Number 1</h1>
            <p className="text-3xl mb-8"> Summary of who I am and what my exprience as a fullstack web developer </p>
            <h2 className="text-3xl underline">List of technologies this project is made from</h2>
            <ul className="max-w-md space-y-1 list-disc list-inside text-3xl mb-8">
                <li>Technology A</li>
                <li>Technology B</li>
                <li>Technology C</li>
            </ul>
        </div>
    </div> 
  )

}
