import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../services";

const initialState = {
  username: "",
  password: "",
};

export default function Login() {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleState = (name, value) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    const res = await LoginService(state);
    if (res) {
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } else {
      console.error("Error", res);
    }
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
          value={state.username}
          onChange={(e) => handleState("username", e.target.value)}
          id="outlined-basic"
          label="نام کاربری"
          variant="outlined"
          style={{ margin: "20px 0", width: 250 }}
        />
        <TextField
          value={state.password}
          onChange={(e) => handleState("password", e.target.value)}
          id="outlined-basic"
          label="رمز عبور"
          variant="outlined"
          style={{ margin: "20px 0", width: 250 }}
        />
        <Button
          variant="contained"
          style={{ margin: "20px 0", width: 250 }}
          onClick={handleLogin}
        >
          ورود
        </Button>
      </div>
    </div>
  );
}
