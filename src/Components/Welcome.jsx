import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import {credentialsContext} from "../App"


export default function Welcome() {
    const [credintial] = useContext(credentialsContext);
  return (
    <div>
      <h1>Welcome {credintial && credintial.username}</h1>
      <Link to="/register">Register</Link>
    </div>
  );
}
