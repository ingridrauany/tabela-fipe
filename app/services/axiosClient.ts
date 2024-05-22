import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/',
});
