import React from "react";
import { useParams } from "react-router-dom";
import avatarRichard from "../../assets/avatar_2.jpeg";
import FooterShortCore from "../../components/FooterShortCore";
import styles from "../../styles/Main.module.css";

export default function VerificationDetail() {
  let { id } = useParams();
  console.log(id, "the detail id");
  return (
    <div>
      <div className="mx-5">
        <div className="flex justify-between items-center my-5">
          <span className="font-bold text-xl"> NIN Verification</span>
          <button className={`${styles.btn_inline_width}`}>Download PDF</button>
        </div>
        <div className="py-2">
          <img
            src={avatarRichard}
            alt="Person"
            className="h-[200px] w-[200px] rounded-lg"
          />
        </div>
        <div className="py-1">
          <span className="font-bold">Fullname:</span> Emmanuel Chidera
        </div>
        <div className="py-1">
          <span className="font-bold">Birthday:</span> 12-03-2001
        </div>
        <div className="py-1">
          <span className="font-bold">Fullname:</span> Emmanuel Chidera
        </div>
      </div>

      <FooterShortCore />
    </div>
  );
}
