import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { usePaystackPayment } from "react-paystack";
import useFetch from "../../hooks/fetch.hook";
import styles from "../../styles/Main.module.css";

export default function ServicePayment() {
  const [data, setData] = useState("");

  const token = localStorage.getItem("token");
  const [{ isLoading, apiData, serverError }] = useFetch("getUserAuth", {
    headers: { Authorization: `Bearer ${token}` },
  });

  const config = {
    reference: new Date().getTime().toString(),
    email: apiData?.email || "",
    amount: parseFloat(data || "0") * 100, // 20000 kobo = N200
    publicKey: process.env.REACT_APP_API_KEY,
    metadata: {
      reason: "topup",
      id: apiData?._id || "",
    },
  };

  const onSuccess = (reference) => {
    setData("");
    toast.success("You account will be created within a few minutes", {
      duration: 3000,
    });
    console.log(reference);
  };

  const onClose = () => {
    setData("");
    console.log("closed");
  };

  console.log(config);
  const initializePayment = usePaystackPayment(config);

  if (serverError) {
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;
  }

  return (
    <div className="p-10 bg-white rounded-lg">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="font-thin text-2xl">Fund via Online Payment</div>
      <div className="font-thin text-sm pt-4">
        Your Wallet will be credited automatically
      </div>

      <div className="pt-7">
        <div className="textbox">
          <input
            onChange={(e) => setData(e.target.value)}
            className={`${styles.textbox_full} w-full`}
            type="number"
            placeholder="Amount"
            value={data}
          />

          <button
            disabled={isLoading}
            onClick={() => {
              if (isLoading) {
                return;
              }

              if (apiData) {
                initializePayment({ onSuccess, onClose, config });
              }
            }}
            className={`${styles.btn_inline_width} mt-5`}
          >
            Pay Online
          </button>
        </div>
      </div>
    </div>
  );
}
