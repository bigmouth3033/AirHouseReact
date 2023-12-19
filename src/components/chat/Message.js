import { GetMessage, GetMessageQuery, SendMessageMutation } from 'api/chatApi';
import { UserQuery } from 'api/userApi';
import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js';
import styled from 'styled-components';

const StyledBox = styled.div`
    & .Message-Container{        
        /* display: flex;
        flex-direction: column-reverse; */
        overflow-y: scroll;
        border: solid thin black;
        height: 500px;
    }

`
export default function Message(props) {
    const userQuery = UserQuery();
    const sendMessageMutation = SendMessageMutation();
    const [AllMessages, setAllMessages] = useState([]);
    const [allMessagesAfterSub, setAllMessagesAfterSub] = useState([]);
    const [message, setMessage] = useState('');



    useEffect(() => {
        // console.log(props.UserInfo.email);
        const formData = new FormData();
        formData.append('user_to_email', props.UserInfo.email);
        GetMessage(formData)
            .then(result => {
                setAllMessages(result);
            })
            .catch(error => {
                console.error(error);
            });

        //Pusher 
        var pusher = new Pusher('014b8eb7bfaf79153ac0', {
            cluster: 'ap1'
        });

        const channel_name = [userQuery.data.user.email, props.UserInfo.email].sort().join("-");
        var channel = pusher.subscribe(channel_name);
        channel.bind('my-event', function (data) {
            setAllMessagesAfterSub(pre => [...pre, data]);
        });

        return () => {
            channel.unsubscribe(channel_name);
        }
    }, [props.UserInfo.email])

    const handleMessage = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user_to_email', props.UserInfo.email);
        formData.append('message', message);
        sendMessageMutation.mutate(formData);
        setMessage('');
    }
    console.log(allMessagesAfterSub);

    return (
        <StyledBox>
            <div className='Message-Container'>
                <div>tin nhan</div>
                {AllMessages.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.from_email}: {item.body}
                        </div>
                    )
                })}
                {
                    allMessagesAfterSub.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.user1}: {item.message}
                            </div>
                        )
                    })
                }
                <form onSubmit={(e) => handleMessage(e)}>
                    <input type='text' value={message} onChange={e => setMessage(e.target.value)} />
                </form>
            </div>
        </StyledBox>
    )
}
