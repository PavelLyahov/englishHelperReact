import { BASE_URL, API_URL, ENDPOINT } from '../constants/apiconstants';
import axios from 'axios';

const serverURL = BASE_URL + API_URL + ENDPOINT.PHRASE_TRAINING;

const getPhrases = async () => {
	try {
		const response = await axios.get(serverURL);
		console.log('Ответ от сервера:', response.data.data.phrases);
		return response.data.data.phrases;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

const getFiles = async () => {
	try {
		const response = await axios.get(serverURL + "/files");
		console.log('Ответ от сервера:', response.data.data.phrases);
		return response.data.data.phrases;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

