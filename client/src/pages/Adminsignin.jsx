import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { BASEURL } from './../App';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Adminsignin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emptyEmail, setEmptyEmail] = useState(null)
  const [emptyPassword, setEmptyPassword] = useState(null)

  const navigate = useNavigate()
  const mutation = useMutation(
    {
      mutationFn: (formData) => {
        console.log(formData)
        return axios.post(`${BASEURL}/api/admin/sign-in`, formData)
      }
    });

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email && password) {
      try {
        await mutation.mutate({ emailAddress: email, password })
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
    if (!email) {
      setEmptyEmail('*You must have to Enter Email first ')
      setTimeout(() => {
        setEmptyEmail(null)
      }, 2000);
    }
    if (!password) {
      setEmptyPassword(`*Please Enter your Password `)
      setTimeout(() => {
        setEmptyPassword(null)
      }, 2000);
    }

  }
  useEffect(() => {

    if (mutation.isSuccess) {
      const token = mutation.data.data.token
      document.cookie = `auth=${token};expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()};path=/;`;
      navigate('/add-Product');
    }
  }, [mutation.isSuccess]);
  return (
    <MDBContainer fluid className='p-4 bg-login'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <div className='d-flex justify-content-center mt-4'>
              <h3>Login as Admin</h3>
            </div>
            <MDBCardBody className='p-5 text-muted'>

              <MDBInput onChange={(e) => setEmail(e.target.value)} value={email} label='Email' id='form1' type='email' />
              <div className='text-danger'>{emptyEmail}</div>
              <MDBInput wrapperClass='mt-4' onChange={(e) => setPassword(e.target.value)} value={password} label='Password' id='form2' type='password' />
              <div className='text-danger'>{emptyPassword}</div>
              <Button className='w-100' onClick={handleSubmit}> {mutation.isPending ? 'Logging in...' : 'Login'}</Button>
              {mutation.error && <div>Incorrect Email or Password</div>}
              {mutation.isError && <div>Error logging in. Please try again.</div>}
              {mutation.isSuccess && <div className='text-center text-success'>Sign in successfull</div>}
              <div className="text-center">
                <p>or sign in with:</p>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Adminsignin;