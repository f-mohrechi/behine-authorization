import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [provinces, setProvinces] = useState([]);
  const token = localStorage.getItem("token");
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      const fetchProvinces = async () => {
        try {
          const response = await axios.get(
            "http://rezayari.ir:5050/CityAndProvince/GetProvince",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setProvinces(response.data);
        } catch (error) {
          console.error("Error:", error.message);
        }
      };

      fetchProvinces();
    }
  }, [token]);

  const handleProvinceChange = async (provinceId) => {
    setSelectedProvince(provinceId);
    try {
      const response = await axios.get(
        "http://rezayari.ir:5050/CityAndProvince/GetCity",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            provinceId: provinceId,
          },
        }
      );
      setCities(response.data);
    } catch (error) {
      console.error("Error:", error.message);
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
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">استان</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedProvince}
            label="استان"
            onChange={(e) => handleProvinceChange(e.target.value)}
          >
            {provinces.map((item) => {
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
            {cities.map((item) => {
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
