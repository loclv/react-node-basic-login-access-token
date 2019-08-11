import axios from 'axios';

const apiBaseUrl = 'http://localhost:4000/api/';

export default function handleClick(payload) {
  axios.post(apiBaseUrl + 'auth/login', payload).then(function(response) {
    console.log(response);

    const status = response.status;
    if (status === 200) {
      const info = 'Login successfull';

      console.log(info);
      alert(info);
      alert(`token: ${response.data.token}`);
    } else if (status === 401) {
      console.log('Username password do not match');
      alert(response);
    } else {
      const info = 'Username does not exists';
      console.log(info);
      alert(info);
    }
  }).catch(function(error) {
    console.log(error);
  });
}
