import React, { useState, useEffect } from "react";
import Axios from "axios";

const App = () => {
  const endPointApi = "https://randomuser.me/api/";
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const { status, data } = await Axios.get(endPointApi);
      console.log(data.results[0]);
      if (status === 200) {
        console.log("response is okay");
        setData(data.results[0]);
      } else {
        throw new Error("Something gonna be wrong!");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={data.picture?.large} height="100px" width="100px"></img>
      <h3>Age: {data.dob?.age}</h3>
      <h3>
        Name: {data.name?.title + " "} {data.name?.first}
        {" " + data.name?.last}
      </h3>
    </div>
  );
};

export default App;
