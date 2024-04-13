import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import FooterShortCore from "../../components/FooterShortCore";
import LoadingCard from "../../components/LoadingCard";
import BVNVerificationDetail from "../../components/verificationDetail/bvn";
import NINVerificationDetail from "../../components/verificationDetail/nin";
import VNINVerificationDetail from "../../components/verificationDetail/vnin";
import useFetch from "../../hooks/fetch.hook";
import styles from "../../styles/Main.module.css";

export default function VerificationDetail() {
  let { id } = useParams();

  const token = localStorage.getItem("token");
  const [{ isLoading, apiData, serverError }] = useFetch(
    `getVerificationById/${id}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  const [downloading, setDownloading] = useState(false);
  const downloadPDF = async () => {
    try {
      setDownloading(true);
      const response = await axios.get(
        process.env.REACT_APP_SERVER_DOMAIN + `/api/generateCard/${id}`,
        { headers: { Authorization: `Bearer ${token}` }, responseType: "blob" }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "download.pdf"; // Set your desired file name here
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      setDownloading(false);
    } catch (error) {
      setDownloading(false);
      toast.error("An error occurred", {
        duration: 3000,
      });
    }
  };

  if (isLoading) {
    return <LoadingCard />;
  }

  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;
  }

  const data = JSON.parse(apiData?.data || "{}");

  return (
    <div>
      <div className="mx-5">
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="flex justify-between items-center my-5">
          <span className="font-bold text-xl">
            {" "}
            {apiData?.channel.toUpperCase() || "N/A"}
          </span>
          {apiData?.slipType !== "none" && (
            <button
              disabled={downloading}
              onClick={downloading ? () => {} : downloadPDF}
              className={`${styles.btn_inline_width}`}
            >
              {downloading ? "Downloading..." : "Download PDF"}
            </button>
          )}
        </div>

        {apiData?.channel.startsWith("nin-vnin") ? (
          <VNINVerificationDetail data={data} />
        ) : apiData?.channel.startsWith("nin") ? (
          <NINVerificationDetail data={data} />
        ) : apiData?.channel.startsWith("bvn") ? (
          <BVNVerificationDetail data={data} />
        ) : (
          <div></div>
        )}
      </div>

      <FooterShortCore />
    </div>
  );
}
