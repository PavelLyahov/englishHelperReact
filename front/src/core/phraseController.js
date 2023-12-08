import { BASE_URL, API_URL, ENDPOINT } from '../constants/apiconstants';
import axios from 'axios';

const serverURL = BASE_URL + API_URL + ENDPOINT.PHRASES;

const getPhrases = async () => {
	try {
		const response = await axios.get(serverURL);
		console.log('Ответ от сервера:', response.data.data.phrases);
		return response.data.data.phrases;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

const createPhrase = async (phrase) => {
	try {
		const response = await axios.post(serverURL, phrase);
		console.log('Ответ от сервера:', response.data.data.phrase);
		return response.data.data.phrase;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

const patchPhrase = async (phrase) => {
	try {
		const response = await axios.patch(serverURL, phrase);
		console.log('Ответ от сервера:', response.data.data.phrase);
		return response.data.data.phrase;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

const deletePhrase = async (phrase) => {
	try {
		const response = await axios.delete(serverURL, { data: phrase });
		console.log('Ответ от сервера:', response.data.data.phrase);
		return response.data.data.phrase;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

const API = {
	getPhrases,
	createPhrase,
	patchPhrase,
	deletePhrase,
};

export default API;
