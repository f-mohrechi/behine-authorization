import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCities, getProvinces } from "../services/Home";
import Layout from "../components/layout/Layout";
import SelectInput from "../components/mainComponents/SelectInput";
import NotAllowed from "../components/errors/NotAllowed";

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
      }
    };

    fetchData();
  }, [token, navigate]);

  if (!token) {
    return <NotAllowed />;
  }

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
    <Layout src={"./img/home-back.svg"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#4a839e", textAlign: "center" }}>
          استان و شهر خود را انتخاب کنید.
        </h2>

        <SelectInput
          label={"استان"}
          value={selectedProvince}
          onChange={(e) => handleProvinceChange(e.target.value)}
          data={provinces}
        />

        <SelectInput
          label={"شهر"}
          value={selectedCity}
          onChange={handleCity}
          provinces={provinces}
          data={cities}
        />
      </div>
    </Layout>
  );
}
