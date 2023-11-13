import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function handleName(event) {
    const value = event.target.value;
    setName(value);
  }

  function handlePass(event) {
    const value = event.target.value;
    setPass(value);
  }

  const handleLogin = () => {
    const url = "http://rezayari.ir:5050/Auth/Login";
    const data = {
      username: name,
      password: pass,
    };

    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 50px",
          width: 500,
          boxShadow: "0px 0px 15px 5px #E0E0E0",
          borderRadius: 10,
        }}
      >
        <TextField
          value={name}
          onChange={handleName}
          id="outlined-basic"
          label="نام کاربری"
          variant="outlined"
          style={{ margin: "20px 0", width: 250 }}
        />
        <TextField
          value={pass}
          onChange={handlePass}
          id="outlined-basic"
          label="رمز عبور"
          variant="outlined"
          style={{ margin: "20px 0", width: 250 }}
        />
        <Button
          variant="contained"
          style={{ margin: "20px 0", width: 250 }}
          onClick={() => handleLogin()}
        >
          ورود
        </Button>
      </div>
    </div>
  );
}
