import {useEffect, useState} from "react";
import {getDataFromBrowser, healthCheck} from "../utils/api";

export const useGetdata = () => {

    const [userAgentData, setUserAgentData] = useState(null);
    const [loading, setLoading] = useState(false);

    const [initialLoad, setInitialLoad] = useState(true);
    const [isUserAgentCurrent, setIsUserAgentCurrent] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await getDataFromBrowser();
            setUserAgentData(data);

        } catch (error) {
            console.error("Failed to fetch browser data:", error);
        } finally {
            setLoading(false);
            setInitialLoad(false);
        }
    };

    useEffect(() => {
        fetchData();

        setTimeout(() => {
            healthCheck().then()
        }, 30000);
    }, []);
    return {loading,  userAgentData, setUserAgentData,setLoading, initialLoad, isUserAgentCurrent, setIsUserAgentCurrent }
}