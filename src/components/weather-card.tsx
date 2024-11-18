import {
  card,
  cardContent,
  cardHeader,
  cardSubHeader,
  cardTitle,
  flexBetween,
} from "../styles/styles.css";
import {
  Droplets,
  Eye,
  Sun,
  Sunrise,
  Sunset,
  Thermometer,
  Wind,
} from "lucide-react";

export const WeatherCard = () => {
  return (
    <div className={`${card} weather-card`}>
      <div className={cardHeader}>
        <h3 className={cardTitle}>Weather Conditions</h3>
        <h4 className={cardSubHeader}>Current weather in Pokhara</h4>
      </div>

      <div className={cardContent}>
        <div className={flexBetween}>
          <div style={{ paddingBlock: "8px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Thermometer style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Temperature:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>22°C</p>
          </div>
          <div style={{ paddingBlock: "8px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Droplets style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Humidity:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>{22}%</p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ paddingBlock: "8px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Wind style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Wind:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>{22} m/s</p>
            <p style={{ marginLeft: "34px" }}>Direction: {25}°</p>
          </div>
          <div style={{ paddingBlock: "8px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Eye style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Visibility:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>{200 / 1000} km</p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <div style={{ paddingBlock: "8px" }}> */}
          {/*   <p style={{ display: "flex", alignItems: "center" }}> */}
          {/*     <Sun style={{ marginRight: "8px" }} /> */}
          {/*     <span style={{ fontWeight: 600 }}>Conditions:</span> */}
          {/*   </p> */}
          {/*   <p style={{ marginLeft: "34px" }}>{"Clear sky"}</p> */}
          {/* </div> */}
          <div style={{ paddingBlock: "8px" }}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <Sunrise style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Sunrise:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>05:45 AM</p>
          </div>

          <div style={{ paddingBlock: "8px" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Sunset style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: 600 }}>Sunset:</span>
            </p>
            <p style={{ marginLeft: "34px" }}>6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};
