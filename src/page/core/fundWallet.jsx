import React from "react";
import FooterShortCore from "../../components/FooterShortCore";
import AccountCard from "../../components/card/accountCard";
import DashboardCard from "../../components/card/dashboardCard";
import ServicePayment from "../../components/card/servicePaymentCard";

export default function FundWallet() {
  return (
    <div>
      <DashboardCard welcomeText={"Hello"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-5 pt-5">
        <ServicePayment />
        <AccountCard />
      </div>

      <FooterShortCore />
    </div>
  );
}
