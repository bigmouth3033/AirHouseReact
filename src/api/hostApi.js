import axiosClient from "./axiosClient";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";


const createProperty = async (payload) => {
  const response = await axiosClient.post("create-property", payload);
  return response.data;
};

export const CreatePropertyMutation = () => {
  const propertyMutation = useMutation({
    mutationFn: createProperty,
  });

  return propertyMutation;
};

const readCurrentPage = async (query) => {
  const currentPage = query.queryKey[2];
  const response = await axiosClient.get("read-properties/all/" + currentPage);
  return response.data;
};

export const PropertiesCurrentPageQuery = (page) => {
  const propertiesQuery = useQuery({
    queryKey: ["properties", "all", page],
    queryFn: readCurrentPage,
  });

  return propertiesQuery;
};

const readPropertyById = async (query) => {
  const id = query.queryKey[1];

  const response = await axiosClient.get("read-property/" + id);
  return response.data;
};

export const PropertyIdQuery = (id) => {
  const propertyQuery = useQuery({
    queryKey: ["property", id],
    queryFn: readPropertyById,
  });

  return propertyQuery;
};

const acceptProperty = async (payload) => {
  const response = await axiosClient.post("property/accept", payload);
  return response.data;
};

export const AcceptPropertyMutation = () => {
  const propertyMutation = useMutation({
    mutationFn: acceptProperty,
  });

  return propertyMutation;
};

const denyProperty = async (payload) => {
  const response = await axiosClient.post("property/deny", payload);
  return response.data;
};

export const DenyPropertyMutation = () => {
  const propertyMutation = useMutation({
    mutationFn: denyProperty,
  });

  return propertyMutation;
};
