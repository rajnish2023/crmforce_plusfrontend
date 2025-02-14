import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from '@coreui/react'

import { Link } from 'react-router-dom'

import { getUserProfile } from '../../api/api'

const Dashboard = () => {
  const [role, setRole] = useState(null);  // State to store the role
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserProfile = async (token) => {
      try {
        const userProfile = await getUserProfile(token)
        const userRole = userProfile.data.role
        setRole(userRole)  // Set role to state
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }
    fetchUserProfile(token)
  }, [token])

  return (
    <>
      <CRow>
        {/* Blog Card (Primary) */}
        <CCol sm={4}>
          <Link to="/all-blogs" style={{ textDecoration: 'none', color: '#000' }}>
            <CCard color="primary" className="text-white mb-4">
              <CCardHeader>Blog</CCardHeader>
              <CCardBody>
                <div className="fs-5 fw-semibold">Latest Posts</div>
                <CButton color="light" className="mt-3">
                  <Link to="/all-blogs" style={{ textDecoration: 'none', color: '#000' }}>
                    View Blog
                  </Link>
                </CButton>
              </CCardBody>
            </CCard>
          </Link>
        </CCol>

        {/* Conditional Users Card (Info) */}
        {role === 'superAdmin' && (  // Only show the card if the role is superAdmin
          <CCol sm={4}>
            <Link to="/all-users" style={{ textDecoration: 'none', color: '#000' }}>
              <CCard color="info" className="text-white mb-4">
                <CCardHeader>Users</CCardHeader>
                <CCardBody>
                  <div className="fs-5 fw-semibold">Active Users</div>
                  <CButton color="light" className="mt-3">
                    View Users
                  </CButton>
                </CCardBody>
              </CCard>
            </Link>
          </CCol>
        )}

        {/* Blog Category Card (Warning) */}
        <CCol sm={4}>
          <Link to="/all-categories" style={{ textDecoration: 'none', color: '#000' }}>
            <CCard color="warning" className="text-white mb-4">
              <CCardHeader>Blog Category</CCardHeader>
              <CCardBody>
                <div className="fs-5 fw-semibold">Manage Categories</div>
                <CButton color="light" className="mt-3">
                  View Categories
                </CButton>
              </CCardBody>
            </CCard>
          </Link>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
