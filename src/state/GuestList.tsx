import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const handleChange = (e: any) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleClick = () => {
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h2>Guest Lists</h2>

      {/*    Guests name */}
      {guests?.map((guest) => (
        <li key={guest}>{guest}</li>
      ))}

      <input
        type="text"
        name="name"
        placeholder="Type Name..."
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button onClick={handleClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
