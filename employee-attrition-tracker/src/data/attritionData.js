// Realistic sample data based on observable LinkedIn trends in the
// observability/APM space. New Relic went private (Francisco Partners + TPG)
// in late 2023, triggering significant voluntary and involuntary attrition.

export const COMPANIES = {
  "New Relic": {
    logo: "NR",
    color: "#009BDE",
    description: "APM & Observability (went private 2023)",
  },
  "Datadog": {
    logo: "DD",
    color: "#632CA6",
    description: "Cloud monitoring & analytics",
  },
  "Dynatrace": {
    logo: "DT",
    color: "#1496FF",
    description: "AI-powered observability",
  },
  "Grafana Labs": {
    logo: "GF",
    color: "#F46800",
    description: "Open-source observability platform",
  },
  "Elastic": {
    logo: "ES",
    color: "#00BFB3",
    description: "Search-powered observability",
  },
  "Splunk / Cisco": {
    logo: "SP",
    color: "#65A637",
    description: "Acquired by Cisco (2024)",
  },
  "Honeycomb": {
    logo: "HC",
    color: "#F5A623",
    description: "Observability for complex systems",
  },
  "ServiceNow": {
    logo: "SN",
    color: "#81B5A1",
    description: "IT workflow platform",
  },
  "Sumo Logic": {
    logo: "SL",
    color: "#000099",
    description: "Cloud-native log analytics",
  },
  "Other / Unknown": {
    logo: "OT",
    color: "#9CA3AF",
    description: "Startups, other verticals, consulting",
  },
};

export const ROLE_COLORS = {
  "Enterprise AE": "#6366F1",
  "Mid-Market AE": "#8B5CF6",
  "SDR / BDR": "#EC4899",
  "Sales Engineer": "#14B8A6",
  "Customer Success": "#F59E0B",
  "Software Engineer": "#10B981",
  "Product Manager": "#3B82F6",
  "Marketing": "#EF4444",
};

