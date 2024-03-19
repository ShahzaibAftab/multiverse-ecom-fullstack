import axios from "axios";
import { BASEURL } from "../App";

const getProduct = async () => {
  const response = await axios.get(BASEURL + '/api/product/display-all-products');
  return response.data;
};
export default getProduct;