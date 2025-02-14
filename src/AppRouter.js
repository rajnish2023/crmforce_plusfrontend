import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Pages
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Gallery from './pages/gallery/all_gallery';
import BlogPostList from './pages/blogs/blog_postlist';
import BlogPostCreate from './pages/blogs/create_blogpost';
import BlogPostEdit from './pages/blogs/update_blogpost';
import BlogCategoryList from './pages/blogs/blog_categories';
import UserList from './pages/users/all_user';

// Layout
import MainLayout from './layouts/MainLayout';

import routes from './routes'; // Import your routes configuration

const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route element={<MainLayout />}>
          {routes.map((route) =>
            route.protected ? (
              <PrivateRoute
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ) : (
              <Route key={route.path} path={route.path} element={route.element} />
            )
          )}
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
