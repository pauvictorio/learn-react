import Axios from 'axios';
import API_KEY from '../config'

export default Axios.create({
	baseURL: 'https://api.unsplash.com/photos/random',
	headers: {
		Authorization: `Client-ID ${API_KEY}`
	}
})