import axiosClient from "./axiosClient";
import { useQuery } from "@tanstack/react-query";

const filterById = async (query) => {
  try {
    const id = query.queryKey[1];
    const response = await axiosClient.get("filterByIdProperty?id=" + id);
    return response.data;
  } catch (error) {
    // Xử lý lỗi ở đây
    console.error("Error fetching data:", error);
    throw error; // Đẩy lỗi để React Query có thể xử lý nó.
  }
};

export const PropertyQueryId = (id) => {
  const propertyQuery = useQuery({
    queryKey: ["property", id],
    queryFn: filterById,
  });

  return propertyQuery;
};
