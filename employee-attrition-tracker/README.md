# Employee Attrition Tracker

Interactive Sankey diagram showing where employees from a source company land after leaving.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Features

- **Sankey diagram** — company → role type → destination company
- **Stacked bar breakdown** per destination
- **Filter by role** (Enterprise AE, SDR, Sales Engineer, CSM, SWE, PM, Marketing)
- **Filter by year** (2023, 2024)
- **Quick presets** — Sales only / Eng+PM only / All roles

## Data

Data in `src/data/attritionData.js` is illustrative, based on estimated LinkedIn public activity trends in the observability/APM space (New Relic → Datadog, Dynatrace, Grafana Labs, etc.). To add real data, update the `SOURCE_COMPANIES` object in that file.
