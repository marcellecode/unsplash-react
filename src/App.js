import "./App.css";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import unsplash from "./services/unsplash";
import React, { useState } from "react";

function App() {
  const [imageList, setImageList] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    setImageList(response.data.results);
  };

  return (
    <div className="App">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList imagesList={imageList} />
    </div>
  );
}

export default App;
