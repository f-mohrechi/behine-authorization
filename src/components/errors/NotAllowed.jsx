import { Link } from "@mui/material";
import React from "react";

export default function NotAllowed() {
  return (
    <div style={{ margin: 100, textAlign: "center" }}>
      <h2 style={{ color: "#4a839e" }}>شما به این صفحه دسترسی ندارید.</h2>
      <p style={{ color: "#fff", fontSize: 20 }}>
        برگشت به{" "}
        <Link href="/" color="#fff">
          {"صفحه ورورد"}
        </Link>
      </p>
    </div>
  );
}
