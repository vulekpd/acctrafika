import React from "react";
import { Link } from "react-router-dom";

function PricePage() {
  return (
    <main className="main-container">
      <header className="header">
        <h1 className="logo">AccTrafika</h1>
        <nav>
          <Link to="/" className="nav-button">Početna</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="text-section">
          <h2>Naše Cene</h2>
          <p>Izaberi paket koji ti odgovara:</p>
          <p>Spotify:</p>
          <ul className="price-list">
            <li>🎵 Spotify 1 mesec - 600 RSD</li>
            <li>🎵 Spotify 3 meseca - 1100 RSD </li>
            <li>🎵 Spotify 6 meseci - 1800 RSD</li>
            <li>🎵 Spotify 12 meseci - 3000 RSD</li>
          </ul>
          <p>Youtube Family Plan</p>
          <ul className="price-list">
            <li>📺 1 mesec - 500 RSD</li>
            <li>📺 2 meseca - 800 RSD </li>
            <li>📺 3 meseca - 1000 RSD</li>
            <li>📺 6 meseci - 1900 RSD</li>
            <li>📺 12 meseci -2800 RSD</li>
          </ul>
          <p>Youtube Individual Plan</p>
          <ul className="price-list">
            <li>📺 1 mesec - 650 RSD</li>
            <li>📺 3 meseca - 1500 RSD</li>
            <li>📺 6 meseci - 2500 RSD</li>
            <li>📺 12 meseci -3500 RSD</li>
          </ul>
          <p>Discord Nitro</p>
          <ul className="price-list">
            <li>🎮 1 mesec - 1000 RSD</li>
            <li>🎮 12 meseci -6000 RSD</li>
          </ul>
          <p>Canva Pro</p>
          <ul className="price-list">
            <li>🖌️ 12 meseci -3500 RSD</li>
          </ul>
          <br></br>
          <center><button className="cta-button" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScGOU4wcaJto0ZFR4eWhyJC7RAh60G1OUbK9vZOum0nbIPKXw/viewform?usp=header', '_blank')}>
              Poruči odmah
            </button></center>
        </div>
      </section>

      <footer>
        Kontakt: @acctrafika (Instagram/Facebook) | AccTrafika © 2025
      </footer>
    </main>
  );
}

export default PricePage;
