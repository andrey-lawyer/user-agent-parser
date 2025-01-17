import { Input, Button } from 'antd';
import {useState} from "react";

const UserAgentForm = ({ onSubmit }) => {
    const [userAgent, setUserAgent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userAgent) {
            onSubmit(userAgent);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                value={userAgent}
                onChange={(e) => setUserAgent(e.target.value)}
                placeholder="Enter a User-Agent"
                style={{ width: '300px', marginRight: '10px', marginBottom: '10px' }}
            />
            <Button type="primary" htmlType="submit">Submit</Button>
        </form>
    );
};

export default UserAgentForm;
