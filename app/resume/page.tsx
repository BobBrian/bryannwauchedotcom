import Form from '@/components/form'
import React from 'react'


export default  function Resume() {
  return (
    <main className="">
      <div className="text-slate-200">
        <h1 className="text-5xl mb-8 underline">Resume</h1>
        <p className="text-3xl mb-8"> Summary of who I am and what my exprience as a fullstack web developer </p>
        <h2 className="text-3xl underline">List of Skills</h2>
          <ul className="max-w-md space-y-1 list-disc list-inside text-3xl mb-8">
            <li>Skill A</li>
            <li>Skill B</li>
            <li>Skill C</li>
            <li>Skill D</li>
            <li>Skill E</li>
          </ul>
      </div>
      <div className="text-slate-200 text-3xl mb-8 text-center underline">
        Contact Form

      </div>
      <Form/>
    </main>
  )
}

