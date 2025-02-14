import React, { useEffect, useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CFormSelect,
    CFormTextarea,
    CRow,
    CSpinner
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import { getUserProfile, updateUserProfile } from '../../api/api'

import './userstyle.css';

const token = localStorage.getItem('token');

const Profile = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        role: '',
        aboutus: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            setLoading(true);
            try {
                const response = await getUserProfile(token);
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user profile:', error);
                setError('Failed to fetch user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateUserProfile(token, user);
            setSuccess('User profile updated successfully');
            setError(null);
        } catch (error) {
            console.error('Failed to update user profile:', error);
            setError('Failed to update user profile');
            setSuccess(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        {loading && (
                    <div className="loading-overlay">
                        <div className="loading-content">
                            <CSpinner color="primary" size="lg" />
                            <p>Please wait, Your request is processing...</p>
                        </div>
                    </div>
                )}
        <div className="bg-body-tertiary min-vh-90 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={9} lg={7} xl={6}>
                        <CCard className="mx-4">
                            <CCardBody className="p-4">
                                <CForm onSubmit={handleSubmit}>
                                    <p className="text-center">Hi {user.name}</p>
                                    {error && <div className="alert alert-danger">{error}</div>}
                                    {success && <div className="alert alert-success">{success}</div>}
                                    
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilUser} />
                                        </CInputGroupText>
                                        <CFormInput
                                            placeholder="Username"
                                            autoComplete="username"
                                            value={user.name}
                                            name="username"
                                            onChange={handleChange} 
                                        />
                                    </CInputGroup>
                                    
                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>@</CInputGroupText>
                                        <CFormInput
                                            placeholder="Email"
                                            autoComplete="email"
                                            value={user.email}
                                            name="email"
                                            onChange={handleChange}  
                                        />
                                    </CInputGroup>

                                    <CInputGroup className="mb-3">
                                        <CInputGroupText>
                                            <CIcon icon={cilUser} />
                                        </CInputGroupText>
                                        <CFormInput
                                           value={
                                                user.role === 'superAdmin'
                                                ? 'Super Admin'
                                                : user.role === 'seo-expert'
                                                ? 'SEO Expert'
                                                : user.role === 'user'
                                                ? 'Content Writer'
                                                : ''
                                            }
                                            readOnly
                                        />
                                    </CInputGroup>

                                    <CInputGroup>
                                        <CFormTextarea
                                            rows={3}
                                            className="mb-3"
                                            value={user.aboutus}
                                            name="aboutus"
                                            onChange={handleChange}
                                        />
                                    </CInputGroup>

                                    <div className="d-grid">
                                        <CButton color="primary" type="submit" disabled={loading}>
                                            {loading ? 'Updating...' : 'Update Account'}
                                        </CButton>
                                    </div>
                                </CForm>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
        </>
        
    );
};

export default Profile;
