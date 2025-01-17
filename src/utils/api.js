import axios from "axios";

const path = "https://useragent-parser.onrender.com/api/user-agent/parse"

export const  getDataFromUserAgent = async (useragent) => {
    const { data } = await axios.post(path,useragent, {
        headers: {
            "Content-Type": "text/plain",
            Accept: "application/json",
        },
    });
    return data;
}

export const  getDataFromBrowser = async () => {
    const { data } = await axios.get(path);
    return data;
}

