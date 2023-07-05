import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const [ , setFooter] = useState(true);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const ClickHandler = () => {
    setFooter((prev) => !prev)
  }

  return (
    <div className="w-12/12 overflow-hidden"
    onClick={ClickHandler}
    >
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="w-[100%] md:w-[50%] flex flex-col mt-8 ml-10">
            <div className="flex flex-col">
              <div className="uppercase font-semibold text-xl text-green-800">
                Your Cart
              </div>
              <div className="uppercase text-5xl font-bold text-green-600">
                Summary
              </div>
              <p className="mt-5">
                <span className="text-2xl text-green-900 font-bold ">
                  Total Items : {cart.length}
                </span>
              </p>
            </div>

            <div className="md:flex md:flex-col md:justify-end md:h-[100%] md:my-14 md:gap-5">
              <p className="text-xl text-slate-800 font-semibold">
                Total Amount : ${totalAmount}
              </p>
              <button className="bg-green-800 h-[3em] md:w-auto rounded-[10px] text-xl font-semibold text-white hover:border-[2px] hover:border-green-800 hover:bg-white hover:text-green-800 transition duration-300 ease-in-out hover:scale-105 w-[80%] mb-8">
                Order Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center mt-64 mb-4">
          <h1 className="text-2xl font-semibold">
            Oops , Your Cart is Empty !!
          </h1>
          <NavLink to="/">
            <button className="bg-green-800 h-[2.5em] w-[8em] rounded-[10px] text-xl font-semibold text-white hover:border-[2px] hover:border-green-800 hover:bg-white hover:text-green-800 transition duration-300 ease-in-out hover:scale-105 mt-4">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
