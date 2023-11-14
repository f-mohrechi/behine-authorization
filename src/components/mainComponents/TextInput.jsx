import React from "react";
import { StyledTextField } from "../styledComponents/StyledTextField";

export default function TextInput({ value, onChange }) {
  return (
    <StyledTextField
      value={value}
      onChange={onChange}
      id="outlined-basic"
      label="نام کاربری"
      variant="outlined"
      // style={{ margin: "20px 0", width: 250 }}
    />
  );
}
