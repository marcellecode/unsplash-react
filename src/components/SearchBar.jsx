import React, { useState } from "react";
import styled from "styled-components";

const Search = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const SearchField = styled.div`
  display: flex;
`;

const SearchBar = ({ onSearchSubmit }) => {
  const [word, setWord] = useState("cats");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(word);
    setWord("");
  };

  return (
    <Search>
      <form onSubmit={handleSubmit}>
        <SearchField>
          <label style={{marginRight:"10px"}}>Pesquisar</label>
          <input
            type="text"
            value={word}
            onChange={(event) => setWord(event.target.value)}
          />
        </SearchField>
      </form>
    </Search>
  );
};
export default SearchBar;