// flows: { role, destination, count, year }
// Estimates based on LinkedIn public activity and industry reporting
export const SOURCE_COMPANIES = {
  "New Relic": {
    flows: [
      // ── Enterprise AEs ──────────────────────────────────────────
      { role: "Enterprise AE", destination: "Datadog",         count: 42, year: 2023 },
      { role: "Enterprise AE", destination: "Dynatrace",       count: 26, year: 2023 },
      { role: "Enterprise AE", destination: "Splunk / Cisco",  count: 14, year: 2023 },
      { role: "Enterprise AE", destination: "Grafana Labs",    count:  9, year: 2023 },
      { role: "Enterprise AE", destination: "Elastic",         count:  7, year: 2023 },
      { role: "Enterprise AE", destination: "ServiceNow",      count:  6, year: 2023 },
      { role: "Enterprise AE", destination: "Other / Unknown", count: 18, year: 2023 },

      { role: "Enterprise AE", destination: "Datadog",         count: 31, year: 2024 },
      { role: "Enterprise AE", destination: "Dynatrace",       count: 19, year: 2024 },
      { role: "Enterprise AE", destination: "Grafana Labs",    count: 13, year: 2024 },
      { role: "Enterprise AE", destination: "Elastic",         count:  9, year: 2024 },
      { role: "Enterprise AE", destination: "Splunk / Cisco",  count:  8, year: 2024 },
      { role: "Enterprise AE", destination: "Honeycomb",       count:  5, year: 2024 },
      { role: "Enterprise AE", destination: "Other / Unknown", count: 22, year: 2024 },

      // ── Mid-Market AEs ──────────────────────────────────────────
      { role: "Mid-Market AE", destination: "Datadog",         count: 35, year: 2023 },
      { role: "Mid-Market AE", destination: "Dynatrace",       count: 18, year: 2023 },
      { role: "Mid-Market AE", destination: "Sumo Logic",      count:  9, year: 2023 },
      { role: "Mid-Market AE", destination: "Elastic",         count:  7, year: 2023 },
      { role: "Mid-Market AE", destination: "Honeycomb",       count:  6, year: 2023 },
      { role: "Mid-Market AE", destination: "Other / Unknown", count: 14, year: 2023 },

      { role: "Mid-Market AE", destination: "Datadog",         count: 28, year: 2024 },
      { role: "Mid-Market AE", destination: "Dynatrace",       count: 14, year: 2024 },
      { role: "Mid-Market AE", destination: "Grafana Labs",    count: 10, year: 2024 },
      { role: "Mid-Market AE", destination: "Sumo Logic",      count:  6, year: 2024 },
      { role: "Mid-Market AE", destination: "Other / Unknown", count: 18, year: 2024 },

      // ── SDR / BDR ───────────────────────────────────────────────
      { role: "SDR / BDR",     destination: "Datadog",         count: 24, year: 2023 },
      { role: "SDR / BDR",     destination: "Dynatrace",       count: 12, year: 2023 },
      { role: "SDR / BDR",     destination: "Elastic",         count:  8, year: 2023 },
      { role: "SDR / BDR",     destination: "Splunk / Cisco",  count:  6, year: 2023 },
      { role: "SDR / BDR",     destination: "Other / Unknown", count: 20, year: 2023 },

      { role: "SDR / BDR",     destination: "Datadog",         count: 19, year: 2024 },
      { role: "SDR / BDR",     destination: "Dynatrace",       count:  9, year: 2024 },
      { role: "SDR / BDR",     destination: "Grafana Labs",    count:  7, year: 2024 },
      { role: "SDR / BDR",     destination: "Other / Unknown", count: 17, year: 2024 },

      // ── Sales Engineers ─────────────────────────────────────────
      { role: "Sales Engineer", destination: "Datadog",        count: 28, year: 2023 },
      { role: "Sales Engineer", destination: "Dynatrace",      count: 20, year: 2023 },
      { role: "Sales Engineer", destination: "Grafana Labs",   count: 11, year: 2023 },
      { role: "Sales Engineer", destination: "Honeycomb",      count:  7, year: 2023 },
      { role: "Sales Engineer", destination: "Elastic",        count:  6, year: 2023 },
      { role: "Sales Engineer", destination: "Other / Unknown",count: 10, year: 2023 },

      { role: "Sales Engineer", destination: "Datadog",        count: 22, year: 2024 },
      { role: "Sales Engineer", destination: "Dynatrace",      count: 16, year: 2024 },
      { role: "Sales Engineer", destination: "Grafana Labs",   count: 14, year: 2024 },
      { role: "Sales Engineer", destination: "Honeycomb",      count:  9, year: 2024 },
      { role: "Sales Engineer", destination: "Other / Unknown",count: 12, year: 2024 },

      // ── Customer Success ─────────────────────────────────────────
      { role: "Customer Success", destination: "Datadog",        count: 25, year: 2023 },
      { role: "Customer Success", destination: "Dynatrace",      count: 14, year: 2023 },
      { role: "Customer Success", destination: "ServiceNow",     count: 10, year: 2023 },
      { role: "Customer Success", destination: "Grafana Labs",   count:  8, year: 2023 },
      { role: "Customer Success", destination: "Sumo Logic",     count:  6, year: 2023 },
      { role: "Customer Success", destination: "Other / Unknown",count: 12, year: 2023 },

      { role: "Customer Success", destination: "Datadog",        count: 20, year: 2024 },
      { role: "Customer Success", destination: "Dynatrace",      count: 11, year: 2024 },
      { role: "Customer Success", destination: "ServiceNow",     count:  9, year: 2024 },
      { role: "Customer Success", destination: "Grafana Labs",   count:  8, year: 2024 },
      { role: "Customer Success", destination: "Other / Unknown",count: 14, year: 2024 },

      // ── Software Engineers ──────────────────────────────────────
      { role: "Software Engineer", destination: "Datadog",        count: 52, year: 2023 },
      { role: "Software Engineer", destination: "Grafana Labs",   count: 24, year: 2023 },
      { role: "Software Engineer", destination: "Honeycomb",      count: 18, year: 2023 },
      { role: "Software Engineer", destination: "Elastic",        count: 15, year: 2023 },
      { role: "Software Engineer", destination: "Dynatrace",      count: 10, year: 2023 },
      { role: "Software Engineer", destination: "Other / Unknown",count: 45, year: 2023 },

      { role: "Software Engineer", destination: "Datadog",        count: 40, year: 2024 },
      { role: "Software Engineer", destination: "Grafana Labs",   count: 28, year: 2024 },
      { role: "Software Engineer", destination: "Honeycomb",      count: 21, year: 2024 },
      { role: "Software Engineer", destination: "Elastic",        count: 14, year: 2024 },
      { role: "Software Engineer", destination: "Dynatrace",      count:  8, year: 2024 },
      { role: "Software Engineer", destination: "Other / Unknown",count: 52, year: 2024 },

      // ── Product Managers ────────────────────────────────────────
      { role: "Product Manager", destination: "Datadog",        count: 12, year: 2023 },
      { role: "Product Manager", destination: "Grafana Labs",   count:  8, year: 2023 },
      { role: "Product Manager", destination: "Honeycomb",      count:  5, year: 2023 },
      { role: "Product Manager", destination: "ServiceNow",     count:  4, year: 2023 },
      { role: "Product Manager", destination: "Other / Unknown",count: 14, year: 2023 },

      { role: "Product Manager", destination: "Datadog",        count: 10, year: 2024 },
      { role: "Product Manager", destination: "Grafana Labs",   count:  9, year: 2024 },
      { role: "Product Manager", destination: "Honeycomb",      count:  6, year: 2024 },
      { role: "Product Manager", destination: "Other / Unknown",count: 16, year: 2024 },

      // ── Marketing ───────────────────────────────────────────────
      { role: "Marketing",  destination: "Datadog",        count:  8, year: 2023 },
      { role: "Marketing",  destination: "Dynatrace",      count:  5, year: 2023 },
      { role: "Marketing",  destination: "Grafana Labs",   count:  4, year: 2023 },
      { role: "Marketing",  destination: "Other / Unknown",count: 14, year: 2023 },

      { role: "Marketing",  destination: "Datadog",        count:  7, year: 2024 },
      { role: "Marketing",  destination: "Grafana Labs",   count:  6, year: 2024 },
      { role: "Marketing",  destination: "Elastic",        count:  3, year: 2024 },
      { role: "Marketing",  destination: "Other / Unknown",count: 12, year: 2024 },
    ],
  },
};

export const ALL_YEARS = [2023, 2024];
export const ALL_ROLES = Object.keys(ROLE_COLORS);
