// Modules
import React from "react";

// Pages
import { Login, PageNotFound } from "../pages";

// Components
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import { AuthLayout, DashboardLayout } from "../layouts";

// Style
import "./app.styles.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="users" element={<DashboardLayout />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
