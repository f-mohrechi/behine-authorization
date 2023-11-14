import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  && {
    background-color: #4a839e;
    color: #fff;
    box-shadow: none;
    width: 250px;
    padding: 15px 0;
    &:hover {
      box-shadow: 0px 8px 24px 0px #4a839e52;
      background-color: #fff;
      border: 1px solid #4a839e;
      color: #4a839e;
    }
  }
`;

export { StyledButton };
