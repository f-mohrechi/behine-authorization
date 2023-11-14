import { Grid } from "@mui/material";
import React from "react";

export default function Layout({ children, src }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
      <div
        style={{
          padding: "30px 50px",
          display: "flex",
          alignItems: "center",
          width: 1000,
          height: 600,
          boxShadow: "0px 0px 10px 2px #2a2c35",
          borderRadius: 8,
          background: "#1F1D2B",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 5 }}
          alignItems="center"
        >
          <Grid item xs={6}>
            {children}
          </Grid>

          <Grid item xs={6}>
            <img style={{ width: 450, borderRadius: 10 }} src={src} alt="" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
