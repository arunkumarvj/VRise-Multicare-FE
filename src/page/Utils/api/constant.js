import axios from "axios";
import Cookies from 'js-cookie';

var Jwt = Cookies.get('token');
export default axios.create({
    baseURL : "https://vrisemulticare.pythonanywhere.com/api/v1/",
    headers: {
        'Authorization': `Bearer ${Jwt}`,
        'Content-Type': 'application/json',
      },
})