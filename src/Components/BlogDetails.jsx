import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AiOutlineLike, AiOutlineDislike, AiOutlineEye } from "react-icons/ai";
import { styles } from "../utils/Styles";

const BlogDetails = () => {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(posts);
  useEffect(() => {
    const getPostData = async () => {
      try {
        setLoading(true);
        const postData = await axios.get(
          `https://dummyjson.com/posts/user/${id}`
        );
        setPosts(postData.data.posts);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        setError(error);
      }
    };
    getPostData();
  }, [id]);

  if (error) {
    return (
      <div>
        {" "}
        <h1 className="text-xl md:text-3xl font-semibold">
          OOPs ! Something Went Wrong! Error is : {error}
        </h1>
      </div>
    );
  }

  return (
    <>
      <div
        className={`hero-bg text-2xl md:text-5xl font-light text-center ${styles.paddingX} ${styles.paddingY}`}
      >
        All Posts By{" "}
        <span className="font-bold"> user{posts && posts[0]?.userId}</span>
      </div>
      <div
        className={`${styles.paddingX} ${styles.paddingY} grid grid-cols-1 md:grid-cols-2 gap-4 `}
      >
        {loading ? (
          <h1 className="text-5xl font-semibold italic text-center">
            Loading...
          </h1>
        ) : (
          posts?.map((post, i) => (
            <>
              <div
                key={i}
                className="flex flex-col justify-between px-4 py-2 rounded-lg bg-gradient-to-br from-gray-200 via-purple-200 to-cyan-400 shadow-xl shadow-gray-500"
              >
                <div>
                  <h1 className="text-2xl md:text-4xl font-light py-4">
                    {post.title}
                  </h1>
                  <p className="p-2">{post.body}</p>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="flex gap-2 items-center">
                      <AiOutlineLike className="w-6 h-6 hover:text-blue-600 hover-effect cursor-pointer" />{" "}
                      {post.reactions.likes}
                    </div>
                    <div className="flex gap-2 items-center">
                      <AiOutlineDislike className="w-6 h-6 hover:text-red-600 hover-effect cursor-pointer" />{" "}
                      {post.reactions.dislikes}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <AiOutlineEye className="w-6 h-6" /> {post.views}
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default BlogDetails;
