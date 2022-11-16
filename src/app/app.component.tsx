// Modules
import React from "react";

// Pages
import { Login, PageNotFound, UserDetails, Users } from "../pages";

// Components
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import { AuthLayout, DashboardLayout } from "../layouts";

// Contexts
import { SearchProvider, UIProvider, UserProvider } from "../contexts";

// Style
import "./app.styles.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />

        {/* Authentication Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <UIProvider>
              <SearchProvider>
                <UserProvider>
                  <DashboardLayout />
                </UserProvider>
              </SearchProvider>
            </UIProvider>
          }
        >
          <Route index element={<Navigate to="/dashboard/users" />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>

        {/* Page Not Found Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
