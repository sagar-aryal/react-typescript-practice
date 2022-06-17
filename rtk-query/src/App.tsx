import React from "react";

import { useGetAllUsersQuery } from "./services/userApi";

const App = () => {
  const { data, error, isLoading, isSuccess } = useGetAllUsersQuery();
  // console.log(data);
  return (
    <div>
      <h1>React Redux Toolkits RTK Query Practice</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Something went wroung.</h2>}
      {isSuccess &&
        data?.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button>View More</button>
          </div>
        ))}
    </div>
  );
};

export default App;
