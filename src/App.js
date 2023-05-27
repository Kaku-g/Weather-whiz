import Weather from "./components/Weather";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gray-900 pt-10  sm:rounded-md sm:pt-5 sm:mt-5 sm:m-10 min-h-screen">
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
