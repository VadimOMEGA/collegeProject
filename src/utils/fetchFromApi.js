import axios from "axios";

export const fetchFromApi = async (url, method = 'GET', data = null) => {
  try {
    let response;

    if (method.toUpperCase() === 'GET') {
      response = await axios.get(url);
    } else if (method.toUpperCase() === 'POST') {
      response = await axios.post(url, data);
    } else {
      throw new Error('Unsupported HTTP method');
    }

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching from API:', error);
    throw error;
  }
};