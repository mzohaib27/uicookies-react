import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { styles } from "../utils/Styles";
import { addToCart, removeFromCart } from "../Redux/cartSlice";
import { cardsData, categories } from "../constants/data";
import { Link, useParams } from "react-router-dom";
import HeroSection from "./HeroSection";
import cardforCart from "../assets/cardforcart.jpg";

const Cart = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const item = cardsData?.find((d) => d.id === parseInt(id));
  console.log(item);
  const cartCount = useSelector((state) => state.cart.cart);
  console.log(cartCount);

  const handleRemove = () => {
    dispatch(removeFromCart());
  };

  const handleSubmit = () => {};
  return (
    <>
      <div>
        <div className={`hero-bg ${styles.paddingX} ${styles.paddingY}`}>
          <HeroSection heading={"Checkout"} />
        </div>
        <div
          className={`${styles.paddingX} ${styles.paddingY} md:flex parent  md:gap-4`}
        >
          <div className="child1  gap-4 px-6 md:px-24 py-4 md:py-12 rounded-lg bg-gray-100 ">
            <table className="text-center">
              <thead>
                <tr className=" bg-gray-300">
                  <th className="px-4 py-6 w-1/3">Item Name</th>
                  <th className="px-4 py-6 w-1/3">Item Price</th>
                  <th className="px-4 py-6 w-1/3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="  gap-4">
                  <td>
                    <img
                      src={item.image}
                      className="w-32 h-32 rounded-lg shadow shadow-black m-4"
                    />
                    <h1 className="text-lg text-left p-4">{item.title}</h1>
                  </td>
                  <td>{item.price.price2}</td>
                  <td>
                    <Link to={"/"}>
                      <Button text={"Remove"} onClickFunction={handleRemove} />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="bg-gray-300 w-full flex flex-grow p-4">
              <h1>Total : {item.price.price2}</h1>
            </div>
            <div>
              <img src={cardforCart} alt="image" className="w-32 h-12 my-4" />
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start gap-2"
              >
                <h1>Your username or email address</h1>
                <input
                  type="text"
                  placeholder="Your username or email address"
                  className="px-4 py-2 bg-gray-300 rounded w-full"
                />
                <h1>Password</h1>
                <input
                  type="text"
                  placeholder="Your password"
                  className="px-4 py-2 bg-gray-300 rounded w-full"
                />
                <Button
                  text={"Log in"}
                  bgColor={"bg-blue-400"}
                  styles={"text-white"}
                />
                <h1 className="text-xl md:text-3xl font-semibold py-2 border-b border-gray-300 w-full">
                  Personal Info
                </h1>
                <h1>Email address *</h1>
                <p>We will send the purchase receipt to this address.</p>
                <input
                  type="text"
                  placeholder="Email address"
                  className="px-4 py-2 bg-gray-300 rounded w-full"
                />
                <h1>First name *</h1>
                <p>We will use this to personalize your account experience.</p>
                <input
                  type="text"
                  placeholder="First name"
                  className="px-4 py-2 bg-gray-300 rounded w-full"
                />
                <h1>Last name *</h1>
                <p>
                  We will use this as well to personalize your account
                  experience.
                </p>
                <input
                  type="text"
                  placeholder="Last name"
                  className="px-4 py-2 bg-gray-300 rounded w-full"
                />
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h1 className="text-lg font-bold">
                    Sign me up for the newsletter!
                  </h1>
                </div>
                <h1>
                  <span>Purchase Total : </span> {item.price.price2}
                </h1>
                <div className="w-full rounded-lg">
                  <Link to={`/cart/${id}`}>
                    <button className="text-2xl text-blue-500 font-bold rounded-lg italic  bg-yellow-400 w-full py-2">
                      <span className="text-blue-800 ">Pay</span>Pal
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className=" child2 bg-gray-100 p-4  rounded-lg">
            <h1 className="text-2xl font-semibold">Categories</h1>
            {categories?.map((cat, i) => (
              <div key={i}>
                <ul className="flex items-center">
                  <span className="text-xs font-bold">o</span>{" "}
                  <li className="p-1">{cat}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
