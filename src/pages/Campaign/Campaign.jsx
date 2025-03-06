import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";
import Create from "../../components/Modal/Create";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

const Columns = ["id", "name", "title", "description", "scheduled at"]

const data = [
  {
    id: 1,
    campaignName: "",
    title: "",
    description: "",
    createdAt: "",
    scheduleAt: "",
  },
];

const Campaign = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleCreate = () => {
    setOpenModal(true);
    // navigate('/campaign/create')
  };

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      campaignName: "",
    },

    onSubmit:(values)=>{
        console.log(values)
        alert(values)
        if(values){
             const id = encodeURIComponent(values.id);
            navigate(`/campaign/create/${values.id}`)
        }
    }
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 items-center justify-between">
        <h1>Campaigns</h1>
      
      </div>
      <DataTable columns={Columns} data={data} />
      <Create open={openModal} formik={formik} />
    </div>
  );
};

export default Campaign;
