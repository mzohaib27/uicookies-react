import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import { styles } from "../utils/Styles";
import axios from "axios";
import { truncate } from "lodash";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogs = await axios.get("https://dummyjson.com/posts");
      setBlogData(blogs.data.posts);
    };
    fetchData();
  }, []);

  console.log(blogData);
  return (
    <div>
      <div className={`  hero-bg `}>
        <HeroSection
          heading={"Blog"}
          text={
            "Get Updated With Ins and Out of HTML5 Templates & Bootstrap Themes"
          }
        />
      </div>
      <div className={`${styles.paddingX} md:flex`}>
        <div className="px-4 md:px-12 py-4 md:py-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogData?.map((post, i) => (
            <div
              key={i}
              className="py-4 px-6 bg-gray-200 rounded-lg  hover:-translate-y-2 shadow-lg shadow-gray-500 hover-effect"
            >
              <div>
                <h1 className="text-2xl md:text-4xl font-light py-4 md:py-6">
                  {truncate(post.title, { length: 25 })}
                </h1>
                <p className="text-xs md:text-base lg:text-lg">
                  {truncate(post.body, { length: 150 })}
                </p>
              </div>
              <div className="md:flex gap-4 items-center ">
                <h1 className="text-xl font-semibold">Tags : </h1>
                <h1 className="flex gap-2 py-2">
                  {post.tags?.map((tag, i) => (
                    <h1 className="px-3 py-1 rounded-full shadow-lg shadow-purple-400">
                      {tag}
                    </h1>
                  ))}
                </h1>
              </div>
              <div className="md:flex md:justify-between items-center py-4">
                <h1 className="shadow-lg shadow-blue-600 my-2 py-2 px-4  rounded-full">
                  Likes : {post.reactions.likes}
                </h1>
                <h1 className="shadow-lg shadow-red-500 my-2 py-2 px-4  rounded-full">
                  Dislikes : {post.reactions.dislikes}
                </h1>
              </div>
              <Link to={`/blog/${post.id}`}>
                <button className="my-4 py-2 px-4 rounded-lg shadow-lg shadow-purple-400 hover:text-blue-400 hover-effect hover:underline">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Blog;
