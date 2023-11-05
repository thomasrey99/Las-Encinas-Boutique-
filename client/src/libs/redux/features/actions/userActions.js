import axios from 'axios';

import { userByUid } from '../userSlice';

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