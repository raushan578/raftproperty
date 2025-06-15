import client from "@/apis/client";

export const fetchProperties = async () => {
  const { data } = await client.get('/properties');
  return data;
};
