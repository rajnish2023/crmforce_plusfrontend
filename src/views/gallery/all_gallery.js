import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchGalleries, createGallery } from '../../api/api';  // Ensure deleteImage is in the API functions
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CCard,
  CCardBody,
  CCardImage,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilOptions } from '@coreui/icons';
import './gallery.css';

const Gallery = ({ className }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const APP_URL = 'https://crmfoceplus-backend.onrender.com';

  // Fetch galleries on component mount
  useEffect(() => {
    const loadGalleries = async () => {
      try {
        const response = await fetchGalleries();
        setGalleries(response.data);  // Set galleries in the state
      } catch (error) {
        console.error('Error fetching galleries:', error);
        setError('Failed to load galleries');
      } finally {
        setLoading(false);
      }
    };

    loadGalleries();
  }, []);

  // Handle image link copy
  const handleCopyImageLink = (link) => {
    navigator.clipboard.writeText(link);
    alert('Image link copied to clipboard');
  };

  // Handle file change (image selection)
  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
    const previews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImagePreviews(previews);
  };

  // Handle image upload
  const handleUpload = async () => {
    if (selectedFiles) {
      const formData = new FormData();
      Array.from(selectedFiles).forEach((file) => formData.append('files', file));

      try {
        await createGallery(formData);  // Upload gallery API call
        alert('Gallery uploaded successfully');
        setModalVisible(false);
        
        // Re-fetch galleries after successful upload
        const response = await fetchGalleries();
        setGalleries(response.data);
      } catch (error) {
        alert('Error uploading gallery');
        console.error('Error uploading gallery:', error);
      }
    } else {
      alert('Please select images to upload.');
    }
  };

  // Drag and drop functionality
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    setSelectedFiles(files);
    const previews = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImagePreviews(previews);
  };

  return (
    <div>
      {/* Upload Gallery Button */}
      <CButton color="primary" onClick={() => setModalVisible(true)} className="mb-4">
        Upload Gallery
      </CButton>

      {/* Error Handling */}
      {error && <div className="error-message">{error}</div>}

      {/* Gallery Images */}
      <CRow className={className} xs={{ gutter: 4 }}>
        {loading ? (
          <div>Loading galleries...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          galleries.map((gallery) => (
            gallery.images.map((image, index) => (
              <CCol sm={6} xl={3} key={gallery._id + '-' + index}>
                <CCard className="mb-4 position-relative">
                  <CCardImage
                    orientation="top"
                    src={`${APP_URL}/uploads/${image}`} // Full image URL
                    alt={`Image ${index + 1}`}
                  />
                   
                    {/* Dropdown at the top-right corner */}
                    <div className="d-flex justify-content-end position-absolute top-0 end-0 m-2">
                      <CDropdown>
                        <CDropdownToggle color="transparent" caret={false} className="text-black p-0">
                          <CIcon icon={cilOptions} />
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={() => handleCopyImageLink(`${APP_URL}/uploads/${image}`)}>
                            Copy Image Link
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </div>
                   
                </CCard>
              </CCol>
            ))
          ))
        )}
      </CRow>

      {/* Modal for Uploading Images */}
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)} size="lg">
        <CModalHeader closeButton>
          <CModalTitle>Upload Images</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <div
              className={`file-upload-area ${dragging ? 'dragging' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <CFormInput
                type="file"
                multiple
                onChange={handleFileChange}
                label="Select Images or Drag and Drop"
                id="image-upload"
                className="file-input"
              />
              {imagePreviews.length > 0 && (
                <div className="image-previews">
                  {imagePreviews.map((preview, index) => (
                    <img
                      key={index}
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="preview-image"
                    />
                  ))}
                </div>
              )}
            </div>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleUpload}>
            Upload
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
};

export default Gallery;
