import React, { useState } from "react";

const users = [
  {
    name: "Sarah",
    age: 23,
  },
  {
    name: "Alex",
    age: 21,
  },
  {
    name: "Michael",
    age: 22,
  },
];

const GuestSearch: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleClick = () => {
    const findUser = users.find((user) => user.name === search);
    setUser(findUser);
    setSearch("");
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleSearch(e)}
      />
      <div>
        {user?.name} {user?.age}
      </div>
      <button onClick={handleClick}>Find User</button>
    </div>
  );
};

export default GuestSearch;
