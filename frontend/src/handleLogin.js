import axios from 'axios';

const apiBaseUrl = 'http://localhost:4000/api/';

export default function handleClick(payload) {
  axios.post(apiBaseUrl + 'auth/login', payload).then(function(response) {
    console.log(response);

    const status = response.status;
    if (status === 200) {
      console.log('Login successfull');
    } else if (status === 401) {
      console.log('Username password do not match');
      alert(response);
    } else {
      console.log('Username does not exists');
      alert('Username does not exist');
    }
  }).catch(function(error) {
    console.log(error);
  });
}
