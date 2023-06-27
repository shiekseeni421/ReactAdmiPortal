import React from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    if (data.username === "admin") {
      if (data.password === "admin") {
        navigate("/homepage");
      } else {
        alert("invalid password");
      }
    } else {
      alert("invalid user details");
    }
  };

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit(onSubmit)} className="LoginContainer">
        <input
          {...register("username", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
          className="inputEl"
          placeholder="User Name"
        />
        {errors.username?.type === "required" && (
          <p role="alert">user name is required</p>
        )}
        <input
          {...register("password", { required: "Password  is required" })}
          aria-invalid={errors.password ? "true" : "false"}
          className="inputEl"
          placeholder="Password"
          type="password"
        />
        {errors.password && <p role="alert">{errors.password?.message}</p>}
        <button type="submit" className="buttonEl">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
