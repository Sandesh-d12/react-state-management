import React, { use } from "react";
import { useFormik } from "formik";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../redux/home";

const AddDataForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      address: "",
      contact: "",
    },

    onSubmit: (values,actions) => {
      console.log(values);
      const res = [ values];
      dispatch(setData(res));

      actions.resetForm();
    },
  });

  //   formik.resetForm()

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            placeholder="Enter Gender"
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </div>
        <div>
          <label>Contact</label>
          <input
            type="text"
            placeholder="Enter Contact"
            name="contact"
            onChange={formik.handleChange}
            value={formik.values.contact}
          />
        </div>
        <button type="submit" className="_submitButton">Submit</button>
      </form>
    </div>
  );
};

export default AddDataForm;
