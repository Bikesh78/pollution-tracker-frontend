import {
  card,
  cardContent,
  cardFooter,
  cardHeader,
  cardSubHeader,
  cardSubtitle,
  cardTitle,
  flexBetween,
} from "../styles/styles.css";
import { format, parse } from "date-fns";

const dateString = "Sat, 16 Nov 2024 00:00:00 GMT";

const parsedDate = parse(
  dateString.replace(" GMT", ""),
  "EEE, dd MMM yyyy HH:mm:ss xxx",
  new Date(),
);
const date = new Date(dateString);
const formattedDate = date.toLocaleString("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const getAirQualityStatus = (aqi: number) => {
  if (aqi <= 50) return { label: "Good", color: "teal" };
  if (aqi <= 100) return { label: "Moderate", color: "orange" };
  return { label: "Unhealthy for Sensitive Groups", color: "red" };
};

const getWaterQualityStatus = (wqi: number) => {
  if (wqi <= 45) return { label: "Good", color: "teal" };
  if (wqi <= 60) return { label: "Fair", color: "orange" };
  return { label: "Poor", color: "red" };
};

export const PollutionCard = () => {
  return (
    <div className={card}>
      <div className={cardHeader}>
        <h3 className={cardTitle}>Current Pollution Level</h3>
        <h4 className={cardSubHeader}>Last updated: {formattedDate}</h4>
      </div>

      <div className={cardContent}>
        <div>
          <div className={flexBetween}>
            <p className={cardSubtitle}>Air Quality Index</p>
            <p
              style={{ color: getAirQualityStatus(83).color, fontWeight: 600 }}
            >
              {getAirQualityStatus(83).label}
            </p>
          </div>
          <div
            style={{
              marginTop: "4px",
              height: "10px",
              background: "lightgray",
              borderRadius: "32px",
            }}
          >
            <div
              style={{
                height: "10px",
                borderRadius: "32px",
                background: "orange",
                width: "80%",
              }}
            ></div>
          </div>
          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
            83 AQI
          </p>
        </div>

        <div style={{ marginTop: "8px" }}>
          <div className={flexBetween}>
            <p style={{ fontWeight: 600, fontSize: "14px" }}>
              Water Quality Index
            </p>
            <p
              style={{ color: getAirQualityStatus(83).color, fontWeight: 600 }}
            >
              {getWaterQualityStatus(83).label}
            </p>
          </div>
          <div
            style={{
              marginTop: "4px",
              height: "10px",
              background: "lightgray",
              borderRadius: "32px",
            }}
          >
            <div
              style={{
                height: "10px",
                borderRadius: "32px",
                background: "orange",
                width: "80%",
              }}
            ></div>
          </div>
          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
            83 WQI
          </p>
        </div>
      </div>

      <div className={cardFooter}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.5 }}>
              Temperature
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#333",
                lineHeight: 1.5,
              }}
            >
              {70.68}°F
            </p>
          </div>
          <div>
            <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: 1.5 }}>
              pH Level
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#333",
                lineHeight: 1.5,
              }}
            >
              {13.38}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
