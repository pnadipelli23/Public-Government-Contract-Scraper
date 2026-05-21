import { useMemo } from "react";
import { COMPANIES, ROLE_COLORS } from "../data/attritionData";
import "./BarBreakdown.css";

export default function BarBreakdown({ flows }) {
  const byDest = useMemo(() => {
    const map = {};
    for (const f of flows) {
      if (!map[f.destination]) map[f.destination] = {};
      map[f.destination][f.role] = (map[f.destination][f.role] ?? 0) + f.count;
    }
    return Object.entries(map)
      .map(([dest, roles]) => ({
        dest,
        total: Object.values(roles).reduce((s, v) => s + v, 0),
        roles,
      }))
      .sort((a, b) => b.total - a.total);
  }, [flows]);

  const max = byDest[0]?.total ?? 1;

  return (
    <div className="bar-breakdown">
      <h3>Destination Breakdown</h3>
      {byDest.map(({ dest, total, roles }) => (
        <div key={dest} className="bar-row">
          <div className="bar-meta">
            <span className="bar-dest">
              <span
                className="legend-dot"
                style={{ background: COMPANIES[dest]?.color ?? "#9CA3AF" }}
              />
              {dest}
            </span>
            <span className="bar-count">{total}</span>
          </div>
          <div className="bar-track">
            {Object.entries(roles)
              .sort((a, b) => b[1] - a[1])
              .map(([role, count]) => (
                <div
                  key={role}
                  className="bar-segment"
                  title={`${role}: ${count}`}
                  style={{
                    width: `${(count / total) * (total / max) * 100}%`,
                    background: ROLE_COLORS[role] ?? "#6B7280",
                  }}
                />
              ))}
          </div>
          <div className="bar-legend">
            {Object.entries(roles)
              .sort((a, b) => b[1] - a[1])
              .map(([role, count]) => (
                <span key={role} className="bar-legend-item">
                  <span
                    className="legend-dot"
                    style={{ background: ROLE_COLORS[role] ?? "#6B7280" }}
                  />
                  {role}: {count}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
