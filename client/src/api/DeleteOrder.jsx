
import { BASEURL } from "../App";
import axiosInstance from "../utils/AxiosInstance";

const DeleteOrder = async (id) => {
    const response = await axiosInstance.delete(`${BASEURL}/api/order/delete-order-record/${id}`);
    return response.data;
};
export default DeleteOrder;