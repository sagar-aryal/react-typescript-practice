import React from "react";
import { Link, Outlet } from "react-router-dom";

import { useGetAllUsersQuery } from "../services/userApi";

const Users = () => {
  const { data, error, isLoading, isSuccess } = useGetAllUsersQuery();
  //console.log(data);
  return (
    <div>
      <h2>All Users</h2>
      <button>Add New User</button>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Something went wroung.</h2>}
      {isSuccess &&
        data?.map((user) => (
          <div key={user.id}>
            <h3>
              {user.firstname} {user.lastname}
            </h3>
            <h4>Country: {user.country}</h4>
            <div>
              <Link to={`users/${user.id}`}>View More</Link>
              <Outlet />
            </div>
            <br></br>
            <button>Update</button>
            <button>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default Users;
