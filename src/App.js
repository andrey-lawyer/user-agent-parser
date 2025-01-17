import React from "react";
import { Layout } from "antd";
import Greeting from "./components/Greeting";
import UserAgentForm from "./components/UserAgentForm";
import UserAgentDisplay from "./components/UserAgentDisplay";
import { getDataFromUserAgent} from "./utils/api";
import Loader from "./components/Loader";
import {useGetdata} from "./hooks/useGetdata";
import FooterInfo from "./components/FooterInfo";

const { Header, Content } = Layout;

const App = () => {

    const {loading,  userAgentData, setUserAgentData,setLoading,initialLoad, isUserAgentCurrent, setIsUserAgentCurrent } = useGetdata()

    const handleUserAgentSubmit = async (userAgent) => {
        setLoading(true);
        try {
            const data = await getDataFromUserAgent(userAgent);
            setIsUserAgentCurrent(false);
            setUserAgentData(data);
        } catch (error) {
            console.error("Error fetching new user agent data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{ backgroundColor: "#1890ff", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "#fff" }}>User-Agent Parser</h1>
            </Header>
            <Content style={{padding: "20px"}}>

                <Greeting/>
                <UserAgentForm onSubmit={handleUserAgentSubmit}/>
                <div style={{marginTop: '20px'}}>
                    <h2>{isUserAgentCurrent ? 'Your Current User-Agent Information' : 'User-Agent Information for Submitted Request'}</h2>
                </div>
                {loading ? (
                    <Loader loading={loading} />
                ) : (
                    userAgentData && !initialLoad && (
                        <UserAgentDisplay
                            data={userAgentData}
                        />
                    )
                )}
            </Content>
            <FooterInfo/>
        </Layout>
    );
};

export default App;
