// This file contains HTTP request that work in tandem with json.server for your data.
import React from 'react'
import { Todo } from "./definitions";

const API_PATH = "http://localhost:3100/posts";

export async function GetAllPost() {
    const res = await fetch(API_PATH)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json() as unknown as Array<Todo>;
}

export  async function GetPost(id:number) {
    const res = await fetch(`http://localhost:3100/posts/${id}`)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

export  async function AddPost(title: string) {
    const res = await fetch(API_PATH, {
        method: "POST",
        body: JSON.stringify({
          title,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
    })
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

// export async function DeletePost(id:number){
//     const res = await fetch (`http://localhost:3100/posts/${id}`,{
//         method:"DELETE"
//     })
//     if (!res.ok) throw new Error('failed to Delete Data')
// }

export const DeletePost = async (id:  number) => {
    return await fetch(`http://localhost:3100/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
        console.log('Todo Deleted')
        
    })
};