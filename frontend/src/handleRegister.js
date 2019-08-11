import axios from 'axios';

import apiBaseUrl from './apiBaseUrl';

export default function handleClick(payload) {
  axios.post(apiBaseUrl + 'auth/register', payload).then(function(response) {
    console.log(response);

    const status = response.status;
    if (status === 200) {
      const info = 'register successfull';

      console.log(info);
      alert(info);
      alert(`token: ${response.data.token}`);
    } else {
      console.log(response);
      alert(response);
    }
  }).catch(function(error) {
    console.log(error);
  });
}
