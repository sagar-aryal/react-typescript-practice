import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>React Redux Toolkits RTK Query Practice</h1>
      <Link to="/users">Go to Users Page</Link>
    </div>
  );
};

export default HomePage;
