import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://www.dynamicssquare.com/" target="_blank" rel="noopener noreferrer">
          Dynamics Square
        </a>
        <span className="ms-1">&copy; 2024 Developer.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Developed by</span>
        <a href="https://www.dynamicssquare.com/" target="_blank" rel="noopener noreferrer">
           Dynamics Square
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
