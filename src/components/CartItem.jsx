import { remove } from "../assets";
import { cartItem } from "../constants";

const CartItem = ({ amount, setAmount }) => {
  function deleteCart() {
    setAmount(0);
  }

  return (
    <div
      className={`${
        amount === 0 ? "hidden" : "flex"
      } items-center justify-between px-6 py-5 gap-4`}
    >
      <img
        src={cartItem.image}
        alt={cartItem.id}
        className="w-[50px] rounded-md object-contain"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-sneak-dark-gray text-[15px]">{cartItem.title}</h3>
        <h4 className="text-sneak-dark-gray text-[15px]">
          ${(cartItem.price / 100) * (100 - cartItem.discount)}.00 x {amount}{" "}
          <span className="text-sneak-dark-blue font-bold">
            ${amount * ((cartItem.price / 100) * (100 - cartItem.discount))}.00
          </span>
        </h4>
      </div>
      <img
        src={remove}
        alt="delete-icon"
        onClick={deleteCart}
        className="cursor-pointer"
      />
    </div>
  );
};

export default CartItem;
