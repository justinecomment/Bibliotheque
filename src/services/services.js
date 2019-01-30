import axios from 'axios';

export default {
  isMobile(){
    if(window.innerWidth <= 600){
      return true;
    } 
    return false;
  },
  login(data){
    let result;
    let form = {
      username: data.pseudo,
      password: data.password
    };
    axios.post("http://192.168.1.13:8888/login", form)
      .then(response => {
        result = response;
        console.log(result.headers.authorization);
        
        return result;
      })
      .catch(error=> {
        result = error.response;
        console.log(error)
        return result;
      })
  }
}

