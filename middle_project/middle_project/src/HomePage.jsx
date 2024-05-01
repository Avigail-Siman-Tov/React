import React, { useState ,useEffect} from 'react'
import { getUsers ,getTodosByid,updateUser ,getUserByid,getPostsByid} from './Service'
import Todos from './Todos'
import Posts from './Posts'

export default function HomePage() {
    const [users,setUsers]= useState([{}])
    const [usersSearch,setUsersSearch]= useState([{}])

    const[completed,setCompleted]=useState([])
    const [clickId, setClickId] = useState(null);
    const [showOverDataUserId, setShowOverDataUserId] = useState(null);
    const [userData,setUserData]= useState({});
    const [todosById , setTodosById] = useState([{}])
    const [postsById , setPostsById] = useState([{}])

    useEffect(()=>{
        getDataUsers()
        // TodosOfUser(users)
    },[])


    const getDataUsers = async ()=>{
        const data_user = await getUsers();
        setUsers(data_user)
        setUsersSearch(data_user)
    }

    const getDataTodosByid = async (id)=>{
        const data_todoById = await getTodosByid(id);
        setTodosById(data_todoById)
        for(var i=0 ; i< data_todoById.len;i++){
            if(!data_todoById[i].completed){
                return false
            }
        }
        return true 
    }

    const getDataPostsByid = async (id)=>{
        const data_postsById = await getPostsByid(id);
        setPostsById(data_postsById)
    }

    const updateDataUser = async (id) =>{
        const data_updateUser =  await updateDataUser(id ,userData)
        setUserData(data_updateUser)
    }
    // const TodosOfUser=(data)=>{
    //     for(var i=0;i< data.length; i++){
    //         var value = getDataTodosByid(data.userId)
    //         setCompleted(value)
    //     }
    // }
    const SearchInclude = (e)=>{
        const data = e.target.value
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(data.toLowerCase()) || 
            user.email.toLowerCase().includes(data.toLowerCase())
        );
        setUsersSearch(filteredUsers);
    }

    const getOverData = (user) => {
        return(
        <div style={{border: "1px solid black" , padding: "10px", borderRadius: "20px",marginTop: "10px"}}>
                    <b style={{fontSize:"15px"}}>Street: <input type="text" defaultValue={user.address?.street} onChange={ (e) => setUserData({...userData,street: e.target.value})} style={{backgroundColor: clickId === user.id ?  "peachpuff" : "white"}}/></b><br />
                    <b style={{fontSize:"15px"}}>City: <input type="text" defaultValue={user.address?.city} onChange={ (e) => setUserData({...userData,city: e.target.value})}  style={{marginTop: "10px",backgroundColor: clickId === user.id ?  "peachpuff" : "white"}}/></b><br />
                    <b style={{fontSize:"15px"}}>Zip Code: <input type="text" defaultValue={user.address?.zipcode}  onChange={ (e) => setUserData({...userData,zipcode: e.target.value})} style={{marginTop: "10px",backgroundColor: clickId === user.id ?  "peachpuff" : "white"}}/></b><br />
        </div>); 
    };
      
  return (
    <div style={{display: 'flex'}}>
        <div style={{border: "3px solid black" ,width: "350px" , padding: "10px", borderRadius: "30px",height: "100%"}}>
            <b style={{margin: "10px"}}>Search: </b>
            <input type="text" onChange={SearchInclude} style={{marginRight: "20px"}}/> 
            
            <button style={{background: "rgb(255,255,210)"}}>Add</button>

            <div>
                {usersSearch.map(user => 
                    <div
                        key = {user.id}
                        style={{
                            border: (completed[user.id] - 1) ? "1.5px solid green" : "1.5px solid red",
                            margin: "10px",
                            padding: "10px",
                            backgroundColor: clickId === user.id ? "peachpuff" : "white",
                        }}
                        >
                            
                        <span onClick={() => {setClickId(user.id) ;getDataTodosByid(user.id); getDataPostsByid(user.id)}}><b style={{fontSize:"15px"}}>ID : {user.id} </b></span><br />
                    
                    
                        <b style={{fontSize:"15px"}}>Name: <input type="text" defaultValue={user.name} onChange={ (e) => setUserData({...userData,name: e.target.value})} style={{marginTop: "10px",backgroundColor: clickId === user.id ? "peachpuff" : "white"} } /></b><br />
                        <b style={{fontSize:"15px"}}>Email: <input type="text" defaultValue={user.email} onChange={ (e) => setUserData({...userData,email: e.target.value})} style={{marginTop: "10px",backgroundColor: clickId === user.id ? "peachpuff" : "white"}}/></b><br />

                        <br />
                        <button
                            style={{background: "rgb(169,169,169)"}}
                            onMouseOver={() => setShowOverDataUserId(user.id)}
                            onClick={() => setShowOverDataUserId(null)}
                        >
                            Other Data
                        </button>
                        {showOverDataUserId === user.id && getOverData(user)}

                        <button onClick={updateDataUser} style={{background: "rgb(255,255,210)" ,marginLeft:"10px",marginTop: "10px"}}>Update</button>
                        <button style={{background: "rgb(255,255,210)", marginTop: "10px"}}>Delete</button>
                        {/* {clickId === user.id && <Todos user={user.id} todos={todosById}/>}
                        {clickId === user.id && <Posts user={user.id} posts={postsById}/>}    */}
                    </div>
                )}
            </div>  
        </div>
              
    
        {usersSearch.map(user =>
            <div key={user.id}>
                {clickId === user.id && <Todos user={user.id} todos={todosById}/>}
                {clickId === user.id && <Posts user={user.id} posts={postsById}/>}
            </div>
        )}
   </div>
    );
}
