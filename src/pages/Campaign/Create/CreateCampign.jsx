import React from "react";
import { useFormik } from "formik";

const CreateCampign = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      scheduledAt: "",
      createdAt: "",
    },
    onSubmit:(values) => {
        console.log(values)
    }
  });

  return (
    <div className="bg-#ddd">
      <h2>Create a Campaign</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>Schedule</label>
        <input type="datetime-local" className="input" name="scheduledAt" onChange={formik.handleChange} value={formik.values.scheduledAt}/>
        <button type="Submit"> create campaign</button>
      </form>
    </div>
  );
};

export default CreateCampign;
