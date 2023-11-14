import React, { useState, useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import SelectInput from "../components/mainComponents/SelectInput";
import NotAllowed from "../components/errors/NotAllowed";
import { useQuery } from "react-query";
import { DataContext } from "../contexts/DataContext";
import { getProvinces, getCities } from "../services/Home";

export default function Home() {
  const token = localStorage.getItem("token");
  const { setProvinces, setCities } = useContext(DataContext);
  const [selectedProvince, setSelectedProvince] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const { data: provincesData } = useQuery(
    "provinces",
    () => getProvinces(token),
    {
      onSuccess: (data) => {
        setProvinces(data);
      },
    }
  );

  const { data: citiesData } = useQuery(
    ["cities", selectedProvince],
    () => getCities(token, selectedProvince),
    {
      enabled: !!selectedProvince,
      onSuccess: (data) => {
        setCities(data);
      },
    }
  );

  if (!token) {
    return <NotAllowed />;
  }

  const handleProvinceChange = (provinceId) => {
    setSelectedProvince(provinceId);
  };

  const handleCityChange = (cityId) => {
    setSelectedCity(cityId);
  };

  return (
    <Layout src="./img/home-back.svg">
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
          label="استان"
          value={selectedProvince}
          onChange={(e) => handleProvinceChange(e.target.value)}
          data={provincesData}
        />

        <SelectInput
          label="شهر"
          value={selectedCity}
          onChange={(e) => handleCityChange(e.target.value)}
          data={citiesData}
        />
      </div>
    </Layout>
  );
}
