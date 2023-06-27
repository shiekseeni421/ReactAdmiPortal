import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import "./index.scss";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage() {
  let [mainData, setMainData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/userData")
      .then((response) => {
        console.log(response.data.userdeatils);
        setMainData(response.data.userdeatils);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let CreateEle = () => {
    navigate("/createPage");
  };

  let updatepage = (projectId) => {
    navigate("/updatepage", { state: { projectId: projectId } });
  };

  let deleteItem = (id) => {
    axios
      .delete(`http://localhost:8080/deleteproject/${id}`)
      .then((res) => {
        setMainData(res.data.userdeatils);
        alert("delete successful ");
      })
      .catch((err) => {
        alert(err.data.message);
      });
  };

  let viewItem = (projectId) => {
    navigate("/viewpage", { state: { projectId: projectId } });
  };
  return (
    <div className="HomePageEl">
      <Navbar portalName="Home Page" colorCode="#ADD8E6" textColor="#000000" />

      {mainData.length > 0 ? (
        <div className="table-container">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Project Id</th>
                <th>App Code</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mainData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.projectId}</td>
                    <td>{item.appCode}</td>
                    <td>{item.title}</td>
                    <td>
                      <Button
                        variant="info"
                        onClick={() => {
                          viewItem(item.projectId);
                        }}
                      >
                        Read
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          updatepage(item.projectId);
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteItem(item.projectId);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}

      <Button variant="primary" className="CreateBtn" onClick={CreateEle}>
        Create Element
      </Button>
    </div>
  );
}

export default HomePage;
