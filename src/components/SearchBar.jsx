import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(word);
    setWord('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Pesquisar</label>
          <input
            type="text"
            value={word}
            onChange={(event) => setWord(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
