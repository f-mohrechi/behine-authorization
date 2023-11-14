import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../services";
import PrimaryButton from "../components/mainComponents/PrimaryButton";
import PasswordFormControl from "../components/mainComponents/PasswordFormControl";
import TextInput from "../components/mainComponents/TextInput";
import Layout from "../components/layout/Layout";

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
    <Layout src={"./img/back.svg"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "#4a839e", textAlign: "center" }}>ورود</h1>

          <div style={{ margin: "20px 0" }}>
            <TextInput
              value={state.username}
              onChange={(e) => handleState("username", e.target.value)}
            />
          </div>

          <PasswordFormControl
            value={state.password}
            onChange={(e) => handleState("password", e.target.value)}
          />
        </div>

        <div style={{ margin: "40px 0" }}>
          <PrimaryButton handleLogin={handleLogin} />
        </div>
      </div>
    </Layout>
  );
}
