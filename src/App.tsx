import { cardGrid, container, header } from "./styles/styles.css";
import { useFetch } from "./hooks/useFetch";
import { PollutionCard } from "./components/pollution-card";
import { WeatherCard } from "./components/weather-card";
import { Chart } from "./components/chart-component";
import { Loader } from "./components/loader";
import { useMemo, useState } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export interface PollutionData {
  air_quality_index: number;
  date: string;
  ph_level: number;
  temperature: number;
  water_quality_index: number;
}

export interface HistoricalData extends PollutionData {
  id: number;
}
export interface Weather {
  condition: string;
  description: string;
  feels_like: number;
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  wind_deg: number;
  wind_speed: number;
  visibility: number;
}

export interface PollutionResponse {
  historical_data: HistoricalData[];
  live_data: PollutionData;
  weather: Weather;
}

function App() {
  const [dateRange, setDateRange] = useState<any[]>([null, null]);
  const [startDate, endDate] = dateRange;

  const url = useMemo(() => {
    let result = `${BASE_URL}/api/pollution`;
    if (startDate && endDate) {
      result = `${BASE_URL}/api/pollution?start_date=${startDate}&end_date=${endDate}`;
    }
    return result;
  }, [startDate, endDate]);

  const { res, isLoading, refetch } = useFetch<{ data: PollutionResponse }>(
    url,
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className={container}>
        <header className={header}>
          <h1>Phewa Lake Pollution Tracker</h1>
        </header>

        <div className={cardGrid}>
          <PollutionCard data={res?.data?.data?.live_data!} refetch={refetch} />
          <WeatherCard data={res?.data?.data?.weather!} />
        </div>

        <Chart
          data={res?.data?.data?.historical_data ?? []}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>
    </>
  );
}

export default App;
