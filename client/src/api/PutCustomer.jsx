
import { BASEURL } from "../App";
import axiosInstance from "../utils/AxiosInstance";

const PutCustomer = async (id, editedValues) => {
    const response = await axiosInstance.put(`/api/client/update-client-account/${id}`, editedValues);
    return response.data;
};
export default PutCustomer;