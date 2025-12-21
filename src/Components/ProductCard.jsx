import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/CartSlice";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

function ProductCard({ product, index }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(AddItem(product));
    toast.success("Product added to cart!");
  };

  return (
    <div
      className="border border-gray-300 rounded-xl space-y-1 w-50"
      key={index}
    >
      <div className="border-b border-gray-300">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-45 rounded-t-xl"
        />
      </div>

      <div className="p-2 space-y-2">
        <p className="text-gray-500">{product.category}</p>
        <h2 className="h-10">{product.name}</h2>
        <p className="text-gray-500">{product.quantity}</p>
        <p className="font-semibold">Rs. {product.price}</p>

        <button
          className="bg-green-600 py-2 w-full rounded-xl flex justify-center items-center gap-2 text-white hover:bg-green-700 cursor-pointer mb-2"
          onClick={handleAddToCart}
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
