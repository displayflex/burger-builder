import axios from 'axios';

const instance = axios.create({
	baseURL: `https://burger-builder-480eb.firebaseio.com/`
});

export default instance;
