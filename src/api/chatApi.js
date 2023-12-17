import axiosClient from "./axiosClient";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const getMessage = async (query) => {
  const user1 = query.queryKey[1];
  const user2 = query.queryKey[2];

  let response = await axiosClient.get("getMessage", {
    params: { user1: user1, user2: user2 },
  });

  return response.data;
};
// export const GetMessageQuery = (user1, user2) => {
//   const messageQuery = useQuery({
//     queryKey: ["message", user1, user2],
//     queryFn: getMessage,
//   });

//   return messageQuery;
// };

const SendMessage = async (payload) => {
  let response = await axiosClient.get("sendMessage", {
    params: { user1: payload.user1, user2: payload.user2, message: payload.message },
  });
  return response.data;
};


// 17/12
 export const GetAllUser = async () => {
  let response = await axiosClient.get("getAllUser");
  return response.data;
};

export const GetAllUserQuery = () =>{
  const AllUserQuery = useQuery({
    queryKey: ['AllUser'],
    queryFn: GetAllUser,
  });
  return AllUserQuery;
}

export const GetMessage = async (payload) =>{
  let response = await axiosClient.post("getMessage",payload);
  return response.data;
}

export const GetMessageQuery =  (user_to_email) =>{
  const MessageQuery = useQuery({
    queryKey: ['chat',user_to_email],
    queryFn: () => GetMessage(user_to_email),
    keepPreviousData: true,
    retry: 1,
  })
  return MessageQuery;

}
