import axios from "axios";

const defaultOptions = {
  baseURL: "http://rezayari.ir:5050",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

const request = axios.create(defaultOptions);

export default request;
