import axios from "axios";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { NIN_CHARGE } from "../../helper/constant";
import styles from "../../styles/Main.module.css";

export default function DemoVerify() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      dob: "",
      slipType: "nin-basic",
    },
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
      return errors;
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values, "nin valuess");

      const token = await localStorage.getItem("token");

      try {
        const data = await axios.post(
          process.env.REACT_APP_SERVER_DOMAIN + "/api/verifyNINByDemo",
          values,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        try {
          console.log(data.data, data.status, "datat");
          if (data.status === 200) {
            Navigate(`/detail/${data.data._id}`, { replace: true });
          }
        } catch (error) {
          console.log(error);
          toast.error("An error occurred", {
            duration: 20000,
          });
        }
      } catch (error) {
        console.log(error?.response?.data?.error || "An error occurred");

        toast.error(error?.response?.data?.error || "An error occurred", {
          duration: 20000,
        });
      }
    },
  });
  return (
    <div>
      <div className="p-10 bg-white rounded-lg">
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="font-thin text-2xl">NIN Verification: By Demo Data</div>
        <div className="font-thin text-sm pt-4">Charge: ₦150 + Slip charge</div>

        <form className="pt-7" onSubmit={formik.handleSubmit}>
          <div className="textbox">
            <input
              {...formik.getFieldProps("firstname")}
              className={`${styles.textbox_full} w-full`}
              type="text"
              placeholder="First name"
            ></input>
            <input
              {...formik.getFieldProps("lastname")}
              className={`${styles.textbox_full} w-full mt-5`}
              type="text"
              placeholder="Last name"
            ></input>
            <input
              {...formik.getFieldProps("gender")}
              className={`${styles.textbox_full} w-full mt-5`}
              type="text"
              placeholder="Gender"
            ></input>
            <input
              {...formik.getFieldProps("dob")}
              className={`${styles.textbox_full} w-full mt-5`}
              type="date"
              placeholder="Birth Day"
            ></input>
            <select
              {...formik.getFieldProps("slipType")}
              className={`${styles.textbox_full} w-full mt-5`}
              defaultValue=""
            >
              <option value="nin-basic">
                Basic (₦{NIN_CHARGE} + Slip:Free)
              </option>
              <option value="nin-basic-id">
                ID Slip (₦{NIN_CHARGE} + Slip:₦100)
              </option>
              <option value="nin-premium">
                Premuim Slip(₦{NIN_CHARGE} + Slip:₦150)
              </option>
              <option value="nin-customised">
                Customised Slip (₦{NIN_CHARGE} + Slip:₦100)
              </option>
            </select>
            <button className={`${styles.btn_inline_width} mt-5`} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
