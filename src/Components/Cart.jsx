import { RxCross2 } from "react-icons/rx";
import { GiShoppingBag } from "react-icons/gi";
import { LuNotebookText } from "react-icons/lu";
import { MdDeliveryDining, MdDelete } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { DecrementUnit, IncrementUnit, RemoveItem } from "../Redux/CartSlice";
import { Link } from "react-router";

function Cart({ onClose, isOpen }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const itemTotal = cart.reduce((Acc, product) => {
    return Acc + product.price * product.unit;
  }, 0);

  const grandTotal = itemTotal + 5;

  const DecreseUnit = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item.unit > 1) {
      dispatch(DecrementUnit(itemId));
    } else {
      dispatch(RemoveItem(itemId));
    }
  };

  return (
    <div
      className={`fixed right-0 w-85 md:w-96 z-50 p-4 bg-gray-200 overflow-y-scroll h-screen
      ${isOpen ? "translate-x-0" : "translate-x-full"}
      transition-transform duration-700 ease-in-out`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">My Cart</h2>
        <RxCross2
          className="text-red-600 text-xl cursor-pointer"
          onClick={onClose}
        />
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center mt-20 gap-4">
          <h2 className="text-2xl font-semibold">Your Cart is Empty!</h2>
        </div>
      ) : (
        <div>
          {/* Cart Items */}
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-2 bg-white p-2 mt-3 rounded-lg"
            >
              <img
                src={item.image}
                alt=""
                className="w-20 h-20 object-cover rounded border border-gray-200"
              />

              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">Qty: {item.quantity}</p>
                <p className="text-gray-500">Rs. {item.price}</p>
              </div>

              <div className="flex flex-col items-center gap-5">
                <div className="bg-green-500 text-white rounded-md text-xl px-2 flex gap-3">
                  <button
                    className="hover:text-gray-600 cursor-pointer"
                    onClick={() => DecreseUnit(item.id)}
                  >
                    -
                  </button>
                  <span>{item.unit}</span>
                  <button
                    className="hover:text-gray-600 cursor-pointer"
                    onClick={() => dispatch(IncrementUnit(item.id))}
                  >
                    +
                  </button>
                </div>

                <MdDelete
                  className="text-red-400 text-xl cursor-pointer"
                  onClick={() => dispatch(RemoveItem(item.id))}
                />
              </div>
            </div>
          ))}

          {/* Bill Details */}
          <div className="space-y-2 mt-6 bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Bill Details</h2>

            <div className="flex justify-between">
              <p className="flex items-center gap-1">
                <LuNotebookText /> Items Total
              </p>
              <p>Rs. {itemTotal}</p>
            </div>

            <div className="flex justify-between">
              <p className="flex items-center gap-1">
                <MdDeliveryDining /> Delivery charge
              </p>
              <p>Free</p>
            </div>

            <div className="flex justify-between">
              <p className="flex items-center gap-1">
                <GiShoppingBag /> Handling charge
              </p>
              <p>Rs. 5</p>
            </div>

            <div className="flex justify-between font-semibold text-xl">
              <p>Grand Total</p>
              <p>Rs.{grandTotal}</p>
            </div>
          </div>

          {/* Policy */}
          <div className="bg-white p-4 rounded-lg mt-4">
            <h2 className="font-semibold">Cancellation Policy</h2>
            <p className="text-gray-600">
              Orders cannot be cancelled once packed for delivery.
            </p>
          </div>

          {/* Checkout */}
          <div className="flex justify-between bg-green-500 text-white p-4 rounded-lg mt-4 mb-5 cursor-pointer">
            <div>
              <p className="font-semibold text-xl">Rs. {grandTotal}</p>
              <p>Total</p>
            </div>
            <Link to={"/contact"}>
              <h2
                className="flex items-center text-xl font-bold gap-1"
                onClick={onClose}
              >
                Login to Proceed <IoIosArrowForward />
              </h2>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
