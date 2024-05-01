import React from 'react'

export default function NewTodo(props) {
  return (
    <div>
        New Todo - User {props.user} <br></br>
        <div style={{border: "2px solid black" , padding: "20px" ,marginTop:"10px"}}>
            Title: <input type="text" style={{marginLeft: "20px"}}/><br /><br />
            <button style={{background: "rgb(255,255,210)" ,marginRight:"20px",marginTop: "10px"}}>Add</button>
            <button style={{background: "rgb(255,255,210)", marginTop: "10px"}}>Cancle</button>
        </div>
        
    </div>
  )
}
