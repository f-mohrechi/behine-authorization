import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { getCities, getProvinces } from "../services/Home";

export default function Home() {
  const [provinces, setProvinces] = useState([]);
  const token = localStorage.getItem("token");
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await getProvinces(token);
          setProvinces(response);
        } catch (error) {
          console.error("Error fetching provinces:", error.message);
        }
      } else {
        navigate("/");
      }
    };

    fetchData();
  }, [token, navigate]);

  const handleProvinceChange = async (provinceId) => {
    setSelectedProvince(provinceId);
    try {
      const response = await getCities(token, provinceId);
      setCities(response);
    } catch (error) {
      console.error("Error fetching cities:", error.message);
    }
  };

  const handleCity = (event) => {
    setSelectedCity(event.target.value);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 50 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 50px",
          width: 500,
          boxShadow: "0px 0px 15px 5px #E0E0E0",
          borderRadius: 10,
        }}
      >
        {console.log(token, "dmwod")}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">استان</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedProvince}
            label="استان"
            onChange={(e) => handleProvinceChange(e.target.value)}
          >
            {provinces &&
              provinces.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">شهر</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedCity}
            label="شهر"
            onChange={handleCity}
          >
            {cities &&
              cities.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
