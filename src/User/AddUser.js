import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AddUser = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8090/user", {
      name: name,
      username: username,
      email: email,
    });

    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label "> Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your name"
                name={name}
                onChange={handleName}
              />
            </div>
            <div className="mb-3">
              <label className="form-label "> Username</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your username"
                name={username}
                onChange={handleUsername}
              />
            </div>
            <div className="mb-3">
              <label className="form-label ">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email address"
                name={email}
                onChange={handleEmail}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-outline-danger mx-2">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
