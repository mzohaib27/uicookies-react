import React, { useState } from "react";
import { styles } from "../utils/Styles.js";
import { Link } from "react-router-dom";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import Search from "./Search.jsx";
import { categories, cardsData } from "../constants/data.js";
import HeroSection from "./HeroSection.jsx";
import Pagination from "./Pagination.jsx";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div
        className={` flex flex-col min-h-[80vh] hero-bg items-center justify-center`}
      >
        <HeroSection
          heading="Free Responsive Bootstrap Themes and HTML Templates"
          text={`
        Make your website stunning, SEO optimized, responsive and mobile
            friendly with elegantly crafted free HTML Bootstrap Templates.
            Download them now, they are available for personal, business and
            commercial usages.
        `}
          button={<Button text="Browse All Items" bgColor={"bg-blue-500"} />}
          path={"/"}
        />
        <div className={`${styles.paddingX} bg-gray-200`}>
          <Search categories={categories} />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${styles.paddingX} bg-gray-200 py-4 md:py-12`}
        >
          {currentCards?.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Home;
