import axios from 'axios'



export const createUserTodo = (jwt,todo) => {
   const config = {
      headers: { Authorization: `Bearer ${jwt}` },
   }
   return axios.post("http://127.0.0.1:4000/api/v1/todos",todo,config)
}


export const getUserTodos = (jwt,email) => {
   const config = {
      headers: { Authorization: `Bearer ${jwt}` },
   }
   console.log(config)
   return axios.get(`http://127.0.0.1:4000/api/v1/todos/${email}`,config)
}


export const getAllTodos = (jwt) => {
   const config = {
      headers: { Authorization: `Bearer ${jwt}` },
   }
   console.log(config)
   return axios.get("http://127.0.0.1:4000/api/v1/todos",config)
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

export const createApiToken = () => {
   const config = {
      headers: { 'content-type': 'application/json' },
   }
   const data = {
      client_id : "XxLJUiz3akYeFW8PMq2kJmOpA57qA3OD",
      client_secret : "WB4m3YsynnRa1xlcIHSP7Y5Rv0Zr625FEzT-rqAnMpHAZKA08bP6ifaZlNasljc_",
      audience: "https://myapi.com",
      grant_type:"client_credentials"
   }
   return axios.post("https://dev-at5wa91z.us.auth0.com/oauth/token",data,config)
}

export const authGetTodos= (jwt) => {
   const config = {
      headers: { Authorization: `Bearer ${jwt}` },
   }
   return axios.get("http://127.0.0.1:4000/api/todos",config)
}

export const setCompleteTodo = (jwt,id) => {
   const config = {
      headers: { Authorization: `Bearer ${jwt}` },
   }
   let todo = []
   return  axios.put(`http://127.0.0.1:4000/api/v1/todos/${id}/complete`,todo,config)
}

