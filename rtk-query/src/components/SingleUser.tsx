import {
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useGetAllUsersQuery,
} from "../services/userApi";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../types";

const SingleUser = () => {
  const { id }: any = useParams();
  const { refetch } = useGetAllUsersQuery();
  const { data } = useGetUserByIdQuery(id);
  // console.log(data);

  // Go Back to previous page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  // hardcoded to update and delete
  const user: User = {
    id: 31,
    firstname: "Sagar",
    lastname: "Aryal",
    gender: "Male",
    email: "sgryal@reduxrtkquery.com",
    phone: "871-966-5273",
    country: "Suomi",
  };

  // Update user
  const [updateUser] = useUpdateUserMutation();
  const updateHandler = async () => {
    await updateUser(user);
    // will refresh page after new user is added.
    refetch();
  };

  // Delete user
  const [deleteUser] = useDeleteUserMutation();
  const deleteHandler = async () => {
    await deleteUser(user.id);
    // will refresh page after new user is added.
    refetch();
  };

  return (
    <>
      <button onClick={handleClick}>Go Back</button>
      <div>
        <p>First Name:{data?.firstname}</p>
        <p>Last Name:{data?.lastname}</p>
        <p>Gender:{data?.gender}</p>
        <p>Email:{data?.email}</p>
        <p>Phone:{data?.phone}</p>
      </div>
      <button onClick={updateHandler}>Update</button>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
};

export default SingleUser;
