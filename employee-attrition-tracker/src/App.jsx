import { useState, useMemo } from "react";
import SankeyChart from "./components/SankeyChart";
import StatsPanel from "./components/StatsPanel";
import BarBreakdown from "./components/BarBreakdown";
import {
  SOURCE_COMPANIES,
  ALL_YEARS,
  ALL_ROLES,
  ROLE_COLORS,
} from "./data/attritionData";
import "./App.css";

const ALL_SOURCES = Object.keys(SOURCE_COMPANIES);

function App() {
  const [source, setSource] = useState("New Relic");
  const [selectedYears, setSelectedYears] = useState(new Set(ALL_YEARS));
  const [selectedRoles, setSelectedRoles] = useState(new Set(ALL_ROLES));

  const toggleYear = (y) =>
    setSelectedYears((prev) => {
      const next = new Set(prev);
      if (next.has(y) && next.size > 1) next.delete(y);
      else next.add(y);
      return next;
    });

  const toggleRole = (r) =>
    setSelectedRoles((prev) => {
      const next = new Set(prev);
      if (next.has(r) && next.size > 1) next.delete(r);
      else next.add(r);
      return next;
    });

  const filteredFlows = useMemo(() => {
    const allFlows = SOURCE_COMPANIES[source]?.flows ?? [];
    return allFlows.filter(
      (f) => selectedYears.has(f.year) && selectedRoles.has(f.role)
    );
  }, [source, selectedYears, selectedRoles]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-brand">
          <div className="header-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h1>Attrition Tracker</h1>
            <p>Employee flow intelligence</p>
          </div>
        </div>
        <span className="sample-badge">Sample data — illustrative only</span>
      </header>

      <div className="app-content">
        <div className="controls-row">
          <div className="control-group">
            <label>Source Company</label>
            <select value={source} onChange={(e) => setSource(e.target.value)}>
              {ALL_SOURCES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Year</label>
            <div className="btn-group">
              {ALL_YEARS.map((y) => (
                <button
                  key={y}
                  onClick={() => toggleYear(y)}
                  className={`toggle-btn ${selectedYears.has(y) ? "active" : ""}`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          <div className="preset-group">
            <button
              onClick={() =>
                setSelectedRoles(new Set(["Enterprise AE", "Mid-Market AE", "SDR / BDR", "Sales Engineer", "Customer Success"]))
              }
              className="preset-btn sales"
            >
              Sales only
            </button>
            <button
              onClick={() => setSelectedRoles(new Set(["Software Engineer", "Product Manager"]))}
              className="preset-btn eng"
            >
              Eng / PM only
            </button>
            <button
              onClick={() => setSelectedRoles(new Set(ALL_ROLES))}
              className="preset-btn all"
            >
              All roles
            </button>
          </div>
        </div>

        <div className="role-chips">
          {ALL_ROLES.map((role) => (
            <button
              key={role}
              onClick={() => toggleRole(role)}
              className={`role-chip ${selectedRoles.has(role) ? "active" : ""}`}
              style={selectedRoles.has(role) ? { background: ROLE_COLORS[role], borderColor: ROLE_COLORS[role] } : {}}
            >
              {role}
            </button>
          ))}
        </div>

        <StatsPanel flows={filteredFlows} sourceCompany={source} />

        <div className="chart-card">
          <div className="chart-header">
            <h2>Employee Flow — {source} → Destinations</h2>
            <span className="chart-hint">Hover nodes and links for details</span>
          </div>
          <div className="chart-legend">
            <span>← Role types at {source}</span>
            <span>Destination companies →</span>
          </div>
          <SankeyChart flows={filteredFlows} sourceCompany={source} />
        </div>

        <BarBreakdown flows={filteredFlows} />

        <p className="footer-note">
          Data is illustrative and based on estimated LinkedIn public activity trends. Not sourced from any private database.
        </p>
      </div>
    </div>
  );
}

export default App;
