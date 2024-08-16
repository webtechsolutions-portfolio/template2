import "./App.css";
import Marquee from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Marquee text="To jest przykładowy tekst. To jest przykładowy tekst To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst." />
      </header>
    </div>
  );
}

export default App;
