import React from "react";
import { StyledSelectInput } from "../styledComponents/selectInput/StyledSelectInput";
import { InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

export default function SelectInput({ value, onChange, data, label }) {
  const StyledMenuItem = styled(MenuItem)`
    && {
      color: #fff;
      background-color: #181722;
      &:hover {
        background-color: #4b4a55;
        color: #181722;
      }

      &.MuiMenuItem-root {
        &.Mui-selected {
          background-color: #09080c;
          color: white;
          font-weight: 600;
        }
      }

      &:first-of-type {
        background-color: #181722;
      }
    }
  `;

  return (
    <StyledSelectInput sx={{ width: 250, m: 2 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={label}
        onChange={onChange}
      >
        {data &&
          data.map((item) => {
            return (
              <StyledMenuItem key={item.id} value={item.name}>
                {item.name}
              </StyledMenuItem>
            );
          })}
      </Select>
    </StyledSelectInput>
  );
}
