import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';

import { userLogin } from '../../api/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Both fields are required!');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await userLogin({ email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); 
        navigate('/dashboard', { replace: true });   
      } else {
        setErrorMessage(response.error || 'An unknown error occurred.');
      }
    } catch (error) {
      setErrorMessage(error?.response?.data?.error || 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <p className="text-body-secondary">Sign In to your account</p>

                    {/* Username Input */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        invalid={errorMessage ? true : false}
                      />
                    </CInputGroup>

                    {/* Password Input */}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        invalid={errorMessage ? true : false}
                      />
                    </CInputGroup>

                    {/* Error message */}
                    {errorMessage && (
                      <div className="text-danger mb-3">
                        <small>{errorMessage}</small>
                      </div>
                    )}

                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Logging In...' : 'Login'}
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <p>
                      If you want to forget your password, please click Forgot Password Button.
                    </p>
                    <Link to="/forgotpassword">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Forgot Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
