
import React ,{ useState, useContext}from "react";
import { useNavigate } from "react-router-dom";
import {credentialsContext} from "../App"


const handleError = async (res)=>{
  if(!res.ok){
    const {message} = await res.json();
    console.log("message",message);
    throw Error(message)
  }
  return res.json()
}

export default function Register() {

 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [contactno, setContactno] = useState("");
 const [iserror,SetIsError] = useState("");
 const [credintial] = useContext(credentialsContext);

 const register = (e) =>{
  e.preventDefault();
  
  fetch("http://localhost:4000/register",{
  method:"POST", 
  headers:{
      "Content-Type":"application/json",

    },
    body: JSON.stringify({
      username,password,contactno
    })
  })
  .then(handleError)
  .then(()=>{
    navigate("/");

  })
  .catch((error)=>{
    
    console.log("error",error)
    SetIsError(error.message)
  })
}
let navigate = useNavigate();
  return (
    <div>
      <h1>Register User</h1>
      {iserror && (<span style={{color:"red"}}>{iserror}</span>)}
      <form onSubmit={register}>
        <input onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="username" />
        <br />
        <input  onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" />
        <br />
        <input onChange={(e)=>setContactno(e.target.value)} type="text" placeholder="contact no" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
