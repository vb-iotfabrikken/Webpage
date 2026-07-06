/**
 * Load a TypeScript module from src/ via Vite SSR (for standalone scripts).
 */
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createServer } from "vite";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..", "..");

export async function loadSrcModule(relativePath) {
  const server = await createServer({
    configFile: false,
    root,
    logLevel: "error",
    optimizeDeps: { noDiscovery: true },
    ssr: { noExternal: true },
  });
  try {
    const modPath = pathToFileURL(join(root, relativePath)).href;
    return await server.ssrLoadModule(modPath);
  } finally {
    await server.close();
  }
}
