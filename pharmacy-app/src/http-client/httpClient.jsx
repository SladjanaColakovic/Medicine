import axios from "axios";

export const get = (url) => {
    return axios.get(url);
}

export const post = (url, data) => {
    return axios.post(url, data);
}

export const postWithParams = (url, data, params) => {
    return axios.post(url, data, { params });
}

export const put = (url, data) => {
    return axios.put(url, data);
}

export const remove = (url, params) => {
    return axios.delete(url, { params });
}

export const getWithParams = (url, params) => {
    return axios.get(url, { params });
}