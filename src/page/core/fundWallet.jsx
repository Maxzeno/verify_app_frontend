import React from "react";
import FooterShortCore from "../../components/FooterShortCore";
import AccountCard from "../../components/card/accountCard";
import ServicePayment from "../../components/card/servicePaymentCard";

export default function FundWallet() {
  return (
    <div>
      <div className="h-60 bg-[#0c1e29] text-center mx-5 rounded-md">
        <div className="text-white font-thin text-4xl pt-20">
          Hello Maxzeno!
        </div>
        <div className="text-white font-thin text-lg pt-7">
          Wallet Balance: ₦ 0
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-5 pt-5">
        <ServicePayment />
        <AccountCard />
      </div>

      <FooterShortCore />
    </div>
  );
}
