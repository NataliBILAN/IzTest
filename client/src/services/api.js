import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const getAllPersons = () => axios.get(BASE_URL).then((response) => response.data.data);
const updatePerson = (person) => axios.put(BASE_URL, person).then((response) => response.data.data);

export { getAllPersons, updatePerson };
