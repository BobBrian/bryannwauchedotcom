"use client"
import React from 'react'

import {useState, useEffect} from 'react' 

interface Todo {
  id:number,
  description:string
}

export default function Todo() {
  const [todos,setTodo] = useState<Todo[]>([])
  const [description,setDescription] = useState('')

  useEffect(() => {
    fetch("http://localhost:3100/todos")
    .then(response => response.json())
    .then(json => setTodo(json));
  },[])

  const handleSubmit = (e:any) => {
    const todo = {description}

    fetch("http://localhost:3100/todos",{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    }).then(() =>{
      console.log("A NEW TODO HAS BEEN ADDED")
    })
  }

  const deleteTodo = (id:number) => {
    fetch(`http://localhost:3100/todos/${id}`,{
      method:'DELETE'
    }).then(() => {
      console.log('Todo Deleted')
      
    })

  }

  return (
   <main>
      <h1 className="text-slate-200 text-center text-4xl mb-8">Chibuikem Nwauche</h1>
      <h2 className="text-slate-200 text-center text-3xl mb-6">Todo List Application</h2>
      
      <form className="mb-8" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-lg font-medium text-slate-200 ">Todo Task</label>
          <input value={description} className="bg-gray-50 border border-stone-600 text-gray-900 
          rounded-lg focus:ring-blue-500 w-6/12 " placeholder="Enter Task Here" onChange={(e) =>setDescription(e.target.value)} required/>
        </div> 
        <button className="mt-2 text-center inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-blue-700 rounded-lg">Add New Task</button>
      </form>
      
      <div >
          {todos.map((todo) => (
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg mb-5 " key={todo.id}>
              <h5 className="text-2xl font-bold text-gray-900">{todo.description} </h5>
              <a className="mt-2 inline-flex items-center px-3 py-2 text-center text-white 
              bg-red-500 rounded-lg rounded-lg hover:bg-red-900" onClick={()=>{
                deleteTodo(todo.id)
              }}>Delete</a>
            </div>
          ))}
      </div>
   </main>
  )
}