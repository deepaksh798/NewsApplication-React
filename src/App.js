import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// Supported countries and languages
const countries = [
  { name: "Australia", code: "au" }, { name: "Brazil", code: "br" }, { name: "Canada", code: "ca" },
  { name: "China", code: "cn" }, { name: "Egypt", code: "eg" }, { name: "France", code: "fr" },
  { name: "Germany", code: "de" }, { name: "Greece", code: "gr" }, { name: "Hong Kong", code: "hk" },
  { name: "India", code: "in" }, { name: "Ireland", code: "ie" }, { name: "Italy", code: "it" },
  { name: "Japan", code: "jp" }, { name: "Netherlands", code: "nl" }, { name: "Norway", code: "no" },
  { name: "Pakistan", code: "pk" }, { name: "Peru", code: "pe" }, { name: "Philippines", code: "ph" },
  { name: "Portugal", code: "pt" }, { name: "Romania", code: "ro" }, { name: "Russian Federation", code: "ru" },
  { name: "Singapore", code: "sg" }, { name: "Spain", code: "es" }, { name: "Sweden", code: "se" },
  { name: "Switzerland", code: "ch" }, { name: "Taiwan", code: "tw" }, { name: "Ukraine", code: "ua" },
  { name: "United Kingdom", code: "gb" }, { name: "United States", code: "us" }
];

const lang = "en";

const App = () => {
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState("in");

  // Dropdown handlers
  const handleCountryChange = (e) => setCountry(e.target.value);

  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} /> 
         <NavBar />
        
        {/* Country Selector - Better positioned and styled */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3">
              <label htmlFor="country-select" className="text-white font-medium text-sm">
                📍 Select Country:
              </label>
              <select 
                id="country-select"
                value={country} 
                onChange={handleCountryChange} 
                className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:shadow-md min-w-[180px]"
              >
                {countries.map(c => (
                  <option key={c.code} value={c.code} className="py-1">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key={`general-${country}-${lang}`} apiKey={apiKey} pageSize={pageSize} country={country} lang={lang} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key={`business-${country}-${lang}`} apiKey={apiKey} pageSize={pageSize} country={country} lang={lang} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key={`entertainment-${country}-${lang}`} apiKey={apiKey} pageSize={5} country={country} lang={lang} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key={`general-${country}-${lang}`} apiKey={apiKey} pageSize={pageSize} country={country} lang={lang} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key={`health-${country}-${lang}`} apiKey={apiKey} pageSize={pageSize} country={country} lang={lang} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key={`science-${country}-${lang}`} apiKey={apiKey} pageSize={pageSize} country={country} lang={lang} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key={`sports-${country}-${lang}`} apiKey={apiKey} pageSize={pageSize} country={country} lang={lang} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key={`technology-${country}-${lang}`} apiKey={apiKey} pageSize={pageSize} country={country} lang={lang} category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;