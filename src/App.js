import logo from "./logo.svg";
import "./App.css";
import Globe from "react-globe.gl";
import globeJson from "./countries.json";

function App() {
  return (
    <div className="cursor-move">
      <Globe
        polygonsData={globeJson.features}
        polygonCapColor={(geometry) => {
          return geometry.properties.visited ? "pink" : "grey";
        }}
        polygonSideColor={(geometry) => {
          return geometry.properties.visited ? "#f78fa9" : "#636363";
        }}
        polygonStrokeColor={(geometry) => {
          return geometry.properties.visited ? "#636363" : "#f78fa9";
        }}
        polygonLabel={(geometry) => {
          return geometry.properties.name;
        }}
        onPolygonClick={(geometry) => geometry.properties.visited}
        polygonAltitude={0.015}
        polygonsTransitionDuration={300}
      />
    </div>
  );
}

export default App;
