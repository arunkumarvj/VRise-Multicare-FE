import api from '../api/constant';



async function GetCountry(){
  try{

      const response = await api.get('country/');
      return response.data;

  }catch(e){
      console.log(e);
      return null;
  }
}


export{GetCountry}