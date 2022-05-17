import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
const code={
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft:"10px"
  
}
const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
      <h3 style={code}>Coded By <a style={code} href="https://github.com/slimkhemiri">Slim Khemiri</a></h3>
    </>
  )
};

export default Homepage;
