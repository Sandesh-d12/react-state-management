import React, { useEffect, useState } from "react";
import "./Home.css";
import { useFormik } from "formik";
import reactIcon from "../../assets/react.svg";
import Search from "../../components/Search";
import DataTable from "../../components/DataTable";
import AddDataForm from "./Form/Form";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/home";
import ThemeToggle from "../../components/ToggleTheme";
import { useGetPostsQuery } from "../../services/home";

const Columns = ["id", "title", "body"];

// const data = [
//   {
//     id: 1,
//     name: "John Doe",
//     address: "USA",
//     gender: "male",
//     contact: "+977 9867534262",
//     order: 1,
//   },
//   {
//     id: 2,
//     name: "Ram Doe",
//     address: "Nepal",
//     gender: "male",
//     contact: "+977 9867534262",
//     order: 2,
//   },
//   {
//     id: 3,
//     name: "Gita Doe",
//     address: "India",
//     gender: "Female",
//     contact: "+977 9867534262",
//     order: 3,
//   },
//   {
//     id: 4,
//     name: "John Dai",
//     address: "China",
//     gender: "male",
//     contact: "+977 9867534262",
//     order: 4,
//   },
// ];

const Home = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPostsQuery(undefined, {
    refetchOnReconnect: true,

  });  // Correct usage

  // const [search, setSearch] = useState(data);

  // const formik = useFormik({
  //   initialValues: {
  //     search: "",
  //   },
  //   onSubmit: (values) => {
  //     const result = data?.filter(
  //       (item) =>
  //         item.title.toLowerCase().includes(values.search.toLowerCase()) ||
  //         item.body.toLowerCase().includes(values.search.toLowerCase()) 
  //     );
  //     if (result) {
  //       setSearch(result);
  //     } else {
  //       setSearch([]);
  //     }
  //   },
  // });

  return (
    <div className="_homeContainer">
      <div className="_homeWrapper">
        <h1>Home</h1>
        {/* <ThemeToggle /> */}
        {/* <AddDataForm /> */}

        <div style={{ width: "100%" }}>
          <div className="_actionWrapper">
            <Search type={"Records"} data={data}/>
            {/* <div>
              <div className="_sort">
                {" "}
                Sort
                <div className="_sortList">
                  <ul>
                    {data.map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
          <DataTable columns={Columns} data={data} />
        </div>
        <img src={reactIcon} />
      </div>
    </div>
  );
};

export default Home;
