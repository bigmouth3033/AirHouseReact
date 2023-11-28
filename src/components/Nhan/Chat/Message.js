import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const Box = styled.div`
`
export default function Message(props) {
    console.log('message comp', props.info.to_email)
    const user1 = props.info.from_email;
    const user2 = props.info.to_email;
    const [messages, setMessages] = useState([]);

    const setNewMessage = (data) => {
        setMessages(data);
    }

    useEffect(() => {
        fetchData();
    }, [user2]);

    const fetchData = async () => {
        try {
            const response = fetch('http://127.0.0.1:8000/api/getMessage', {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                    user1,
                    user2
                })
            }).then(response => response.json())
                .then(data => setNewMessage(data));
        }
        catch (error) {
            console.log(error);
        }
    }

    const clearMessages = () => {
        setMessages([]); // Xóa toàn bộ giá trị trong state messages
    };
    return (
        <Box>
            <div>
                {props.info.to_email}
            </div>
            <div>
                {
                    messages.map(item => {
                        return (
                            <div>1{item.body}</div>
                        )
                    })
                }
            </div>
            <button onClick={clearMessages}>Xóa tin nhắn</button>
        </Box>
    )
}
