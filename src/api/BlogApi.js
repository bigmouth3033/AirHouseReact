import axiosClient from "./axiosClient";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

//phần dành riêng cho lưu ảnh khi dùng nút uploadImage khi tạo bài blog
export const uploadImage = async (payload) => {
  const response = await axiosClient.post("/uploadImage", payload); //qua nhánh main thì blog/uploadImage
  return response.data;
};

export const UploadImageMutation = () => {
  const uploadMutation = useMutation({
    mutationFn: uploadImage,
  });

  return uploadMutation;
};

const createBlog = async (payload) => {
  const response = await axiosClient.post("createBlog", payload);
  return response.data;
};

const readBlog = async (query) => {
  const currentPage = query.queryKey[1];
  const response = await axiosClient.get("readCurrentPage", {
    params: { page: currentPage },
  });
  return response.data;
};

const updateBlog = async (payload) => {
  const response = await axiosClient.post("updateBlog", payload);
  return response.data;
};
const deleteBlog = async (id) => {
  console.log(id);
  const response = await axiosClient.get("deleteBlog/" + id);
  return response.data;
};

const filterById = async (query) => {
  const id = query.queryKey[1];
  const response = await axiosClient.get("filterByIdBlog", {
    params: { id: id },
  });
  return response.data;
};

export const BlogQueryId = (id) => {
  const blogQuery = useQuery({
    queryKey: ["blog", id],
    queryFn: filterById,
  });

  return blogQuery;
};

export const CreateBlogMutation = () => {
  //   const queryClient = useQueryClient();
  const categoryMutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ["Blog"] });
      //thay bằng onSuccess bên nút submit
    },
  });

  return categoryMutation;
};

export const UpdateBlogMutation = () => {
  const queryClient = useQueryClient();

  const categoryMutation = useMutation({
    mutationFn: updateBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Blog"] });
    },
  });

  return categoryMutation;
};

export const DeleteBlogMutation = () => {
  const queryClient = useQueryClient();

  const categoryMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ["Blog"] });
    },
  });

  return categoryMutation;
};

export const ReadBlogPageQuery = (page) => {
  const BlogQuery = useQuery({
    queryKey: ["Blog", page],
    queryFn: readBlog,
  });

  return BlogQuery;
};