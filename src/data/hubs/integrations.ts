import type { Hub } from "./types";

export const integrationsHub: Hub = {
  slug: "integrations",
  title: "RoomAlyzer plays well",
  titleAccent: "with the rest of your stack.",
  eyebrow: "Integrations",
  lead: "Open standards, well-documented APIs and ready-made connectors for the tools you already use.",
  leaves: [
    {
      slug: "mqtt",
      eyebrow: "Integration",
      title: "MQTT.",
      titleAccent: "The language of IoT.",
      lead: "Subscribe to a live MQTT stream of readings and alarms — and route them anywhere.",
    },
    {
      slug: "azure-iot-hub",
      eyebrow: "Integration",
      title: "Azure IoT Hub.",
      titleAccent: "Your data in Microsoft Azure.",
      lead: "A turnkey connector that forwards every reading into Azure IoT Hub for further processing.",
    },
    {
      slug: "os2iot",
      eyebrow: "Integration",
      title: "OS2iot.",
      titleAccent: "Built for the public sector.",
      lead: "Integration with the Danish municipal OS2iot platform for shared LoRaWAN infrastructure.",
    },
    {
      slug: "dalux",
      eyebrow: "Integration",
      title: "Dalux.",
      titleAccent: "Sensor data on the BIM model.",
      lead: "Pipe climate and occupancy data into Dalux and see it on top of your building information model.",
    },
    {
      slug: "pronestor",
      eyebrow: "Integration",
      title: "Pronestor.",
      titleAccent: "Booking meets reality.",
      lead: "Combine Pronestor room bookings with RoomAlyzer occupancy — and end ghost bookings for good.",
    },
    {
      slug: "rest-api",
      eyebrow: "Integration",
      title: "REST API.",
      titleAccent: "Query whatever you need.",
      lead: "A documented REST API for historical data, device metadata and alarm events.",
    },
    {
      slug: "bms-cts",
      eyebrow: "Integration",
      title: "BMS and CTS.",
      titleAccent: "Let the building react.",
      lead: "Feed RoomAlyzer data directly into your building management system for closed-loop control.",
    },
    {
      slug: "MCP",
      eyebrow: "Integration",
      title: "Model Context Protocol.",
      titleAccent: "Let AI tools query your data.",
      lead: "An MCP server so LLM-based tools can ask questions about your sensors in natural language.",
    },
    {
      slug: "power-bi",
      eyebrow: "Integration",
      title: "Power BI.",
      titleAccent: "Build the reports your board wants.",
      lead: "A Power BI connector with pre-built templates for KPI reporting on top of RoomAlyzer data.",
    },
  ],
};
