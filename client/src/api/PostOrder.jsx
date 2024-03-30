import axios from "axios";
import { BASEURL } from "../App";

const PostOrder = async (data) => {
  const response = await axios.post(BASEURL + '/api/order/add-order',data);
  return response.data;
};
export default PostOrder;