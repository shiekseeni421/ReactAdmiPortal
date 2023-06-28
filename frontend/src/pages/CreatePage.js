import React from "react";
import Navbar from "../component/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";

import "./index.scss";

function CreatePage() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    let createDate = moment().format("MMMM Do YYYY, h:mm a"); // June 28th 2023, 10:48:40 am    ;
    data.createdAt = createDate;
    data.updatedAt = createDate;
    axios
      .post("http://localhost:8080/createuser", data)
      .then((res) => {
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          navigate("/homepage");
        }, 3000);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <div className="CreatePageEl">
      <Navbar portalName="Create Page" colorCode="blue" textColor="#ffffff" />
      <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create project</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <label className="lable">App Code</label>
            <input
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
              className="input"
              placeholder="Description"
              {...register("description", { required: true })}
              aria-invalid={errors.description ? "true" : "false"}
            />
            {errors.description?.type === "required" && (
              <p role="alert">description is required</p>
            )}
          </div>
          <Button variant="danger" className="submit" type="submit">
            Submit
          </Button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
