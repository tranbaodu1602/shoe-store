// eslint-disable-next-line no-unused-vars
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOtherState, setCloseFromOther } from "../app/OrderSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ItemOther from "./cart/ItemOther";
import toast from "react-hot-toast";
import FormOrther from "./FormOrther";

const Other = () => {
  const dispatch = useDispatch();
  const ifOtherState = useSelector(selectOtherState);

  const onFromToggle = () => {
    dispatch(setCloseFromOther({ FromOtherState: false }));
  };

  const handleSubmit = () => {
    toast.success(`Order Success`);
    dispatch(setCloseFromOther({ FromOtherState: false }));
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full py-3 
            h-screen opacity-500 z-[250] ${
              ifOtherState
                ? "opacity-100 visible translate-x-0 "
                : "opacity-0 invisible translate-x-8"
            } `}
      >
        <div className="blur-effect-theme h-screen max-w-xl w-full absolute left-[30%] bg-slate-200 ">
          <div className="flex items-center justify-between px-2 py-3 ">
            <h1 className="text-xl font-bold text-slate-900">Form Pay</h1>
            <button
              onClick={onFromToggle}
              className=" rounded bg-theme-cart active:scale-90 p-0.5 ml-auto"
            >
              <XMarkIcon className=" w-5 h-5 text-white stroke-[2]" />
            </button>
          </div>
          <div className="overflow-y-scroll h-[80vh] scroll-smooth scroll-hidden">
            <div>
              <h2 className="mb-5 ml-6 text-base italic text-black">
                Please fill in your information correctly
              </h2>
              <FormOrther />
            </div>
            <div>
              <h2 className="mb-5 ml-6 text-xl font-bold  text-black border-t-2 border-gray-300">
                Your product
              </h2>
              <ItemOther className="pb-3" />
            </div>
          </div>
          <div className="grid items-center  gap-2">
            <p className="text-sm font-medium text-center">
              Check your product and total payment
            </p>
            <button
              type="button"
              className="button-theme bg-theme-cart text-white w-[80%] ml-14"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Other;
