import axiosInstance from "../utils/AxiosInstance";

const GetCustomer = async () => {
  const response = await axiosInstance.get('api/client/all-client-account');
  return response.data;
};
export default GetCustomer;