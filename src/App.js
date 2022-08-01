import "./App.css";
import Logo from "./components/Logo";
import Map from "./components/Map";
import Title from "./graphics/LF Logo/TitleBox.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Logo />
        <Map />
        <img src={Title} alt="Dashboard" className="heading" />
      </div>
    </div>
  );
}

export default App;
