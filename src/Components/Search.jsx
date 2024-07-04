import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setSearchTerm, setCategory } from "../Redux/searchSlice.js";

import { setSearchTerm, setCategory } from "../Redux/searchSlice.js";

import { categories } from "../constants/data.js";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (category === "Entire Site") {
      setSelectedCategories([]);
      setSearchInput("");
      dispatch(setCategory([]));
    } else if (!selectedCategories.includes(category)) {
      const updatedCategories = [...selectedCategories, category];
      setSelectedCategories(updatedCategories);
      setSearchInput(updatedCategories.join(", "));
      dispatch(setCategory(updatedCategories));
    }
  };

  const handleCategoryClick = (category) => {
    if (!selectedCategories.includes(category)) {
      const updatedCategories = [...selectedCategories, category];
      setSelectedCategories(updatedCategories);
      setSearchInput(updatedCategories.join(", "));
      dispatch(setCategory(updatedCategories));
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchInput));
    dispatch(setCategory(selectedCategories));
    navigate(
      `/search-results?term=${searchInput}&category=${selectedCategories.join(
        ", "
      )}`
    );
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div className="flex flex-col gap-4 w-full py-6 md:py-12">
      <div className="w-full">
        <form onSubmit={handleSearchSubmit} className="flex w-full text-black">
          <input
            onChange={handleSearchChange}
            value={searchInput}
            className="flex-grow border border-gray-100 bg-gray-50 py-2 px-6 text-xl rounded-l-md"
            placeholder="Search here..."
          />
          <select onChange={handleCategoryChange} className=" cursor-pointer ">
            <option value="Entire Site" className="p-2">
              Entire Site
            </option>
            {categories?.map((category, i) => (
              <option key={i} className="cursor-pointer p-2">
                {category}
              </option>
            ))}
          </select>

          <Button
            type="submit"
            text="Search"
            bgColor="bg-blue-500"
            textColor="text-white"
          />
        </form>
      </div>
      <div className="w-full">
        {categories?.map((category, i) => (
          <button
            key={i}
            className="px-4 py-2 rounded-full bg-gray-100 m-2 hover:bg-gray-300 hover-effect"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Search;
