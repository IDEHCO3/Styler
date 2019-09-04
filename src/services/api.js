import axios from 'axios';

const api = axios.create({ baseURL: 'http://ggt-des.ibge.gov.br/styles/' });

export default api;