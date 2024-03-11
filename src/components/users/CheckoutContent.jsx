import React from "react";
import Checkoutframe from "../../components/users/Checkoutframe";
import CheckoutAddressArea from "../../components/users/CheckoutAddressArea";
import CheckoutPriceArea from "../../components/users/CheckoutPriceArea";

function CheckoutContent() {
  return (
    <main className="w-full h-[calc(100vh-4.5rem)] p-4 overflow-y-auto">
      <Checkoutframe />
      <div className="w-full flex h-[calc(100%-12rem_)] border flex-wrap border-slate-200 border-opacity-20">
        <div className="h-full w-[900px] min-w-[407px]  border-r p-2  flex-grow border-slate-200 border-opacity-20">
          <CheckoutAddressArea />
        </div>
        <div className="w-[16rem] p-10 flex-grow justify-center items-center">
          <CheckoutPriceArea />
        </div>
      </div>
    </main>
  );
}

export default CheckoutContent;
