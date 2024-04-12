import React, { useState } from 'react'
import AdminCanvas from '../components/AdminCanvas'
import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import GetAdmin from '../api/GetAdmin';
import { Spinner, Modal, Button, Form } from 'react-bootstrap';
import axiosInstance from '../utils/AxiosInstance';
import {  toast } from 'react-toastify';

const AdminProfile = () => {

    const queryClient = useQueryClient()
    const { isLoading, error, data } = useQuery(['getCurrentAdmin'], GetAdmin);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editProfile, seteditProfile] = useState()
    const [adminId, setadminId] = useState(null)

    const notifyUpdate = () => toast.success("Updated Successfully");
    const notifyError = () => toast.error("Error Updating Records");
 
    const editData = (data) => {
        setadminId(data._id)
        seteditProfile(data)
        handleShow()
    }
    const handleSaveEdit = async () => {
        try {
            await mutation.mutate(editProfile)

        } catch (error) {
            console.log(error)
        }
        handleClose()

    }

    const handleCloseEditModal = () => {
        handleClose()
        seteditProfile(null)
    }
    const mutation = useMutation({
        mutationFn: async (editedValues) => {
            try {
                const res = await axiosInstance.put(`/api/admin-update-admin-info/${adminId}`, editedValues);
                return res.data;
            } catch (error) {
                throw new Error(`Error updating order: ${error.message}`);
            }
        },
        onSuccess: () => {
            notifyUpdate();
            queryClient.invalidateQueries({ queryKey: ['getCurrentAdmin'] });
        },
        onError: () => {
            notifyError();
        },

    });

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add form fields here for editing */}
                    {editProfile && (
                        <>
                            <Form.Group controlId="editProfileName">
                                <Form.Label> Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editProfile.adminName}
                                    onChange={(e) => seteditProfile({ ...editProfile, adminName: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="editPrice">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="text" value={editProfile.emailAddress} onChange={(e) => seteditProfile({ ...editProfile, emailAddress: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="editRating">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control type="number" value={editProfile.contact} onChange={(e) => seteditProfile({ ...editProfile, contact: e.target.value })} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='mx-3'>Profile Image</Form.Label>
                                <Form.Control type="file" onChange={(e) => seteditProfile({ ...editProfile, adminPhoto: e.target.files[0] })} />
                            </Form.Group>

                            {/* Add more fields as needed */}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='addFlex'>
                <AdminCanvas />
                {
                    isLoading && <div className='d-flex justify-content-center vh-100'><Spinner></Spinner></div>
                }
                {
                    error && <div className='d-flex justify-content-center text-muted'>Error Fetching data from the server</div>
                }
                {
                    data &&
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
                                            <img src={data.adminPhoto} alt="avatar" loading="lazy" className="rounded-circle img-fluid" style={{ width: 'auto' }} />
                                            <h5 className="my-3">{data.adminName}</h5>
                                            <p className='text-muted'> Administrator</p>
                                            <div className="d-flex justify-content-center mb-2">
                                                <button type="button" className="btn btn-outline-primary ms-1" onClick={() => editData(data)}>Edit Profile</button>
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
                                                    <p className="text-muted mb-0">{data.adminName}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Email</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{data.emailAddress}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Contact</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="text-muted mb-0">{data.contact}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Password</p>
                                                </div>
                                                <div className="col-sm-9 d-flex justify-content-between">
                                                    <p className="text-muted mb-0">********awsdfr</p>
                                                    <button className='btn btn-danger ml-3'>modify Password</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }


            </div>
        </>
    )
}

export default AdminProfile