import React from "react";
import FooterShortCore from "../../components/FooterShortCore";
import BVNVerify from "../../components/forms/BvnVerify";

export default function BVNService() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 gap-5 pt-5">
        <BVNVerify />
      </div>

      <FooterShortCore />
    </div>
  );
}
