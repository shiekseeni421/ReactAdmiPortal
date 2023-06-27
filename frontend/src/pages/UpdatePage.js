import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

import "./index.scss";
import axios from "axios";

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
    axios.put(`http://localhost:8080/upDate/${projectId}`, data).then((res) => {
      alert(res.data.message);
      navigate("/homepage");
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
            <label className="lable">Project Id</label>
            <input
              defaultValue={data.projectId}
              className="input"
              placeholder="Project Id"
              {...register("projectId", { required: true })}
              aria-invalid={errors.projectId ? "true" : "false"}
            />
            {errors.projectId?.type === "required" && (
              <p role="alert">Project Id is required</p>
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
        </form>
      </div>
    </div>
  );
}

export default UpdatePage;
