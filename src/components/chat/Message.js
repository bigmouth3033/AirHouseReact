import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pusher from "pusher-js";
import { GetMessageQuery } from "api/chatApi";
import axiosClient from "api/axiosClient";

const Box = styled.div``;

export default function Message(props) {
  const user1 = props.info.from_email;
  const user2 = props.info.to_email;
  const [messages, setMessages] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [message, setMessage] = useState();

  const setNewMessage = (data) => {
    // console.log(data);
    setMessages(data);
  };

  const setNewAllMessages = (data) => {
    setAllMessages(data);
  };

  useEffect(() => {
    // fetchData();
    getMessage({ user1, user2 });
    setAllMessages([]);

    let name = [user1, user2].sort().join("-");
    console.log(name);

    var pusher = new Pusher("014b8eb7bfaf79153ac0", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe(name);
    channel.bind("my-event", function (data) {
      JSON.stringify(data);
      // setNewMessage(data);
      let convertData = {
        from_email: data.user1,
        to_email: data.user2,
        body: data.message,
      };
      setAllMessages((pre) => [...pre, convertData]);
      // setNewAllMessages(convertData);
      console.log("chay lan n");
    });
  }, [user2]);

  // const getMessageQuery = GetMessageQuery(user1, user2);

  // useEffect(() => {
  //   if (getMessageQuery.isSuccess) {
  //     setMessages(getMessageQuery.data);
  //   }
  // }, [getMessageQuery.status]);

  let name = [user1, user2].sort().join("-");
  console.log(name);

  var pusher = new Pusher("014b8eb7bfaf79153ac0", {
    cluster: "ap1",
  });

  var channel = pusher.subscribe(name);
  channel.bind("my-event", function (data) {
    JSON.stringify(data);
    // setNewMessage(data);
    let convertData = {
      from_email: data.user1,
      to_email: data.user2,
      body: data.message,
    };
    setAllMessages((pre) => [...pre, convertData]);
    // setNewAllMessages(convertData);
    console.log("chay lan n");
  });

  const fetchData = async () => {
    try {
      const response = fetch("http://127.0.0.1:8000/api/getMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user1,
          user2,
        }),
      })
        .then((response) => response.json())
        .then((data) => setNewMessage(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getMessage = async (payload) => {
    let response = await axiosClient.get("getMessage", {
      params: { user1: payload.user1, user2: payload.user2, message: payload.message },
    });
    setNewMessage(response.data);
    return response.data;
  };

  const clearMessages = () => {
    setMessages([]); // Xóa toàn bộ giá trị trong state messages
  };

  const sendMessage = async (payload) => {
    let response = await axiosClient.post("sendMessage", payload);
    // console.log(response.data);
    return response.data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user1", user1);
    formData.append("user2", user2);
    formData.append("message", message);
    let rs = sendMessage(formData);
    // console.log(rs);
    setMessage("");
  };
  return (
    <Box>
      <div>{props.info.to_email}</div>
      <div>
        {messages.map((item, index) => {
          return (
            <div key={index}>
              {item.from_email} ===={item.body}
            </div>
          );
        })}
      </div>
      <div>
        {allMessages.map((item, index) => {
          return (
            <div key={index}>
              {item.from_email} ===={item.body}
            </div>
          );
        })}
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </form>
      </div>
    </Box>
  );
}
