
import { BASEURL } from "../App";
import axiosInstance from "../utils/AxiosInstance";

const DeleteProduct = async (id) => {
    const response = await axiosInstance.delete(`${BASEURL}/api/product/delete-product/${id}`);
    return response.data;
};
export default DeleteProduct;