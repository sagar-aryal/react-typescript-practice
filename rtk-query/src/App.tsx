import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Users from "./components/Users";
import SingleUser from "./components/UserDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="users">
          <Route index element={<Users />} />
          <Route path=":id" element={<SingleUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
