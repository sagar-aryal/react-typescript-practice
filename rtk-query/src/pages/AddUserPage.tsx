import React from "react";
import { useAddUserMutation, useGetAllUsersQuery } from "../services/userApi";
import { User } from "../types";

const AddUserPage = () => {
  const [addUser] = useAddUserMutation();
  const { refetch } = useGetAllUsersQuery();

  // hardcoded to update and delete
  const user: User = {
    id: 31,
    firstname: "Sagar",
    lastname: "Aryal",
    gender: "Male",
    email: "sgryal@rtkquery.com",
    phone: "871-966-5273",
    country: "Suomi",
  };

  const addHandler = async () => {
    await addUser(user);
    // will refresh page after new user is added.
    refetch();
  };

  return (
    <div>
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default AddUserPage;
