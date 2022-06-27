import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import AddUserPage from "./pages/AddUserPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="users/:id" element={<SingleUser />} />
        <Route path="add" element={<AddUserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
