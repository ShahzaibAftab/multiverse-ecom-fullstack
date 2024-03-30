import React from 'react'
import html2canvas from 'html2canvas';

const Orderconfirmed = () => {
    const data = {

        "customerName": "Jane Smith",
        "contact": 9876543210,
        "emailAddress": "jane.smith@example.com",
        "postalCode": 54321,
        "city": "Sampleville",
        "province": "Test Province",
        "address": "456 Oak St",
        "paymentMode": "PayPal",
        "total": 200.75,
        "products": [
            {
                "name": "Product X",
                "quantity": 1,
                "price": 200
            },
            {
                "name": "Product Y",
                "quantity": 2,
                "price": 200

            },
            {
                "name": "Product Z",
                "quantity": 3,
                "price": 200

            }
        ],
    }
    const saveAsPNG = () => {
        // Get the entire page element
        const pageElement = document.getElementById('root');

        // Use html2canvas to capture the content of the page
        html2canvas(pageElement).then(canvas => {
            // Convert the canvas content to a data URL
            const dataURL = canvas.toDataURL('image/png');

            // Create a link element
            const downloadLink = document.createElement('a');

            // Set the href attribute with the data URL
            downloadLink.href = dataURL;

            // Set the download attribute with the desired file name
            downloadLink.download = 'order-receipt.png';

            // Append the link to the body and trigger a click event on the link to initiate the download
            document.body.appendChild(downloadLink);
            downloadLink.click();

            // Remove the link from the body
            document.body.removeChild(downloadLink);
        });
    }
    return (
        <>
            <div class="card">
                <div class="card-body">
                    <div class="container mb-5 mt-3">
                        <div class="row d-flex align-items-baseline">
                            <div class="col-xl-9">
                                <p style={{ color: '#7e8d9f', fontSize: '20px' }}>Invoice {'>>'} <strong>ID: #123-123</strong></p>
                            </div>
                            <div class="col-xl-3 float-end">
                                <a class="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark" onClick={saveAsPNG}>
                                    <i class="fas fa-print text-muted"></i> Print
                                </a>
                            </div>

                            <hr />
                        </div>

                        <div class="container">
                            <div class="col-md-12">
                                <div class="text-center">

                                    <h6 class="pt-0">Order Receipt</h6>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-xl-8">
                                    <ul class="list-unstyled">
                                        <li class="text-muted">To: <span style={{ color: '#5d9fc5' }}>{data.customerName}</span></li>
                                        <li class="text-muted">{data.city}</li>
                                        <li class="text-muted">{data.province}</li>
                                        <li class="text-muted"><i class="fas fa-phone"></i> {data.contact}</li>
                                    </ul>
                                </div>
                                <div class="col-xl-4">
                                    <p class="text-muted">Invoice</p>
                                    <ul class="list-unstyled">
                                        <li class="text-muted"><i class="fas fa-circle" style={{ color: '#84B0CA' }} ></i> <span
                                            class="fw-bold">ID:</span>#123-456</li>
                                        <li class="text-muted"><i class="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                                            class="fw-bold">Creation Date: </span>{new Date(Date.now()).toLocaleString()}</li>
                                        <li class="text-muted"><i class="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                                            class="me-1 fw-bold">Status:</span><span class="badge bg-warning text-black fw-bold">
                                                {data.paymentMode}</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row my-2 mx-1 justify-content-center">
                                <table class="table table-striped table-borderless">
                                    <thead style={{ backgroundColor: '#84B0CA' }} class="text-white">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.products?.map((obj, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{obj.name}</td>
                                                    <td>{obj.quantity}</td>
                                                    <td>{obj.price}$</td>
                                                    <td>{obj.price * obj.quantity}$</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>

                                </table>
                            </div>
                            <div class="row">
                                <div class="col-xl-3">
                                    <ul class="list-unstyled">
                                        <li class="text-muted ms-3"><span class="text-black me-4">SubTotal</span>${data.total}</li>
                                    </ul>
                                    <p class="text-black float-start"><span class="text-black me-3"> Total Amount</span><span
                                        style={{ fontSize: '25px' }}>$ {data.total}</span></p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-xl-10">
                                    <p>Thank you for your purchase</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orderconfirmed
