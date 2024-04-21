import axios, { AxiosError, CanceledError } from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
  },
  params: {
    //  None at this time.  You will put API Keys here or other parameters
  },
});

export { axiosClient, AxiosError, CanceledError };
