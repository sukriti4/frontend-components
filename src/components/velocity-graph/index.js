import { useState } from "react";

import CHART_DATA from "./data";
import "./style.css";
const Chart = ({ data }) => {
  const maxHeight = Math.max(...data?.map((item) => item?.ticketCount));
  const length = data.length;
  return (
    <div className="wrapper">
      <p className="dept bottom">Departments</p>
      <p className="tickets left">Number of Tickets</p>
      <ul className="graph">
        {data?.map((item) => (
          <li
            className="chart-item"
            key={item?.id}
            style={{
              backgroundColor: item?.color,
              height: `calc(${item?.ticketCount / maxHeight}*100%)`,
              width: `calc(100%/${length})`
            }}
          >
            <span className="hover-state">{item?.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const VelocityGraph = () => {
  const [showChart, setShowChart] = useState(false);
  const toggleChart = () => {
    setShowChart((prev) => !prev);
  };
  const chartData = CHART_DATA;
  return (
    <section>
      <button className="toggle-button" onClick={toggleChart}>
        Toggle Chart
      </button>
      {showChart && (
        <div className="graph-wrapper">
          <Chart data={chartData} />
        </div>
      )}
    </section>
  );
};

export default VelocityGraph;
