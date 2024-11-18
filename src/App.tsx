import { useEffect, useState } from "react";
import { cardGrid, card, container, header } from "./styles/styles.css";
import axios from "axios";
import { useFetch } from "./hooks/useFetch";
import { PollutionCard } from "./components/pollution-card";
import { WeatherCard } from "./components/weather-card";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface PollutionData {
  air_quality_index: number;
  date: Date;
  ph_level: number;
  temperature: number;
  water_quality_index: number;
}

interface HistoricalData extends PollutionData {
  id: number;
}

interface PollutionResponse {
  historical_data: HistoricalData[];
  live_data: PollutionData;
  weather: any;
}

function App() {
  // const [histData, setHistData] = useState<any>([]);
  const { res, isLoading, error } = useFetch<{ data: PollutionResponse }>(
    `${BASE_URL}/api/pollution`,
  );

  console.log("res", res?.data?.data?.historical_data);

  // const data = [
  //   { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  //   { name: "Page B", uv: 700, pv: 2000, amt: 2400 },
  //   { name: "Page C", uv: 800, pv: 2400, amt: 2400 },
  //   { name: "Page D", uv: 100, pv: 1400, amt: 2000 },
  // ];

  return (
    <>
      <div className={container}>
        <header className={header}>
          <h1>Phewa Lake Pollution Tracker</h1>
        </header>

        <div className={cardGrid}>
          <PollutionCard />
          <WeatherCard />
        </div>

        <div style={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={400}
              // width={800}
              height={400}
              // data={data}
              data={res?.data?.data?.historical_data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line
                type="monotone"
                dataKey="air_quality_index"
                stroke="#8884d8"
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              {/* <XAxis dataKey="name" /> */}
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default App;
