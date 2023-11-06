import axios from 'axios';

import { userByUid, updateUser } from '../userSlice';

export const getUserByUid = (id)=>{
    
    return async function(dispatch){
            try {
                const response = await axios.get(`http://localhost:3001/users/${id}`);
                return(dispatch(userByUid(response.data))) ; 
            } catch (error) {
                console.log(error)
            }
    }
}

export const updateUserFromDB = (id, updateData)=>{
    
    return async function(dispatch){
            try {
                await axios.put(`http://localhost:3001/users/${id}`, updateData);
                return(dispatch(updateUser())) ; 
            } catch (error) {
                console.log(error)
            }
    }
}