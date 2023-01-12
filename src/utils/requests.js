import axios from 'axios'

export const getAllTodos = () => {
   return axios.get("http://127.0.0.1:3001/groceries")
}

export const signUpUser = () => {
   return axios.get("http://127.0.0.1:4000/login")
}

export const checkLoggedStatus = () => {
   return axios.get("http://127.0.0.1:4000")
}

export const createTodo = (todo) => {
   return axios.post("http://127.0.0.1:4000/api/todos",todo)
}


