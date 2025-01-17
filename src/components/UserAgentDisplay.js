
import React from 'react';
import { Card, Tree, Typography, Divider } from 'antd';

const {Text } = Typography;

const renderTreeData = (data) => {
    if (!data) return null;

    return Object.keys(data).map((key) => {
        const value = data[key];
        const isObject = typeof value === 'object' && value !== null;

        return {
            title: (
                <>
                    <Text strong>{key}:</Text> {isObject ? '' : value || 'No data'}
                </>
            ),
            key,
            children: isObject ? renderTreeData(value) : [],
        };
    });
};

const UserAgentDisplay = ({ data}) => {

    return (
        <div style={{ marginTop: '20px' }}>
            <Card bordered={false} style={{ width: '100%' }}>

                <Divider />

                <Tree
                    treeData={renderTreeData(data)}
                    showLine
                    defaultExpandAll
                    blockNode
                />
            </Card>
        </div>
    );
};

export default UserAgentDisplay;