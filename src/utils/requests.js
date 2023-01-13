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


