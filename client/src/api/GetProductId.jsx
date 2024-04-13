import axios from "axios";
import { BASEURL } from "../App";

const GetProductId = async (id) => {
    console.log(' i m id',id)
  const response = await axios.get(BASEURL + `/api/product/display-products/${id}`);
  return response.data;
};
export default GetProductId;