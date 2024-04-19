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
          return geometry.properties.visited ? "dark pink" : "grey";
        }}
        polygonStrokeColor={(geometry) => {
          return geometry.properties.visited ? "grey" : "dark pink";
        }}
        polygonLabel={(geometry) => {
          return geometry.properties.name;
        }}
        onPolygonClick={(geometry) => geometry.properties.visited}
        polygonAltitude={0.01}
        polygonsTransitionDuration={300}
      />
    </div>
  );
}

export default App;
