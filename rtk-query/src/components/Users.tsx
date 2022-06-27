import React from "react";
import { Link } from "react-router-dom";

import { useGetAllUsersQuery } from "../services/userApi";

const Users = () => {
  const { data, error, isLoading, isSuccess } = useGetAllUsersQuery();
  //console.log(data);
  return (
    <div>
      <h2>All Users</h2>
      <Link to="add">Add New User</Link>
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
