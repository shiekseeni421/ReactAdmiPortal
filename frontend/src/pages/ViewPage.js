import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/Navbar";
import Button from "react-bootstrap/Button";

function ViewPage() {
  let [data, setData] = useState({});
  const navigate = useNavigate();
  const { state } = useLocation();
  const { projectId } = state;

  useEffect(() => {
    axios.get(`http://localhost:8080/userData/${projectId}`).then((res) => {
      setData(...res.data.userdeatils);
    });
  }, []);

  let backHome = () => {
    navigate("/homepage");
  };
  return (
    <div className="viewPageCont">
      <Navbar portalName="View page" colorCode="#b103fc" textColor="#ffffff" />
      <div className="ViewCard">
        <div className="d-flex align-items-center">
          <p className="heading">Title:</p>
          <p className="title">{data.title}</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="heading">App Code:</p>
          <p className="title">{data.appCode}</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="heading">Project Id:</p>
          <p className="title">{data.projectId}</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="heading">model Id:</p>
          <p className="title">{data.modelId}</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="heading">Version:</p>
          <p className="title">{data.version}</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="heading">Created At:</p>
          <p className="title">{data.createdAt}</p>
        </div>
        <div className="d-flex align-items-center">
          <p className="heading">Updated At:</p>
          <p className="title">{data.updatedAt}</p>
        </div>
      </div>
      <Button variant="primary" className="CreateBtn" onClick={backHome}>
        Back
      </Button>
    </div>
  );
}

export default ViewPage;
