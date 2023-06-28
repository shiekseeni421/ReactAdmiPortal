import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import "./index.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function UpdatePage() {
  let [data, setData] = useState({});
  const navigate = useNavigate();
  const { state } = useLocation();
  const { projectId } = state; // Read values passed on state
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    axios.get(`http://localhost:8080/userData/${projectId}`).then((res) => {
      setData(...res.data.userdeatils);
    });
  }, []);
  const onSubmit = (data) => {
    let createDate = moment().format("MMMM Do YYYY, h:mm a"); // June 28th 2023, 10:48:40 am    ;
    data.updatedAt = createDate;
    axios.put(`http://localhost:8080/upDate/${projectId}`, data).then((res) => {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        navigate("/homepage");
      }, 3000);
    });
  };
  return (
    <div className="CreatePageEl">
      <Navbar portalName="Update page" colorCode="blue" textColor="#ffffff" />
      <div className="form">
        <div className="subtitle">Let's update project details</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label className="lable">App Code</label>
            <input
              defaultValue={data.appCode}
              className="input"
              placeholder="App code"
              {...register("appCode", { required: true })}
              aria-invalid={errors.appCode ? "true" : "false"}
            />
            {errors.appCode?.type === "required" && (
              <p role="alert">First name is required</p>
            )}
          </div>

          <div className="input-container">
            <label className="lable">Model Id</label>
            <input
              defaultValue={data.modelId}
              className="input"
              placeholder="Model Id"
              {...register("modelId", { required: true })}
              aria-invalid={errors.modelId ? "true" : "false"}
            />
            {errors.modelId?.type === "required" && (
              <p role="alert">Model Id is required</p>
            )}
          </div>
          <div className="input-container">
            <label className="lable">Version</label>
            <input
              defaultValue={data.version}
              className="input"
              placeholder="Version"
              {...register("version", { required: true })}
              aria-invalid={errors.version ? "true" : "false"}
            />
            {errors.version?.type === "required" && (
              <p role="alert">Version is required</p>
            )}
          </div>

          <div className="input-container">
            <label className="lable">Title</label>
            <input
              defaultValue={data.title}
              className="input"
              placeholder="Title"
              {...register("title", { required: true })}
              aria-invalid={errors.title ? "true" : "false"}
            />
            {errors.title?.type === "required" && (
              <p role="alert">Title is required</p>
            )}
          </div>

          <div className="input-container">
            <label className="lable">Description</label>
            <textarea
              defaultValue={data.description}
              className="input"
              placeholder="Description"
              {...register("description", { required: true })}
              aria-invalid={errors.description ? "true" : "false"}
            />
            {errors.description?.type === "required" && (
              <p role="alert">description is required</p>
            )}
          </div>

          <input type="submit" className="submit" />
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default UpdatePage;
