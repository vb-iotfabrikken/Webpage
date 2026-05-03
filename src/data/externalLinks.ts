/**
 * Off-site destinations used throughout the site — login portal, support
 * centre, status page and social profiles. Keep them in one place so
 * rebrands, domain moves or path changes are a single edit.
 */

export const externalLinks = {
  login: "https://app.roomalyzer.com/",
  support: "https://support.iot-fabrikken.com/",
  status: "https://status.iot-fabrikken.com/",
  linkedin: "https://www.linkedin.com/company/iot-fabrikken/",
  github: "https://github.com/iot-fabrikken",
  youtube: "https://www.youtube.com/@iot-fabrikken",
} as const;

export type ExternalLinkKey = keyof typeof externalLinks;
