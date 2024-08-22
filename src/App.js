import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Marquee from "./components/Banner/Banner";
import BlackSection from "./components/BlackSection/BlackSection";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Socials from "./components/Socials/Socials";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Marquee text="To jest przykładowy tekst. To jest przykładowy tekst To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst. To jest przykładowy tekst." />
        <Header />
      </header>
      <section>
        <Title
          text1="Przykładowy tekst Przykładowy tekst"
          text2="Przykładowy tekst Przykładowy tekst"
          text3="WEBTECH SOLUTIONS @2024"
        />
      </section>
      <section>
        <BlackSection />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Aboutus />
      </section>
      <section>
        <Socials />
      </section>
    </div>
  );
}

export default App;
