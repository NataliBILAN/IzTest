import axios from 'axios';

const searchByName = (q) => axios.get(`http://localhost:8080/?name=${q}`).then((response) => response.data.data);
const searchByCity = (q) => axios.get(`http://localhost:8080/?city=${q}`).then((response) => response.data.data);
const searchByEmail = (q) => axios.get(`http://localhost:8080/?email=${q}`).then((response) => response.data.data);
const searchByPhone = (q) => axios.get(`http://localhost:8080/?phone=${q}`).then((response) => response.data.data);
const searchByFunds = (q) => axios.get(`http://localhost:8080/?funds=${q}`).then((response) => response.data.data);

export { searchByName, searchByCity, searchByEmail, searchByPhone, searchByFunds };
