// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { selectScartItems, selectTotalAmount } from "../../app/CartSlice";

const ItemOther = () => {
  const cartItems = useSelector(selectScartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const shopfee = 2.4;

  return (
    <>
      <div>
        {cartItems?.map((item, i) => (
          <div
            key={i}
            className=" flex items-center justify-between w-full py-4 px-5"
          >
            <div className="flex items-center gap-5">
              <div className="grid items-center gap-4">
                <div className="grid items-center leading-none">
                  <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                    {item.title}
                  </h1>
                  <p className="text-sm text-slate-800 lg:text-xs">
                    {item.text}
                  </p>
                  <div className="flex items-center justify-between py-1">
                    <div className="font-normal text-sm">
                      SL: {item.cartQuantity}
                    </div>
                    <div className="font-normal text-sm">
                      price: ${item.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid items-center gap-2">
              <div className="grid items-center justify-center text-base">
                Total product price
              </div>
              <div className="grid items-center justify-center ">
                <h1 className="text-base lg:text-base text-slate-900 font-medium">
                  ${item.price * item.cartQuantity}
                </h1>
              </div>
            </div>
          </div>
        ))}
        {/*  */}
        <div className="flex items-center justify-between px-2 py-3 border-t-2 border-gray-300">
          <h1 className="text-base text-black font-semibold ml-3">Total:</h1>
          <span className="font-light italic mr-4">$ {totalAmount}</span>
        </div>
        <div className="flex items-center justify-between px-2 py-3 ">
          <h1 className="text-base text-black font-semibold ml-3">Ship fee:</h1>
          <span className="font-light italic mr-4">$ {shopfee}</span>
        </div>
        {/*  */}
        <div className="flex items-center justify-between px-2 py-3 border-t-2 border-gray-300">
          <h1 className="text-xl text-black font-semibold ml-3">
            Total payment:
          </h1>
          <span className="font-light italic mr-4">
            $ {totalAmount + shopfee}
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemOther;
