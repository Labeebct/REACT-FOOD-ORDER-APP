import React from "react";
import OrderFrame from "../../components/users/OrderFrame";

function OrderContent({orders}) {

  if(orders.length == 0){
    return (
      <main className="w-full h-[calc(100vh-4.5rem)] flex justify-center items-center">
        <h3 className="font-inter font-bold tracking-wide text-[1.3rem] mb-20 opacity-95">NO ORDERS LEFT</h3>
      </main>
    );
  }

  return (
    <main className="w-full h-[calc(100vh-4.5rem)] p-2 overflow-y-auto">
      <OrderFrame orders={orders} />
    </main>
  );
}

export default OrderContent;
