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
  const [render, setRender] = useState('');
  const getAllUserQuery = GetAllUserQuery();
  const [allUser, setAllUSer] = useState([]);
  const [selectedUser, setSelectedUser] = useState(true);




  ////////
  useEffect(() => {
    setAllUSer(getAllUserQuery.data);

    if (getAllUserQuery.isSuccess && data.state) {
      const isIncluded = getAllUserQuery.data.some((item) => item.email == data.state.user_Email);
      if (isIncluded) {
        console.log('true');
      } else {
        console.log('not true')
        const NewUser = {
          email: data.state.user_Email,
          first_name: data.state.first_Name,
          last_name: data.state.last_Name
        }
        setAllUSer(pre => [NewUser, ...pre])

        console.log('alluser', allUser);
      }
    }
  }, [getAllUserQuery.isSuccess])

  useEffect(() => {
    if (allUser) {
      console.log('alluser', allUser[0]);
      setSelectedUser(allUser[0])
    }
  }, [allUser])

  // useEffect(() => {
  //   if (userQuery.isSuccess) {
  //     var pusher = new Pusher('014b8eb7bfaf79153ac0', {
  //       cluster: 'ap1'
  //     });

  //     // console.log(userQuery.data.user.email);
  //     const channel_name = userQuery.data.user.email;
  //     var channel = pusher.subscribe(channel_name);
  //     channel.bind('my-event', function (data) {
        
        
  //     });
  //   }
  //   return () =>{
  //     const channel_name = userQuery.data.user.email;
  //     pusher.unsubscribe(channel_name);
  //   }
  // }, [userQuery.isSuccess,render])
  ///////
  const changeSelectedUser = (item) => {
    setSelectedUser(item);
  }
  if (getAllUserQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getAllUserQuery.isError) {
    return <div>Error: </div>;
  }
  return (
    <ChatBox>      
      <div className="grid-container">
        <div className="item1">
          {allUser && allUser.map((item, index) => {
            return (
              <span key={index} onClick={() => changeSelectedUser(item)}>
                <UserItem UserInfo={item} />
              </span>
            )
          })}

        </div>
        <div className="item2">
          {
            selectedUser && <Message UserInfo={selectedUser} />
          }
        </div>
        <div className="item3">

        </div>
      </div>


    </ChatBox>
  );
}