/**
 * The IoT Fabrikken team. Rendered at `/en/about/team/`. Keep descriptions
 * short (1–2 sentences) and factual — LinkedIn is the right place for a CV.
 *
 * Names and titles are placeholders modelled on the 11-person team described
 * in the legacy site copy and should be updated when the real roster is
 * provided.
 */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  email?: string;
  linkedin?: string;
  department: "leadership" | "engineering" | "customer-success" | "sales" | "operations";
};

export const team: TeamMember[] = [
  {
    name: "Dennis Thomsen",
    role: "CEO & co-founder",
    bio: "Twenty-five years building SaaS businesses, from DIBS through eSmiley to IoT Fabrikken. Keeps customers, investors and the engineering team aligned.",
    department: "leadership",
  },
  {
    name: "Dorthe Jensen",
    role: "Head of sales",
    bio: "Runs the commercial side across Denmark, Sweden and Germany. The first voice most customers hear before they sign.",
    department: "sales",
  },
  {
    name: "Lars Qvist",
    role: "Sales engineer",
    bio: "Translates indoor-climate physics and BMS plumbing into concrete customer proposals. Lives on site visits.",
    department: "sales",
  },
  {
    name: "Morten Sørensen",
    role: "CTO & co-founder",
    bio: "Architects the RoomAlyzer platform from sensor firmware to cloud data pipelines. Former lead engineer at a Scandinavian IoT platform vendor.",
    department: "engineering",
  },
  {
    name: "Anders Holm",
    role: "Lead backend engineer",
    bio: "Owns the time-series storage and API layer. Has an opinion on every database from TimescaleDB to ClickHouse.",
    department: "engineering",
  },
  {
    name: "Maria Lindholm",
    role: "Lead frontend engineer",
    bio: "Builds the dashboards, floor-plan editor and mobile app. Turns raw sensor data into pictures facility managers can act on.",
    department: "engineering",
  },
  {
    name: "Jens Pedersen",
    role: "Firmware engineer",
    bio: "Squeezes multi-year battery life out of Series-A hardware. Runs the lab that stress-tests every sensor before it ships.",
    department: "engineering",
  },
  {
    name: "Sofie Nielsen",
    role: "Customer success manager",
    bio: "Onboards new municipalities, dioceses and museums. Measures success in customer-led case studies, not in tickets closed.",
    department: "customer-success",
  },
  {
    name: "Kasper Dahl",
    role: "Customer success engineer",
    bio: "The technical side of CS — handles integration rollouts, SSO setup and the tricky custom reports.",
    department: "customer-success",
  },
  {
    name: "Emma Lund",
    role: "Operations lead",
    bio: "Runs procurement, logistics and the supply chain behind every sensor we ship. Has never missed a quarterly invoice cycle.",
    department: "operations",
  },
  {
    name: "Peter Madsen",
    role: "Service technician",
    bio: "On the road most weeks with a bag of sensors and a gateway spare kit. The unsung hero behind every on-time rollout.",
    department: "operations",
  },
];

export const departments: Record<
  TeamMember["department"],
  { label: string; blurb: string }
> = {
  leadership: {
    label: "Leadership",
    blurb: "The people responsible for the company's direction and culture.",
  },
  engineering: {
    label: "Engineering",
    blurb: "The team behind the sensors, the firmware, the platform and the mobile app.",
  },
  "customer-success": {
    label: "Customer success",
    blurb: "The team that turns signed contracts into happy customers, every quarter.",
  },
  sales: {
    label: "Sales",
    blurb: "The first point of contact for new customers, from schools to dioceses.",
  },
  operations: {
    label: "Operations",
    blurb: "Logistics, procurement, quality control and the on-site rollout crew.",
  },
};
