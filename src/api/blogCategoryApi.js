import React from "react";
import axiosClient from "./axiosClient";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const createBlogCategoryFn = async (payload) => {
  const response = await axiosClient.post("createBlogCategory", payload);
  return response.data;
};

const readBlogCategoryFn = async () => {
  const response = await axiosClient.get("readBlogCategory");
  return response.data;
};

const updateBlogCategory = async (payload) => {
  const response = await axiosClient.post("updateBlogCategory", payload);
  return response.data;
};

const deleteBlogCategory = async (id) => {
  const response = await axiosClient.post("deleteBlogCategory", id);
  return response.data;
};

export const CreateBlogCategoryMutation = () => {
  const queryClient = useQueryClient();

  const categoryMutation = useMutation({
    mutationFn: createBlogCategoryFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["BlogCategory"] });
    },
  });

  return categoryMutation;
};

export const UpdateBlogCategoryMutation = () => {
  const queryClient = useQueryClient();

  const categoryMutation = useMutation({
    mutationFn: updateBlogCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["BlogCategory"] });
    },
  });

  return categoryMutation;
};

export const DeleteBlogCategoryMutation = () => {
  const queryClient = useQueryClient();

  const categoryMutation = useMutation({
    mutationFn: deleteBlogCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["BlogCategory"] });
    },
  });

  return categoryMutation;
};

export const BlogCategoryQuery = () => {
  const blogCategoryQuery = useQuery({
    queryKey: ["BlogCategory"],
    queryFn: readBlogCategoryFn,
  });

  return blogCategoryQuery;
};
