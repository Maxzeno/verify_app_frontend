import { useFormik } from "formik";
import styles from "../../styles/Main.module.css";

export default function PhoneVerify() {
  const formik = useFormik({
    initialValues: {
      nin: "",
      slip: "",
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
      <div className="font-thin text-2xl">NIN Verification: By Phone</div>
      <div className="font-thin text-sm pt-4">Charge: ₦150 + Slip charge</div>

      <form className="pt-7" onSubmit={formik.handleSubmit}>
        <div className="textbox">
          <input
            {...formik.getFieldProps("nin")}
            className={`${styles.textbox_full} w-full`}
            type="text"
            placeholder="Phone number eg. 08082345678"
          ></input>
          <select
            {...formik.getFieldProps("slip")}
            className={`${styles.textbox_full} w-full mt-5`}
            defaultValue=""
          >
            <option value="slip1">Slip1</option>
            <option value="slip2">Slip2</option>
          </select>
          <button className={`${styles.btn_inline_width} mt-5`} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
