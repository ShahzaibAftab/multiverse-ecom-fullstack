import React from 'react'
import AdminCanvas from '../components/AdminCanvas'

const AdminProfile = () => {
    
    return (
        <>
            <div className='addFlex'>
                <AdminCanvas />
                <section style={{ backgroundColor: '#eee', minWidth: '80%' }}>
                    <div className="container-fluid px-0">
                        <div className="row mx-0">
                            <div className="col">
                                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="row mx-0"> {/* Added mx-0 to remove horizontal margin */}
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                            className="rounded-circle img-fluid" style={{ width: 'auto' }} />
                                        <h5 className="my-3">John Smith</h5>
                                        <p className='text-muted'> Administrator</p>
                                        <div className="d-flex justify-content-center mb-2">
                                            <button type="button" className="btn btn-outline-primary ms-1">Edit Profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">Johnatan Smith</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">example@example.com</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Contact</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">(097) 234-5678</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Password</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">(098) 765-4321</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        </>
    )
}

export default AdminProfile