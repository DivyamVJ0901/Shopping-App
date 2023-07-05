import { toast } from "react-hot-toast";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  };

  return (
    <div className="flex flex-row items-center justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row lg:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img src={item.image} className="object-cover" />
        </div>

        <div className="md:ml-14 self-start w-[100%] md:w-[70%] md:space-y-7 space-y-4">
          <h1 className="text-xl font-semibold text-slate-800">{item.title}</h1>
          <p className="text-base font-medium text-slate-600">{item.description.split(" ").slice(0, 12).join(" ") + "...."}</p>
          <div className="flex flex-row justify-between items-center">
            <p className="text-green-600 font-semibold text-lg">${item.price}</p>
            <div
            className="text-red-800 bg-red-300 h-[2.4em] w-[2.4em] flex justify-center items-center rounded-full mb-4 hover:text-white hover:bg-red-400"

            onClick={removeFromCart}>
              <RiDeleteBin5Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
