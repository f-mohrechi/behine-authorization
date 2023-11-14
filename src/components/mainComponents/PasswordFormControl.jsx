import React, { useState } from "react";
import { StyledPasswordInput } from "../styledComponents/StyledPasswordInput";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { StyledOutlinedInput } from "../styledComponents/passwordInput/StyledOutlinedInput";
import { StyledInputLabel } from "../styledComponents/passwordInput/StyledInputLabel";
import styled from "styled-components";

export default function PasswordFormControl({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const StyledIconButton = styled(IconButton)`
    && {
      color: #4a839e;
    }
  `;

  const StyledVisibilityIcon = styled(Visibility)`
    && {
      color: #4a839e;
    }
  `;

  const StyledVisibilityOffIcon = styled(VisibilityOff)`
    && {
      color: #4a839e;
    }
  `;

  return (
    <StyledPasswordInput variant="outlined">
      <StyledInputLabel htmlFor="outlined-adornment-password">
        رمز عبور
      </StyledInputLabel>

      <StyledOutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        label="رمز عبور"
        endAdornment={
          <InputAdornment position="end">
            <StyledIconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? (
                <StyledVisibilityOffIcon />
              ) : (
                <StyledVisibilityIcon />
              )}
            </StyledIconButton>
          </InputAdornment>
        }
      />
    </StyledPasswordInput>
  );
}
