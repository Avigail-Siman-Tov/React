import axios from "axios";

const url_users = "https://jsonplaceholder.typicode.com/users"
const url_posts = "https://jsonplaceholder.typicode.com/posts"
const url_todos = "https://jsonplaceholder.typicode.com/todos"


// GET ALL
const getUsers = async () => {
    const {data} = await axios.get(url_users)
    return data
}

const getUserByid = async (id) => {
    const {data} = await axios.get(`${url_users}/${id}`)
    return data
}
const getTodosByid = async (id) => {
    const {data} = await axios.get(`${url_todos}?userId=${id}`)
    return data
}
const getPostsByid = async (id) => {
    const {data} = await axios.get(`${url_posts}?userId=${id}`)
    return data

}

const updateUser = async (id,userData) => {
    const {data} = await axios.put(`${url_users}/${id}`,userData)
    return data
}

export {getUsers,getTodosByid,updateUser,getUserByid,getPostsByid}