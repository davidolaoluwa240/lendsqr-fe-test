// Modules
import React from "react";

// Pages
import { Login } from "../pages";

// Components
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import { AuthLayout } from "../layouts";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="/auth/login" />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
