import React ,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import logo from './../../public/crmforceplus-logo.webp'

// sidebar nav config
import navigation from '../_nav'
import { getUserProfile } from '../api/api';

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const token = localStorage.getItem('token');
  const [filteredNav, setFilteredNav] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async (token) => {
      try {
        const userProfile = await getUserProfile(token);  
        const userRole = userProfile.data.role;  
        const filteredItems = filterNavByRole(navigation, userRole);
        setFilteredNav(filteredItems);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile(token);
  }, [token]);

  const filterNavByRole = (navItems, role) => {
    return navItems.filter((item) => {
      if (item.showForRoles && !item.showForRoles.includes(role)) {  
        return false;
      }
      if (item.items) {
        item.items = filterNavByRole(item.items, role);  
        return item.items.length > 0;
      }
      return true;
    });
  };

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
        <img src={logo} alt="logo" width="220"/>
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={filteredNav} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
