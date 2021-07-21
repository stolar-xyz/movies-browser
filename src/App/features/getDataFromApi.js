import axios from 'axios';

export const getDataFromApi = async path => {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
