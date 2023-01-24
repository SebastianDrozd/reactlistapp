import React from 'react'
import { useSelector } from 'react-redux'
import { getUserTodos, markComplete, setCompleteTodo, updateTodo } from '../utils/requests'
const ShowTodoModal = (props) => {
    console.log("these are props",props)
    const {color, text,todo,final} = props
    const token = useSelector(state => state.user.token)
    const email = useSelector(state => state.user.email)
    console.log("this is final",final)
    const markCompleted = () => {
        console.log("this is the sent", todo.id,token)
        setCompleteTodo(token,todo.id).then(res => {
            console.log(res.data)
            getUserTodos(token,email).then(res => {
                final(res.data)
            })
        })
    }
    return (
        <>
            <button type="button" class={`btn btn-${color}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
               {text}
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">View Task</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label"><b>Task Title</b></label>
                                    <p>{todo.title}</p>
                                    
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"><b> Task Description</b></label>
                                   <p>{todo.description}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"><b> Task Due Date</b></label>
                                   <p>{new Date(todo.dateDue).toDateString()}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"><b>Task Creation Date</b></label>
                                   <p>{new Date(todo.created).toDateString()}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"><b>Is Task Public?</b></label>
                                   <p>{todo.isPublic}</p>
                                </div>
                                                              
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={markCompleted}  type="button" class="btn btn-success">Mark Task as complete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowTodoModal