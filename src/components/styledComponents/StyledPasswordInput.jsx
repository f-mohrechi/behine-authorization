import { FormControl } from "@mui/material";
import styled from "styled-components";

const StyledPasswordInput = styled(FormControl)`
  && {
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
  }
`;

export { StyledPasswordInput };
