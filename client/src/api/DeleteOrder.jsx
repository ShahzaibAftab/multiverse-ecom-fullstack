import axios from "axios";
import { BASEURL } from "../App";

const DeleteOrder = async (id) => {
    const response = await axios.delete(`${BASEURL}/api/order/delete-order-record/${id}`);
    return response.data;
};
export default DeleteOrder;