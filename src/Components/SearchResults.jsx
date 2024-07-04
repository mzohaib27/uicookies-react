import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsData, categories } from "../constants/data.js";
import Card from "./Card.jsx";
import { useLocation } from "react-router-dom";

import { setCategory, setSearchTerm } from "../Redux/searchSlice.js";

import { setCategory, setSearchTerm } from "../Redux/searchSlice.js";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const category = useSelector((state) => state.search.category);

  const query = useQuery();

  useEffect(() => {
    const term = query.get("term") || "";
    const cat = query.get("category") || "";
    const categoryArray = cat ? cat.split(", ") : [];
    if (searchTerm !== term) {
      dispatch(setSearchTerm(term));
    }
    if (JSON.stringify(category) !== JSON.stringify(categoryArray)) {
      dispatch(setCategory(categoryArray));
    }
  }, [dispatch, query, searchTerm, category]);

  const filterCards = cardsData.filter((card) => {
    const matchesSearchTerm = card.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    //   card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   card.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categories.length === 0 || categories.includes(card.category);
    return matchesSearchTerm && matchesCategory;
  });
  if (filterCards.length === 0) {
    return (
      <div className="flexCenter min-h-[80vh] bg-gray-900 py-32">
        <h1>No Results Found !</h1>
      </div>
    );
  }

  console.log(filterCards);
  return (
    <>
      <div className="">
        <h1 className="text-2xl md:text-5xl underline backdrop font-bold text-center py-4 italic">
          Search Results
        </h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[80vh] px-4 md:px-12 py-4 md:py-6 ">
        {filterCards?.map((card, i) => (
          <div key={i}>
            <Card key={i} {...card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResults;
