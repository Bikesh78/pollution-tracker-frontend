import { Weather } from "../App";
import {
  card,
  cardContent,
  cardHeader,
  cardSubHeader,
  cardTitle,
  flexBetween,
} from "../styles/styles.css";
import { Droplets, Sun, Thermometer, Wind } from "lucide-react";

interface Props {
  data: Weather;
}

export const WeatherCard: React.FC<Props> = ({ data }) => {
  return (
    <div className={`${card} weather-card`}>
      <div className={cardHeader}>
        <h3 className={cardTitle}>Weather Conditions</h3>
        <h4 className={cardSubHeader}>Current weather in Pokhara</h4>
      </div>

      <div className={cardContent}>
        <div className={flexBetween}>
          <div style={{ paddingBlock: "8px", width: "150px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Thermometer style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Temperature:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>
              {data?.temp}
              <sup>o</sup>F
            </p>
          </div>
          <div style={{ paddingBlock: "8px", width: "150px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Droplets style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Humidity:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>{data?.humidity}%</p>
          </div>
        </div>

        <div className={flexBetween}>
          <div style={{ paddingBlock: "8px", width: "150px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Thermometer style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Max Temp:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>
              {data?.temp_max}
              <sup>o</sup>F
            </p>
          </div>
          <div style={{ paddingBlock: "8px", width: "150px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Droplets style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Min Temp:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>
              {data?.temp_min}
              <sup>o</sup>F
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ paddingBlock: "8px", width: "150px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Wind style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Wind:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>{data?.wind_speed} m/s</p>
          </div>

          <div style={{ paddingBlock: "8px", width: "150px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Sun style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Conditions:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>{data?.condition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
