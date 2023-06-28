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
      <div className="ViewDetails">
        <div className="viewCard">
          <h3>Project Details</h3>
          <div className="projectDetails">
            <div className="ViewEl">
              <p className="title">Project Name</p>
              <div className="subTitle">{data.title}</div>
            </div>
            <div className="ViewEl">
              <p className="title">Project Id</p>
              <div className="subTitle">{data.projectId}</div>
            </div>
            <div className="ViewEl">
              <p className="title">App Code</p>
              <div className="subTitle">{data.appCode}</div>
            </div>
            <div className="ViewEl">
              <p className="title">Model Id</p>
              <div className="subTitle">{data.modelId}</div>
            </div>
            <div className="ViewEl">
              <p className="title">Created At</p>
              <div className="subTitle">{data.createdAt}</div>
            </div>
            <div className="ViewEl">
              <p className="title">Updated At</p>
              <div className="subTitle">{data.updatedAt}</div>
            </div>
            <div className="ViewEl">
              <p className="title">Version</p>
              <div className="subTitle">{data.version}</div>
            </div>
            <div className="ViewEl">
              <p className="title">Description</p>
              <div className="subTitle descriptionEl">{data.description}</div>
            </div>
          </div>
          <Button variant="primary" className="CreateBtn" onClick={backHome}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
