import { FormControl } from "@mui/material";
import styled from "styled-components";

const StyledSelectInput = styled(FormControl)`
  && {
    background-color: #393c49;
    width: 250px;
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

    .MuiSvgIcon-root {
      fill: #4a839e !important;
    }

    .MuiInputLabel-root {
      color: #4a839e !important;
      &.Mui-focused {
        font-size: 20px;
      }
    }
  }
`;

export { StyledSelectInput };
