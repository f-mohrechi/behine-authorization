import { TextField } from "@mui/material";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  && {
    width: 250px;
    background-color: #393c49;
    border-radius: 8px;
    & .MuiOutlinedInput-root {
      color: #fff;
      &.Mui-focused fieldset {
        border-color: #4a839e;
      }
      fieldset {
        border-color: #393c49;
      }
    }

    .MuiInputLabel-root {
      color: #4a839e !important;
      &.Mui-focused {
        font-size: 20px;
      }
    }
  }
`;

export { StyledTextField };
