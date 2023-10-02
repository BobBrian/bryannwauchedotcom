import React from 'react'
import Link from 'next/link'
//10-2-2023 Add Padding to the Buttons specifically the top
//10-2-2023 Remove Project and Change Home to About Me

export default function Header() {
  return (
    <header className="flex space-x-4 justify-center items-center">
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Home
          </button>
        </Link>

        <Link href="/resume">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Resume
        </button>
        </Link>
        
        <Link href="/project">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Project
        </button>
        </Link>
    </header>
  )
}
