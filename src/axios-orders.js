import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-10682.firebaseio.com/'
});

export default instance;
