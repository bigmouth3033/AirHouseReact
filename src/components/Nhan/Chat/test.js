import React, { useState } from 'react';

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
};

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'User 1', messages: ['Message 1', 'Message 2'] },
    { id: 2, name: 'User 2', messages: ['Message 3', 'Message 4'] },
    { id: 3, name: 'User 3', messages: ['Message 5', 'Message 6'] },
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && <MessageList messages={selectedUser.messages} />}
    </div>
  );
};

export default UserList;