import React from 'react'
import html2canvas from 'html2canvas';

const Orderconfirmed = () => {
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
                                <a class="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark"><i
                                    class="fas fa-print text-muted" onClick={saveAsPNG}></i> Print</a>
                            </div>
                            <hr />
                        </div>

                        <div class="container">
                            <div class="col-md-12">
                                <div class="text-center">
                                    <i class="fab fa-mdb fa-4x ms-0" style={{ color: '#5d9fc5' }}></i>
                                    <p class="pt-0">Order Receipt</p>
                                </div>

                            </div>


                            <div class="row">
                                <div class="col-xl-8">
                                    <ul class="list-unstyled">
                                        <li class="text-muted">To: <span style={{ color: '#5d9fc5' }}>John Lorem</span></li>
                                        <li class="text-muted">Street, City</li>
                                        <li class="text-muted">State, Country</li>
                                        <li class="text-muted"><i class="fas fa-phone"></i> 123-456-789</li>
                                    </ul>
                                </div>
                                <div class="col-xl-4">
                                    <p class="text-muted">Invoice</p>
                                    <ul class="list-unstyled">
                                        <li class="text-muted"><i class="fas fa-circle" style={{ color: '#84B0CA' }} ></i> <span
                                            class="fw-bold">ID:</span>#123-456</li>
                                        <li class="text-muted"><i class="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                                            class="fw-bold">Creation Date: </span>Jun 23,2021</li>
                                        <li class="text-muted"><i class="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                                            class="me-1 fw-bold">Status:</span><span class="badge bg-warning text-black fw-bold">
                                                Unpaid</span></li>
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
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Pro Package</td>
                                            <td>4</td>
                                            <td>$200</td>
                                            <td>$800</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Web hosting</td>
                                            <td>1</td>
                                            <td>$10</td>
                                            <td>$10</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Consulting</td>
                                            <td>1 year</td>
                                            <td>$300</td>
                                            <td>$300</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            <div class="row">
                                <div class="col-xl-8">
                                    <p class="ms-3">Add additional notes and payment information</p>

                                </div>
                                <div class="col-xl-3">
                                    <ul class="list-unstyled">
                                        <li class="text-muted ms-3"><span class="text-black me-4">SubTotal</span>$1110</li>
                                        <li class="text-muted ms-3 mt-2"><span class="text-black me-4">Tax(15%)</span>$111</li>
                                    </ul>
                                    <p class="text-black float-start"><span class="text-black me-3"> Total Amount</span><span
                                        style={{ fontSize: '25px' }}>$1221</span></p>
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
