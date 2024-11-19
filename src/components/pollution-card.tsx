import { PollutionData } from "../App";
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

const getDate = (dateString: string) => {
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
  return formattedDate;
};

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

export interface Props {
  data: PollutionData;
  refetch: () => void;
}

export const PollutionCard: React.FC<Props> = ({ data, refetch }) => {
  return (
    <div className={card}>
      <div
        className={cardHeader}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h3 className={cardTitle}>Current Pollution Level</h3>
          <h4 className={cardSubHeader}>
            Last updated: {getDate(data?.date ?? "")}
          </h4>
        </div>

        <button style={{ alignSelf: "center" }} onClick={refetch}>
          Reload
        </button>
      </div>

      <div className={cardContent}>
        <div>
          <div className={flexBetween}>
            <p className={cardSubtitle}>Air Quality Index</p>
            <p
              style={{
                color: getAirQualityStatus(data?.air_quality_index).color,
                fontWeight: 600,
              }}
            >
              {getAirQualityStatus(data?.air_quality_index).label}
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
                background: getAirQualityStatus(data?.air_quality_index).color,
                width: `${(data?.air_quality_index / 300) * 100}%`,
              }}
            ></div>
          </div>
          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
            {data?.air_quality_index} AQI
          </p>
        </div>

        <div style={{ marginTop: "8px" }}>
          <div className={flexBetween}>
            <p style={{ fontWeight: 600, fontSize: "14px" }}>
              Water Quality Index
            </p>
            <p
              style={{
                color: getWaterQualityStatus(data?.water_quality_index).color,
                fontWeight: 600,
              }}
            >
              {getWaterQualityStatus(data?.water_quality_index).label}
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
                background: getWaterQualityStatus(data?.water_quality_index)
                  .color,
                width: `${(data?.water_quality_index / 100) * 100}%`,
              }}
            ></div>
          </div>
          <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
            {data?.water_quality_index} WQI
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
              {data?.temperature}°F
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
              {data?.ph_level}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
