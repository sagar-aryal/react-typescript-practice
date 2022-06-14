import React, { useState } from "react";
//import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const PackagesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchPackages } = useActions();
  const { loading, error, data } = useTypedSelector((state) => state.packages);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // won't refresh our browser during form submit event.

    searchPackages(term);
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="search"
          placeholder="search"
          value={term}
          onChange={(e) => handleChange(e)}
        />
        <button>Search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {!error && !loading && data?.map((name) => <div key={name}>{name}</div>)}
    </>
  );
};

export default PackagesList;
