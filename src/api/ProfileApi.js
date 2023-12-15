import { useMutation } from "@tanstack/react-query";

const { default: axiosClient } = require("./axiosClient");


export const updateUser = async (payload) => {
    let response = await axiosClient.post("updateUser", payload);    
    return response.data;
  };

export const useUpdateUserMutation = () =>{
  const mutation = useMutation({
    mutationFn:  (payload) =>{
      return updateUser(payload);
    }
  })
}
