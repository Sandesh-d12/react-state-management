import React from "react";
import "./Search.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/home";

const Search = (props) => {
  // const { type, formik } = props;
const dispatch = useDispatch();

 const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      const result = props?.data?.filter(
        (item) =>
          item?.title?.toLowerCase().includes(values.search.toLowerCase()) ||
          item?.body?.toLowerCase().includes(values.search.toLowerCase()) 
      );
      if (result) {
        console.log('res',result)
        dispatch(setData(result));
      } 
    },
  });


  return (
      <form onSubmit={formik.handleSubmit}>
            <div className="_searchWrapper">

        <input
          type="text"
          placeholder={`Search ${props.type}`}
          value={formik.values.search}
          onChange={formik.handleChange}
          name="search"
          className="_searchInput"
        />
        <button type="submit" className="_submitButton">Search</button>
        </div>

      </form>
  );
};

export default Search;
