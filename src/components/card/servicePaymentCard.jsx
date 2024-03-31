import { useFormik } from "formik";
import styles from "../../styles/Main.module.css";

export default function ServicePayment() {
  const formik = useFormik({
    initialValues: {
      amount: "",
    },
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
      return errors;
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values);

      // const submitPromise = submit(values);

      // toast.promise(submitPromise, {
      //     loading: 'Updating...!',
      //     success: <b>Updated Successfully...!</b>,
      //     error: <b>Could not Update!</b>
      // });

      console.log(values);
    },
  });
  return (
    <div className="p-10 bg-white rounded-lg">
      <div className="font-thin text-2xl">Fund via Online Payment</div>
      <div className="font-thin text-sm pt-4">
        Your Wallet will be credited automatically
      </div>

      <form className="pt-7" onSubmit={formik.handleSubmit}>
        <div className="textbox">
          <input
            {...formik.getFieldProps("amount")}
            className={`${styles.textbox_full} w-full`}
            type="number"
            placeholder="Amount"
          ></input>

          <button className={`${styles.btn_inline_width} mt-5`} type="submit">
            Pay Online
          </button>
        </div>
      </form>
    </div>
  );
}
