
import axios from 'axios';
import api from '../api/constant';
import Cookies from 'js-cookie';



 async function UserLogin(data){
     try{
         const response = await axios.post('https://vrisemulticare.pythonanywhere.com/api/v1/token/',data);
         
         let token = response.data.access;
         // Store the JWT token in a cookie
         Cookies.set('token', token, { expires: 1, secure: false, sameSite: 'strict' });

        return response.data;
    }catch (error) {
        console.log(error);
        return null;
      }
}

async function AddCountry(data){
    try{

        const response = await api.post('country/',data);
        return response;

    }catch(e){
        console.log(e);
        return null;
    }
}


export {UserLogin, AddCountry} 