import { GetMessage, GetMessageQuery } from 'api/chatApi';
import React, { useEffect, useState } from 'react'

export default function Message(props) {
    const [AllMessages, setAllMessages] = useState([]);



    useEffect(() => {
        console.log(props.UserInfo.email);
        const formData = new FormData();
        formData.append('user_to_email', props.UserInfo.email);
        GetMessage(formData)
            .then(result => {
                console.log('fetch', result)
                setAllMessages(result);
            })
            .catch(error => {
                console.error(error);
            });
    }, [props.UserInfo.email])


    return (
        <div>
            <div>tin nhan</div>
            {props.UserInfo.email}
            {AllMessages.map((item, index) => {
                return (
                    <div key={index}>
                        {item.from_email}: {item.body}
                    </div>
                )
            })}
        </div>
    )
}
