import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PricePage from "./PricePage";
import "./App.css";

function Home() {
  return (
    <main className="main-container">
      <header className="header">
        <h1 className="logo">AccTrafika</h1>
        <nav>
          <Link to="/prices" className="nav-button">Cene</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="text-section">
          <h2>Nalozi po povoljnim cenama</h2>
          <p>AccTrafika ti nudi pouzdane i povoljne naloge za Spotify, 
            YouTube Premium, Discord Nitro, Canva Pro i popularne igrice. Bezbedna kupovina, 
            brza isporuka i podrška kad god ti zatreba. Sve na jednom mestu – kvalitet po super ceni!</p>
            <button className="cta-button" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScGOU4wcaJto0ZFR4eWhyJC7RAh60G1OUbK9vZOum0nbIPKXw/viewform?usp=header', '_blank')}>
              Poruči odmah
            </button>
        </div>

        <div className="card">
          <center><h3>Zašto baš AccTrafika?</h3></center>
          <p>Cene koje imaju smisla</p>
          <ul>
            <li>Zaboravi na preplaćene naloge i skupe pretplate. 
              Kod nas dobijaš realnu cenu – bez skrivenih troškova i bez dodatnih “naknada za obradu”.</li>
          </ul>
          <p>Raznovrsna ponuda na jednom mestu</p>
          <ul>
            <li>Spotify? YouTube Premium? Discord Nitro? Canva Pro? Nalozi za igrice kao što su Steam, PSN, Xbox? 
              Sve imamo. Ne moraš da skakućeš s jednog sajta na drugi – kod nas je sve u jednoj "<b>trafici</b>" 😉.</li>
          </ul>
          <p>Fleksibilno plaćanje</p>
          <ul>
            <li>
              Podržavamo plaćanje preko PayPala, banke ili nekih od načina koji vama odgovara.
            </li>
          </ul>
        </div>
      </section>

      <footer>
      Kontakt: @acctrafika (Instagram/Facebook) | AccTrafika © 2025
      </footer>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<PricePage />} />
      </Routes>
    </Router>
  );
}

export default App;
