import React, { useState } from "react";
import "./App.scss";
import { AddCategory } from "./components/AddCategory";
import { v4 as uuidv4 } from "uuid";
import { GifGrid } from "./components/GifGrid";

function App() {
  const [categories, setCategories] = useState([]);

  const handleAdd = (name) => {
    setCategories((cats) => [{ name, id: uuidv4() }, ...cats]);
  };

  return (
    <div className="App">
      <h1 className="App__tittle">Giphy App</h1>
      <AddCategory setCategories={setCategories} />
      <ol className="App__items">
        {categories.map((category) => (
          <GifGrid key={uuidv4()} category={category} />
        ))}
      </ol>
    </div>
  );
}

export default App;
/*
{categories.map((categories) => {
          return <GifGrid categories={categories} key={uuidv4()}></GifGrid>;
        })}
*/
