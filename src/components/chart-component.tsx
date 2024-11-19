import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { HistoricalData } from "../App";
import {
  chartContainer,
  container,
  flexBetween,
  responsiveChartContainer,
} from "../styles/styles.css";
import { DateRangePicker } from "./date-picker";

interface Props {
  data: HistoricalData[];
  dateRange: any[];
  setDateRange: any;
}

export const Chart: React.FC<Props> = ({ data, dateRange, setDateRange }) => {
  return (
    <div className={chartContainer}>
      <div className={flexBetween}>
        <h2>Historical Pollution Data</h2>
        <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
      </div>
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
          <Line
            type="monotone"
            dataKey="water_quality_index"
            stroke="#2ecc71"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
