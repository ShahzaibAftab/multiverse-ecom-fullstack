import React from "react";
import {
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import Header from "../components/Header";
import { useQuery } from "react-query";
import getProduct from "../api/GetProduct";
import { Spinner } from "react-bootstrap";
import ShopPageProduct from "./ShopPageProduct";

function ShopPage() {

    const { isLoading, error, data } = useQuery({ queryKey: ['todos'], queryFn: getProduct })
    if (isLoading) {
        return <div className='d-flex justify-content-center align-center vh-100'> <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner></div>
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }
    return (
        <>
            <Header />
            <MDBContainer fluid className="my-5 px-5">
                <MDBRow style={styles.container}>
                    {data?.map((dataObj, index) => (
                        <ShopPageProduct key={index} data={dataObj} />
                    ))}
                    {console.log(data)}
                </MDBRow>
            </MDBContainer>
        </>
    );
}
const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px',
    },
};

export default ShopPage;