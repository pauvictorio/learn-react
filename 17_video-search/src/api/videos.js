import axios from 'axios'
import { API_KEY } from '../config'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/search',
	params: {
		part: 'snippet',
		key: API_KEY,
	},
})
