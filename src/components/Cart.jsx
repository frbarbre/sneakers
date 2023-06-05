import { CartItem, Button } from "../components";

const Cart = ({ cartActive, amount, setAmount }) => {
  return (
    <div
      className={`${
        cartActive ? "" : "hidden"
      } pointer-events-auto rounded-xl shadow-lg bg-white py-6`}
    >
      <h2 className="font-bold text-sneak-dark-blue px-6 pb-5">Cart</h2>
      <hr className="bg-sneak-light-gray h-[2px] w-full" />
      <CartItem amount={amount} setAmount={setAmount} />
      <h3
        className={`${
          amount === 0 ? "" : "hidden"
        } text-sneak-dark-gray text-[14px] px-6 pt-16 pb-12 text-center font-bold`}
      >
        Your cart is empty.
      </h3>
      <div className={`${amount === 0 ? "hidden" : ""} px-6`}>
        <Button icon={false} text={"Checkout"} onClick={null} />
      </div>
    </div>
  );
};

export default Cart;
