import React from "react";
import OrderFrame from "../../components/users/OrderFrame";

function OrderContent({orders}) {
  return (
    <main className="w-full h-[calc(100vh-4.5rem)] p-4 overflow-y-auto">
      <OrderFrame orders={orders} />
    </main>
  );
}

export default OrderContent;
