import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let maxiVal = 0;
  for (let dataPoint of props.dataPoints) {
    maxiVal = Math.max(maxiVal, dataPoint.value);
  }
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxiVal}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
