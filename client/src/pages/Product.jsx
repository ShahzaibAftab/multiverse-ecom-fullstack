import React from 'react'
import { Container } from 'react-bootstrap'
import Commonheader from '../components/Commonheader'
import demo from '../components/images/c1.jpg'
import Slider from '../components/Slider'
import ReactStars from 'react-rating-stars-component';

const Product = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <>
            <Commonheader />
            <Container fluid>
                <div className='row mt-5'>
                    <div className='col-sm-12 col-md-6'>
                        <div className='m-5'>
                            <Slider prop1={demo} prop2={demo} prop3={demo} control={true} />
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 mt-5'>
                        <div className='d-flex justify-content-around mr-5'>
                            <h4>Product Name:</h4><p className='mt-1 fs-5'>Smartwatch v8</p>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <h4>Price:</h4> <p>5000<span className='text-success' style={{ fontWeight: '1000' }}>$</span></p>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <h4 className='ml-3'>Overall Rating:</h4>
                            <ReactStars
                                count={5}
                                value={4.5}
                                edit={false}
                                isHalf={true}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                // onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className='d-flex justify-content-around bg-info text-muted round-border mt-5 px-5 py-2'>
                            <p style={{ textAlign: 'justify' }}><h6 className='ml-5'>Description:</h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi debitis eaque nisi praesentium atque expedita consectetur maxime. Accusantium itaque repellendus suscipit, ab similique obcaecati, dolor voluptates fugiat quod vitae ut.</p>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mt-2">
                                <button class="btn btn-primary w-100 mb-2 mb-md-0">Add to cart</button>
                            </div>
                            <div class="col-md-6 mt-2">
                                <button class="btn btn-primary w-100">Checkout</button>
                            </div>
                        </div>
                    </div>


                    <div className='col-sm-12 col-md-6'>

                    </div>
                </div>
            </Container>
            <section className='bg-info'>
                <div class="container-fluid mt-5 pt-5 ">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-12 col-lg-10">
                            <div class="card text-dark">
                                <div class="mt-4 mx-4 d-flex flex-start w-100">
                                    <img class="rounded-circle shadow-1-strong me-3"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="65"
                                        height="65" />
                                    <div class="w-100">
                                        <h5 className='text-muted'>Add a comment</h5>
                                        <ul class="rating mb-3" data-mdb-toggle="rating">

                                        </ul>
                                        <div class="form-outline mx-5">
                                            <div class="form-group mb-3">
                                                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Name" />
                                            </div>
                                            <div className='d-flex justify-content-around'>
                                                <h6 className='ml-3 text-muted'> Rate:</h6>
                                                <ReactStars
                                                    count={5}
                                                    // value={4.5}
                                                    isHalf={true}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                            <textarea class="form-control" placeholder='awesome...' id="textAreaExample" rows="4"></textarea>

                                            <div class="row ml-5 mx-auto">
                                                <div class="col-md-4 mt-2">
                                                    <button class="btn btn-danger w-100 mb-2 mb-md-0">cancel</button>
                                                </div>
                                                <div class="col-md-4 mt-2">
                                                    <button class="btn btn-success w-100">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="card-body p-4">
                                    <div className='text-center'>
                                    <h4 class="mb-0">Recent comments</h4>
                                    <p class="fw-light mb-4 pb-2">Latest Comments</p>
                                    </div>

                                    <div class="d-flex flex-start">
                                        <img class="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                                            height="60" />
                                        <div>
                                            <h6 class="fw-bold mb-1">Maggie Marsh</h6>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="mb-0">
                                                    March 07, 2021
                                                    <span class="badge bg-primary">Pending</span>
                                                </p>
                                                <a href="#!" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                                            </div>
                                            <p class="mb-0">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-0" />

                                <div class="card-body p-4">
                                    <div class="d-flex flex-start">
                                        <img class="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="60"
                                            height="60" />
                                        <div>
                                            <h6 class="fw-bold mb-1">Lara Stewart</h6>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="mb-0">
                                                    March 15, 2021
                                                    <span class="badge bg-success">Approved</span>
                                                </p>
                                                <a href="#!" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                                                <a href="#!" class="text-success"><i class="fas fa-redo-alt ms-2"></i></a>
                                                <a href="#!" class="link-danger"><i class="fas fa-heart ms-2"></i></a>
                                            </div>
                                            <p class="mb-0">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia, looked up one of the more obscure
                                                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                                the cites.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-0" style={{ height: '1px' }} />

                                <div class="card-body p-4">
                                    <div class="d-flex flex-start">
                                        <img class="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp" alt="avatar" width="60"
                                            height="60" />
                                        <div>
                                            <h6 class="fw-bold mb-1">Alexa Bennett</h6>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="mb-0">
                                                    March 24, 2021
                                                    <span class="badge bg-danger">Rejected</span>
                                                </p>
                                                <a href="#!" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                                            </div>
                                            <p class="mb-0">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-0" />

                                <div class="card-body p-4">
                                    <div class="d-flex flex-start">
                                        <img class="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp" alt="avatar" width="60"
                                            height="60" />
                                        <div>
                                            <h6 class="fw-bold mb-1">Betty Walker</h6>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="mb-0">
                                                    March 30, 2021
                                                    <span class="badge bg-primary">Pending</span>
                                                </p>
                                                <a href="#!" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                                            </div>
                                            <p class="mb-0">
                                                It uses a dictionary of over 200 Latin words, combined with a handful of
                                                model sentence structures, to generate Lorem Ipsum which looks
                                                reasonable. The generated Lorem Ipsum is therefore always free from
                                                repetition, injected humour, or non-characteristic words etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product
