import { useGetUserByIdQuery } from "../services/userApi";
import { useNavigate, useParams } from "react-router-dom";

const SingleUser = () => {
  const { id }: any = useParams();
  const { data } = useGetUserByIdQuery(id);
  // console.log(data);

  // Go Back to previous page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
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
      <button>Update</button>
      <button>Delete</button>
    </>
  );
};

export default SingleUser;
