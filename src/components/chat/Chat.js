import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserQuery } from "api/userApi";
import UserItem from "./UserItem";
import { GetAllUser, GetAllUserQuery } from "api/chatApi";
import Message from "./Message";
import { useLocation, useParams } from "react-router-dom";
import Pusher from 'pusher-js';


const ChatBox = styled.div`
  & .grid-container{
    display: grid;
    grid-template-columns: 30% 70% ;
  }  
`;

export default function Chat(props) {
  let data = useLocation();
  const userQuery = UserQuery();
  const getAllUserQuery = GetAllUserQuery();
  const [selectedUser, setSelectedUser] = useState(false);
  const [lastMessage, setLastMessage] = useState('none');
  const [newUser, setNewUser] = useState(false);  
  console.log('data.state',data.state);

  useEffect(() => {
    if (userQuery.isSuccess) {
      var pusher = new Pusher('014b8eb7bfaf79153ac0', {
        cluster: 'ap1'
      });

      // console.log(userQuery.data.user.email);
      const channel_name = userQuery.data.user.email;
      var channel = pusher.subscribe(channel_name);
      channel.bind('my-event', function (data) {
        alert(JSON.stringify(data));
      });
    }
    return () =>{
      const channel_name = userQuery.data.user.email;
      pusher.unsubscribe(channel_name);
    }
  }, [userQuery.isSuccess])



  useEffect(() => {
    GetAllUser()
      .then(result => {
        setSelectedUser(result[0]);

        if (getAllUserQuery.isSuccess) {
          console.log('user query succes', true);
          if (data.state) {
            console.log('co data.state');
            const isIncluded = getAllUserQuery.data.some((item) => item.email == data.state.user_Email);
            if (isIncluded) {
              console.log('isIncluded', true);
            } else {
              console.log('Not Included and setState', data.state.user_Email)
              const NewUser = {
                email: data.state.user_Email,
                first_name : data.state.first_Name,
                last_name : data.state.last_Name                 
              }
              console.log(NewUser);
              // setNewUser({ email: data.state.user_Email });
              setNewUser(NewUser);
              setSelectedUser(NewUser);
            }
          } else {
            console.log('khong co data.state');
          }

        } else {
          console.log('userquery faill', false);
        }


      })
      .catch(error => {
        console.error(error);
      });
  }, [getAllUserQuery.isSuccess])

  const handleChildLastMessageState = (item) => {
    setLastMessage(item);
  }

  const changeSelectedUser = (item) => {
    setSelectedUser(item);
  }
  const checkIncluded = (emailFromState) => {
    if (getAllUserQuery.isSuccess) {
      console.log('user query succes', true);
      // const isIncluded = getAllUserQuery.data.some((item) => item.email == data.state.user_Email);
      const isIncluded = getAllUserQuery.data.some((item) => item.email == emailFromState);
      if (isIncluded) {
        console.log(true)
      } else {
        setNewUser(true);
        console.log('userquery faill', false);
      }
    }
  }

  return (
    <ChatBox>
      {getAllUserQuery.isLoading ? <div>Loading...</div> :
        (
          <div>
            Message
            <div className="grid-container">
              <div className="item1">
                {newUser && <span onClick={() => changeSelectedUser(newUser)}>
                  <UserItem UserInfo={newUser} />
                </span>}
                {getAllUserQuery.data.map((item, index) => {
                  return (
                    <span key={index} onClick={() => changeSelectedUser(item)}>
                      <UserItem UserInfo={item} lastMessage={lastMessage} />
                    </span>
                  )
                })}
              </div>
              <div className="item2">
                {
                  selectedUser && <Message UserInfo={selectedUser} callback={handleChildLastMessageState} />
                }
              </div>

            </div>
          </div>
        )
      }

    </ChatBox>
  );
}