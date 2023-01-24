import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createTodo, createUserTodo, getUserTodos } from '../utils/requests'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const TaskModal = () => {
    const token = useSelector(state => state.user.token)
    const email = useSelector(state => state.user.email)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [todos, setTodos] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [wantsDueDate, setWantsDueDate] = useState(false)
    const [wantsPublic, setWantsPublic] = useState(false)
    const createTodo = () => {
        let todo = {
            title: title,
            description: description,
            email: email,
            isPublic: wantsPublic,
            dateDue : startDate.toISOString().slice(0, 10)
        }
        console.log("this is todo", todo)
        createUserTodo(token, todo).then(res => { console.log(res.data) })
    }

    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create a task
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new Task</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Task Title</label>
                                    <input onChange={(e) => {setTitle(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">Enter a catchy title to get your attention</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Task Description</label>
                                    <input onChange={(e) => {setDescription(e.target.value)}}   class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input onChange={(e) => {setWantsPublic(e.target.value)}} type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Set Public?</label>
                                </div>
                                <div class="mb- form-check">
                                    <label class="form-check-label" for="exampleCheck1">When would you like this task due?</label>
                                    
                                </div>
                                
                                  <DatePicker selected={startDate} onChange={(date) => { setStartDate(date); console.log(startDate) }} />
                               
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={createTodo} type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskModal