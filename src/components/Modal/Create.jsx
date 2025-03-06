import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ formik }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);



  return (
    <>
      {/* <button className="btn" onClick={toggleModal}>
        Open Modal
      </button> */}
      <button className="btn btn-info w-50" onClick={toggleModal}>
        Create Campaign
      </button>
      {isModalOpen && (
        <dialog className="modal" open>
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={toggleModal}
            >
              ✕
            </button>
            <form onSubmit={formik.handleSubmit}>
              {/* Button to close the modal */}

              <label>Campaign Name</label>
              <input
                type="text"
                name="campaignName"
                onChange={formik.handleChange}
                value={formik.values.campaignName}
              />
              <button type="submit" className="_submitButton">
                Submit
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Create;
