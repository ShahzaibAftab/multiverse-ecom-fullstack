import AxiosInstance from "../utils/AxiosInstance";

const GetAdmin = async () => {
  const response = await AxiosInstance.get('api/client/all-client-account');
  return response.data;
};
export default GetAdmin;