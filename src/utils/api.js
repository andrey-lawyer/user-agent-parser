import axios from "axios";

const path = "https://useragent-parser.onrender.com/api"

export const getDataFromUserAgent = async (useragent) => {
    const { data } = await axios.get(`${path}/user-agent/parse-query`, {
        params: {
            userAgent: useragent,
        },

    });
    return data;
}

export const  getDataFromBrowser = async () => {
    const { data } = await axios.get(`${path}/user-agent/parse-header`,);
    return data;
}

export const  healthCheck = async () => {
    const { data } = await axios.get(`${path}/health`,);
    return data;
}

