import React from 'react'

export default function Posts(props) {
  return (
    <div style={{marginLeft: "20px", width: "400px"}}>
       Posts - User {props.user}
      <button style={{background: "rgb(255,255,210)", marginLeft: "200px" , marginTop: "10px",marginBottom: "10px"}}>Add</button>
      <div style={{border: "2px solid black" , padding: "20px"}}>
      {props.posts.map(post =>
        <div key = {post.id} style={{border: "2px solid purple" , padding: "20px" , marginTop: "10px"}}>
            <b>Title: </b>{post?.title}<br /><br />
            <b>Body: </b>{post?.body}
        </div>
        
      )}      
        
      </div>
    </div>
  )
}
