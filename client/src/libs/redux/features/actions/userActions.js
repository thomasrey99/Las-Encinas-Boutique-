import axios from 'axios';
<<<<<<< HEAD

import { userByUid, updateUser } from '../userSlice';
=======
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

import { userByUid, updateUser, getAllUsers, getUsersByName } from '../userSlice';
>>>>>>> develop

export const getUserByUid = (id)=>{
    
    return async function(dispatch){
            try {
<<<<<<< HEAD
                const response = await axios.get(`http://localhost:3001/users/${id}`);
=======
                const response = await axios.get(`${URL_SERVER}/users/${id}`);
>>>>>>> develop
                return(dispatch(userByUid(response.data))) ; 
            } catch (error) {
                console.log(error)
            }
    }
}

<<<<<<< HEAD
=======
export const usersByName = (name)=>{
    
    return async function(dispatch){
            try {
                const response = await axios.get(`${URL_SERVER}/users?name=${name}`);
                return(dispatch(getUsersByName(response.data))) ; 
            } catch (error) {
                console.log(error)
            }
    }
}

export const getUsers = ()=>{
    return async function(dispatch){
        try {
            const response = await axios.get(`${URL_SERVER}/users`)
            return(dispatch(getAllUsers(response.data)))
        }catch(error){
            console.log(error.message)
        }
    }
}

>>>>>>> develop
export const updateUserFromDB = (id, updateData)=>{
    
    return async function(dispatch){
            try {
<<<<<<< HEAD
                await axios.put(`http://localhost:3001/users/${id}`, updateData);
=======
                await axios.put(`${URL_SERVER}/users/${id}`, updateData);
>>>>>>> develop
                return(dispatch(updateUser())) ; 
            } catch (error) {
                console.log(error)
            }
    }
}