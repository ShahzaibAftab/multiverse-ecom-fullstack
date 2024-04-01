import AxiosInstance from "../utils/AxiosInstance";

const GetAdmin = async () => {
    const response = await AxiosInstance.get('api/admin/get-admin');
    return response.data;
};
export default GetAdmin;