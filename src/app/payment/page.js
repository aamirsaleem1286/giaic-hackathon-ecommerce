"use client";

import { useUser } from "@clerk/nextjs";

const PaymentPage = () => {

    const { user } = useUser();

const paymentButton = ()=>{
    alert("payment done")
    window.location.href="/" ;
}

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Payment Page</h1>
      <p>Welcome, {user?.fullName}!</p>
      <p>Proceed with your payment here.</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4" onClick={paymentButton}> 
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
