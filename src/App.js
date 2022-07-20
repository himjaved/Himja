import "./App.css";
import Logo from "./components/Logo";
import Map from "./components/Map";
import RealTimeData from "./components/RealTimeData";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Logo />
        <Map />
        <RealTimeData content="Flow" class1="data-box" class2="box" />
      </div>
    </div>
  );
}

export default App;
