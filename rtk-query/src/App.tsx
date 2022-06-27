import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<HomePage />} /> */}

        <Route path="/" element={<Users />} />
        <Route path="users/:id" element={<SingleUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
