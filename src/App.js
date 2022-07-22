import "./App.css";
import Logo from "./components/Logo";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">LightningFlow Dashboard</h1>
        <Logo />
        <Map />
      </div>
    </div>
  );
}

export default App;
