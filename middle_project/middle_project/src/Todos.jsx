import React from 'react'
import NewTodo from './NewTodo'
import { useState } from 'react';


export default function Todos(props) {

  const [showNewTodo, setShowNewTodo] = useState(false);
  return (
    <div style={{marginLeft: "20px", width: "400px"}}>
      {showNewTodo ? <NewTodo user={props.user}/> : null}
      <div>Todos - User {props.user}
      <button onClick={()=> setShowNewTodo(true)} style={{background: "rgb(255,255,210)", marginBottom: "10px",marginLeft: "20%"}}>Add</button>
      </div>
      <div style={{border: "2px solid black",padding: "20px"}}>
      {props.todos.map(todo =>
        <div key = {todo.id} style={{border: "2px solid purple" , padding: "20px" , marginTop: "10px"}}>
            <b>Title: </b>{todo?.title}<br /><br/>
            <b>Completed: </b> {todo?.completed ? "True" : "False"}
            {todo?.completed === false && (
              <button style={{background: "rgb(255,255,210)", marginLeft: "20px"}}>Mark Completed</button>
            )}
        </div> 
      )}    
      </div>
    </div>
    
  )
}
