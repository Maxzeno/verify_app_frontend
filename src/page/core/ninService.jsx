import React from "react";
import FooterShortCore from "../../components/FooterShortCore";
import DemoVerify from "../../components/forms/DemoVerify";
import NINVerify from "../../components/forms/NinVerify";
import PhoneVerify from "../../components/forms/PhoneVerify";
import VNINVerify from "../../components/forms/VninVerify";

export default function NINService() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-5 pt-5">
        <NINVerify />
        <PhoneVerify />
        <DemoVerify />
        <VNINVerify />
      </div>

      <FooterShortCore />
    </div>
  );
}
