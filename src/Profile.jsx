import { useContext } from "react";
import React from 'react';
import UserContext from "./UserContext";
import './Profile.css';

function Profile() {
    const {user}= useContext(UserContext)
   if (!user) return <h1>Please fill this Registration from.</h1>

return <>
<div>
  <h1>Your Registration Is Successful</h1>
    <p>Username: {user.username}</p>
    <p>Date of Birth: {user.dob}</p>
    <p>Number: {user.number}</p>
    <p>Email: {user.email}</p>
    <p>Mark: {user.mark}</p>
    <p>Education: {user.education}</p>
    <p>Experience: {user.experience}</p>
    <p>Skill: {user.skill}</p>
 
  </div>
  </> 
}
export default Profile;