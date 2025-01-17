import React from 'react';
import { Typography } from "antd";
const {Paragraph, Link } = Typography;

const FooterInfo = () => {
    return (
        <div style={{ marginTop: '20px', textAlign: 'center', padding: '20px' } }>
            <Paragraph>Developed by Andrey Uvarov</Paragraph>
            <Link href="https://github.com/andrey-lawyer" target="_blank">
                GitHub: github.com/andrey-lawyer
            </Link>
        </div>
    );
};

export default FooterInfo;