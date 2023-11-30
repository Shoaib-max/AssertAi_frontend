import { Bar } from "react-chartjs-2";
export const GraphChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Sales performence</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
