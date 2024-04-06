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
          return geometry.properties.visited ? "pink" : "#F7F2F2";
        }}
        polygonSideColor={(geometry) => {
          return geometry.properties.visited ? "purple" : "#F7F2F2";
        }}
        polygonStrokeColor={(geometry) => {
          return geometry.properties.visited ? "purple" : "#F7F2F2";
        }}
        polygonLabel={(geometry) => {
          return geometry.properties.name;
        }}
        onPolygonClick={(geometry) => geometry.properties.visited}
        polygonAltitude={0.005}
        polygonsTransitionDuration={300}
      />
    </div>
  );
}

export default App;
