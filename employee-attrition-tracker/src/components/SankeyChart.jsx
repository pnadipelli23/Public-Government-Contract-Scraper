import { useMemo } from "react";
import Plot from "react-plotly.js";
import { COMPANIES, ROLE_COLORS } from "../data/attritionData";

export default function SankeyChart({ flows, sourceCompany }) {
  const { nodes, links } = useMemo(() => {
    if (!flows.length) return { nodes: [], links: [] };

    const roles = [...new Set(flows.map((f) => f.role))];
    const destinations = [...new Set(flows.map((f) => f.destination))];

    const nodeLabels = [sourceCompany, ...roles, ...destinations];
    const nodeColors = [
      COMPANIES[sourceCompany]?.color ?? "#009BDE",
      ...roles.map((r) => ROLE_COLORS[r] ?? "#6B7280"),
      ...destinations.map((d) => COMPANIES[d]?.color ?? "#9CA3AF"),
    ];

    const roleAgg = {};
    for (const f of flows) {
      roleAgg[f.role] = (roleAgg[f.role] ?? 0) + f.count;
    }

    const srcToRoleLinks = roles.map((role) => ({
      source: 0,
      target: nodeLabels.indexOf(role),
      value: roleAgg[role],
      color: hexToRgba(ROLE_COLORS[role] ?? "#6B7280", 0.35),
    }));

    const roleToDestLinks = flows.map((f) => ({
      source: nodeLabels.indexOf(f.role),
      target: nodeLabels.indexOf(f.destination),
      value: f.count,
      color: hexToRgba(ROLE_COLORS[f.role] ?? "#6B7280", 0.25),
    }));

    return {
      nodes: { labels: nodeLabels, colors: nodeColors },
      links: [...srcToRoleLinks, ...roleToDestLinks],
    };
  }, [flows, sourceCompany]);

  if (!flows.length) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 384, color: "#9ca3af" }}>
        No data for selected filters.
      </div>
    );
  }

  const data = [
    {
      type: "sankey",
      orientation: "h",
      arrangement: "snap",
      node: {
        pad: 18,
        thickness: 28,
        line: { color: "#1F2937", width: 0.5 },
        label: nodes.labels,
        color: nodes.colors,
        hovertemplate: "<b>%{label}</b><br>Total: %{value} employees<extra></extra>",
      },
      link: {
        source: links.map((l) => l.source),
        target: links.map((l) => l.target),
        value: links.map((l) => l.value),
        color: links.map((l) => l.color),
        hovertemplate:
          "<b>%{source.label}</b> → <b>%{target.label}</b><br>%{value} employees<extra></extra>",
      },
    },
  ];

  return (
    <Plot
      data={data}
      layout={{
        font: { family: "Inter, system-ui, sans-serif", size: 12, color: "#F9FAFB" },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        margin: { l: 10, r: 10, t: 10, b: 10 },
        height: 560,
      }}
      config={{ displayModeBar: false, responsive: true }}
      style={{ width: "100%" }}
      useResizeHandler
    />
  );
}

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
