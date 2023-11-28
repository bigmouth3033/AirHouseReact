import React, { useEffect } from "react";
import Pusher from "pusher-js";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const allMessage = [];

  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("6685cbfa31bc0534f065", {
      cluster: "ap1",
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      alert("arst");
      allMessage.push(data);
      setMessages(allMessage);
    });
  }, []);

  return (
    <div>
      {allMessage}
      <button onClick={() => console.log(allMessage)}>click</button>
    </div>
  );
}
