import "./App.css";
import Logo from "./components/Logo";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 className="title">Dashboard</h1>
        </div>
        <Logo />
       <Map />
      </div>
    </div>
  );
}

export default App;
