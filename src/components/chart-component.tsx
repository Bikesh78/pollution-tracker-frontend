import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { HistoricalData, PollutionResponse } from "../App";
import { chartContainer, responsiveChartContainer } from "../styles/styles.css";

interface Props {
  data: HistoricalData[];
}

export const Chart: React.FC<Props> = ({ data }) => {
  return (
    <div className={chartContainer}>
      <h2 style={{ textAlign: "center", fontWeight: 500 }}>
        Historical Pollution Data
      </h2>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className={responsiveChartContainer}
      >
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="air_quality_index" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
