import { useEffect, useState } from "react";
import { cardGrid, card, container, header } from "./styles/styles.css";
import axios from "axios";
import { useFetch } from "./hooks/useFetch";
import { PollutionCard } from "./components/pollution-card";
import { WeatherCard } from "./components/weather-card";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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
  const { res, isLoading, error } = useFetch<PollutionResponse>(
    `${BASE_URL}/api/pollution`,
  );

  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

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
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </>
  );
}

export default App;
