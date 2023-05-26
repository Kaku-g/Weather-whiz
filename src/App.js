import Weather from "./components/Weather";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gray-900   rounded-md pt-5 mt-5 m-10 min-h-screen">
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
