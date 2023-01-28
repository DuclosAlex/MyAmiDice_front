import { useEffect, useState } from 'react';
import api from '../../api';
import UserModal from '../UserModal/UserModal'

import './style.scss';






function UsersList() { 

    const [allUsers, setAllUsers] = useState(null);
  
    //TODO: voir pourquoi ça marche pas 
  
   useEffect(() => {
        console.log("alluser", response.data)
        async function getAllUsers(){
            try {
            const response = await api.get("/users/getall")
            setAllUsers(response.data)        
            } catch (error) {
            throw new Error (error)
            }
        }
        getAllUsers()
        }, [])
  
  return (
    <div className='usersList-container'>
        <div className='usersList'>
            {allUsers.map((user) => (
              <UserModal 
                key = {user.id}
                id = {user.id}
                pseudo = {user.pseudo}
                email = {user.email}
                firstname = {user.firstname}
                lastname= {user.lastname}
              />
            ))}
        </div>
    </div>
  )
}
 



export default UsersList