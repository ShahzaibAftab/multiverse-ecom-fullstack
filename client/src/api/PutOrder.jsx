import axios from "axios";
import { BASEURL } from "../App";

const PutOrder = async (id, editedValues) => {
    console.log('passed',editedValues)
    const response = await axios.put(`${BASEURL}/api/order/update-order-detail/${id}`, editedValues);
    return response.data;
};
export default PutOrder;