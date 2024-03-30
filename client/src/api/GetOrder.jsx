import axios from "axios";
import { BASEURL } from "../App";

const getOrder = async () => {
  const response = await axios.get(BASEURL + '/api/order/display-all-order');
  return response.data;
};
export default getOrder;