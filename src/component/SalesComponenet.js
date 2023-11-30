import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import { GraphChart } from "./dataChart/GraphChart";

Chart.register(CategoryScale);

function SalesComponent() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getGraph");
        setUser(response?.data?.data || []);
        console.log(response.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: user.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: user.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "pink",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [user]);

  const options = {
    elements: {
      arc: {
        borderWidth: 10,
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GraphChart chartData={chartData} options={options} />
    </div>
  );
}

export default SalesComponent;
