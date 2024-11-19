import { cardGrid, container, header } from "./styles/styles.css";
import { useFetch } from "./hooks/useFetch";
import { PollutionCard } from "./components/pollution-card";
import { WeatherCard } from "./components/weather-card";
import { Chart } from "./components/chart-component";
import { Loader } from "./components/loader";

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface PollutionData {
  air_quality_index: number;
  date: Date;
  ph_level: number;
  temperature: number;
  water_quality_index: number;
}

export interface HistoricalData extends PollutionData {
  id: number;
}

export interface PollutionResponse {
  historical_data: HistoricalData[];
  live_data: PollutionData;
  weather: any;
}

function App() {
  const { res, isLoading, error } = useFetch<{ data: PollutionResponse }>(
    `${BASE_URL}/api/pollution`,
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
          <PollutionCard />
          <WeatherCard />
        </div>

        <Chart data={res?.data?.data?.historical_data ?? []} />
      </div>
    </>
  );
}

export default App;
