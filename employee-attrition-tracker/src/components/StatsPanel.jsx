import { useMemo } from "react";
import { COMPANIES, ROLE_COLORS } from "../data/attritionData";
import "./StatsPanel.css";

export default function StatsPanel({ flows, sourceCompany }) {
  const stats = useMemo(() => {
    const total = flows.reduce((s, f) => s + f.count, 0);

    const byDest = {};
    const byRole = {};
    for (const f of flows) {
      byDest[f.destination] = (byDest[f.destination] ?? 0) + f.count;
      byRole[f.role] = (byRole[f.role] ?? 0) + f.count;
    }

    const topDest = Object.entries(byDest)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const topRoles = Object.entries(byRole)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    return { total, topDest, topRoles };
  }, [flows]);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <p className="stat-label">Total Tracked Exits</p>
        <p className="stat-total">{stats.total.toLocaleString()}</p>
        <p className="stat-sub">from {sourceCompany}</p>
      </div>

      <div className="stat-card">
        <p className="stat-label">Top Destinations</p>
        <ul className="stat-list">
          {stats.topDest.map(([dest, count]) => (
            <li key={dest} className="stat-list-item">
              <span className="stat-list-name">
                <span className="stat-dot" style={{ background: COMPANIES[dest]?.color ?? "#9CA3AF" }} />
                {dest}
              </span>
              <span className="stat-count">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="stat-card">
        <p className="stat-label">Top Roles Exiting</p>
        <ul className="stat-list">
          {stats.topRoles.map(([role, count]) => (
            <li key={role} className="stat-list-item">
              <span className="stat-list-name">
                <span className="stat-dot" style={{ background: ROLE_COLORS[role] ?? "#6B7280" }} />
                {role}
              </span>
              <span className="stat-count">{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
