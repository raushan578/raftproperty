import axios from 'axios';
import Constants from 'expo-constants';

// 👇 Replace this with your actual local IP if testing on physical device
const LOCAL_DEV_API = 'http://10.0.2.2:3001'; // Use 'http://<your-ip>:3001' for physical device

const client = axios.create({
  baseURL: LOCAL_DEV_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
