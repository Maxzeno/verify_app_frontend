import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import avatarNotAvailable from "../../assets/images/not-available.jpg";
import FooterShortCore from "../../components/FooterShortCore";
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
      console.error("Error downloading PDF:", error);
      setDownloading(false);
    }
  };

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Loading...</h1>;
  }

  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;
  }

  const data = JSON.parse(apiData?.data || "{}");

  return (
    <div>
      <div className="mx-5">
        <div className="flex justify-between items-center my-5">
          <span className="font-bold text-xl">
            {" "}
            {apiData?.channel.toUpperCase() || "N/A"}
          </span>
          {apiData?.channel.startsWith("nin") && (
            <button
              disabled={downloading}
              onClick={downloading ? () => {} : downloadPDF}
              className={`${styles.btn_inline_width}`}
            >
              {downloading ? "Downloading..." : "Download PDF"}
            </button>
          )}
        </div>
        <div className="pt-2 pb-5">
          <img
            src={data?.data?.photo || avatarNotAvailable}
            alt="Person"
            className="h-[200px] w-[200px] rounded-lg"
          />
        </div>
        <div className="py-1">
          <span className="font-bold">NIN:</span> {data?.data?.nin || "N/A"}
        </div>
        <div className="py-1">
          <span className="font-bold">Tracking ID:</span>{" "}
          {data?.data?.trackingId || "N/A"}
        </div>
        <div className="py-1">
          <span className="font-bold">Last Name:</span>{" "}
          {data?.data?.surname || "N/A"}
        </div>

        <div className="py-1">
          <span className="font-bold">First Name:</span>{" "}
          {data?.data?.firstname || "N/A"}
        </div>

        <div className="py-1">
          <span className="font-bold">Middle Name:</span>{" "}
          {data?.data?.middlename || "N/A"}
        </div>

        <div className="py-1">
          <span className="font-bold">Date of Birth:</span>{" "}
          {data?.data?.birthdate || "N/A"}
        </div>
        <div className="py-1">
          <span className="font-bold">Genger:</span>{" "}
          {data?.data?.gender || "N/A"}
        </div>
        <div className="py-1">
          <span className="font-bold">Phone number:</span>{" "}
          {data?.data?.telephoneno || "N/A"}
        </div>
      </div>

      <FooterShortCore />
    </div>
  );
}
