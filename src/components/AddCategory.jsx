import React, { useState } from "react";
import "../sass/AddCategory.scss";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // prevenimos la recarga de la pagina
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="category__form">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="category__input"
        placeholder="Busca un Gif"
      />
    </form>
  );
};
