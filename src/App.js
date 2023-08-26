import Weather from "./components/Weather";
import "./App.css";
import Footer from "./components/Footer";
import { Track, TrackComponent } from "@kaku-g/react-analytics";
function App() {
  const TrackedWeather = TrackComponent(Weather);
  const TrackedFooter = TrackComponent(Footer);
  return (
    <Track userId="1eef16f5-33cb-4e44-b4de-7ea72fe9074d" project="weather">
      <div className="bg-gray-900 pt-10  sm:rounded-md sm:pt-5 sm:mt-5 sm:m-10 min-h-screen">
        <TrackedWeather />
        <TrackedFooter />
      </div>
    </Track>
  );
}

export default App;
