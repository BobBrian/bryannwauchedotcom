import { Resturant, Todo } from "./definitions";

const API_PATH = "http://localhost:3100/todos";
const API_PATH2 = "http://localhost:3100/resturant"; 

export async function GetAllPost() {
    const res = await fetch(API_PATH)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json() as unknown as Array<Todo>;
}

export  async function GetPost(id:number) {
    const res = await fetch(`http://localhost:3100/todos/${id}`)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

export  async function AddPost(description: string) {
    const res = await fetch(API_PATH, {
        method: "POST",
        body: JSON.stringify({
            description,
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
    return await fetch(`http://localhost:3100/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
        console.log('Todo Deleted')
        
    })
};

export async function GetAllResturant() {
    const res = await fetch(API_PATH2)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json() as unknown as Array<Resturant>;
}

export  async function GetResturant(id:number) {
    const res = await fetch(`http://localhost:3100/resturant/${id}`)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

export  async function AddResturant(authorname:string,resturantname:string, body:string) {
    const res = await fetch(API_PATH2, {
        method: "POST",
        body: JSON.stringify({
          authorname,resturantname,body
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
    })
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

export const DeleteReview = async (id:  number) => {
    return await fetch(`http://localhost:3100/resturant/${id}`, {
      method: "DELETE",
    }).then(() => {
        console.log('Todo Deleted')
        
    })
};