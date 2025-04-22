
import React from "react";
import "./App.css";

function App() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-black to-gray-900 text-white" style={{ fontFamily: "sans-serif" }}>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">AccTrafika - Spotify Premium za 2.5€/mesec</h1>
        <p className="text-lg text-gray-300">
          Nema reklama. Full kvalitet zvuka. Radi na svim uređajima.
        </p>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Zatraži svoj slot</h2>
          <p className="text-sm text-gray-400">
            Popuni formular i javljamo ti se u roku od 1h:
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe-template-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl">
              Otvori formular
            </button>
          </a>
        </div>

        <div className="mt-10 text-left space-y-3">
          <h3 className="text-xl font-semibold">Zašto AccTrafika?</h3>
          <ul className="list-disc list-inside text-gray-300 text-left">
            <li>Legalno i bezbedno korišćenje Family planova</li>
            <li>Brza aktivacija i tehnička podrška</li>
            <li>Mogućnost otkaza u bilo kom trenutku</li>
            <li>Podržani načini plaćanja: Revolut, PayPal, keš</li>
          </ul>
        </div>

        <footer className="mt-12 text-gray-500 text-sm">
          Kontakt: @acctrafika (Instagram/Discord) | AccTrafika © 2025
        </footer>
      </div>
    </main>
  );
}

export default App;
