import React from "react";
import "../App.css";

const CategoryDropdown = ({ categories, onSelectCategory }) => {
  return (
    <div className="select-container">
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
