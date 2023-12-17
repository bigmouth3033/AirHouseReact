import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UserQuery } from "api/userApi";
import UserItem from "./UserItem";
import { GetAllUser, GetAllUserQuery } from "api/chatApi";
import Message from "./Message";


const ChatBox = styled.div`
  & .grid-container{
    display: grid;
    grid-template-columns: 30% 70% ;
  }  
`;

export default function Chat(props) {
  const userQuery = UserQuery();  
  const getAllUserQuery = GetAllUserQuery();
  const [selectedUser,setSelectedUser] = useState(false);
  
  const changeSelectedUser = (item) =>{
    setSelectedUser(item);    
  }

  useEffect(()=>{
    GetAllUser()
  .then(result => {
    setSelectedUser(result[0]);
  })
  .catch(error => {
    console.error(error);
  });
  },[])


  return (
    <ChatBox>
      {getAllUserQuery.isLoading ? <div>Loading...</div> :
        (
          <div>
            Message
            <div className="grid-container">
              <div className="item1">
                {getAllUserQuery.data.map((item,index) => {
                  return (
                    <span key={index} onClick={() => changeSelectedUser(item)}>
                      <UserItem UserInfo={item}/>
                    </span>
                  )
                })}
              </div>
              <div className="item2">
                {
                  selectedUser && <Message UserInfo={selectedUser}/>
                }
              </div>
              {/* <div className="item3">3</div> */}
              
            </div>
          </div>
        )}

    </ChatBox>
  );
}
