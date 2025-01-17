import React from 'react';
import { Spin, Divider, Typography } from 'antd';

const { Text } = Typography;

const Loader = ({loading}) => {

    return (
        <div style={{textAlign: 'center', padding: '20px'}}>

            <Divider>Loading Data...</Divider>
            <Spin spinning={loading} size="large"/>
            <div className="marquee-container">
                <Text strong className="marquee">
                    This may take some time as we are processing and retrieving data from the server.
                </Text>

            </div>

        </div>
    );
};

export default Loader;