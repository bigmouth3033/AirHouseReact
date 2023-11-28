import React, { useEffect, useState } from 'react'
import DialogBox from './DialogBox'
import styled from 'styled-components'
import Message from './Message'

const Box = styled.div`
  & .containerChat{
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100%;
    
  }
  & .sidebar{

  }
  &.content{

  }
`

export default function Chat(props) {
  const [selectedUser, setSelectedUser] = useState(false);
  const fromEmail = props.userInfor.data.user.email;
  const [allMessageUser, setAllMessageUser] = useState([]);
  useEffect(() => {
    const response = fetch('http://127.0.0.1:8000/api/getAllUser', {
      method: "POST",
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify({
        fromEmail

      })
    }).then(response => response.json())
      .then(data => setAllMessageUser(data));
  }, [])

  const handleUserClick = (item) => {
    setSelectedUser(item);
    // console.log(item);
  }

  return (
    <Box>
      <form>
        <input type='text' />
      </form>
      <div className='containerChat'>
        <div className='sidebar'>
          <ul>
            {
              allMessageUser.map((item, index) => {
                return (
                  <li key={index} onClick={() => handleUserClick(item)}>
                    <DialogBox userInfor={item} />
                  </li>
                )
              }
              )}
          </ul>
        </div>
        <div className='content'>
          {selectedUser && <Message info={selectedUser}/>}
        </div>
      </div>
    </Box>
  )
}
