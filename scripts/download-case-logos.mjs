import fs from "fs";
import path from "path";

const logos = {
  "norddjurs.png": "https://iot-fabrikken.uk/wp-content/uploads/2025/01/Norddjurs.png",
  "varde.png": "https://iot-fabrikken.uk/wp-content/uploads/2025/01/Varde-kommune.png",
  "sweco.png": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/Sweco-1.png",
  "dansk-industri.jpeg": "https://iot-fabrikken.uk/wp-content/uploads/2024/09/images-1.jpeg",
  "gribskov.webp": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/Gribskovkommune.webp",
  "skade-teknik.png": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/Skadeteknik.png",
  "boligselskabet-sjaelland.png": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/NORMAL_RGB_bosj_bigsize-1024x271.png",
  "vejen-kommune.png": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/vejen-kommune-logo-color.png",
  "rudersdal-museer.jpg": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/Rudersdal.jpg",
  "solroed-kommune.jpg": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/Solroed-k.jpg",
  "deutsches-museum-nordschleswig.png": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/Deutsches-Museum-Nordschleswig-1.png",
  "faaborg-museum.jpg": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/Faaborg.jpg",
  "hj-energi.png": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/images-8.png",
  "zealand.png": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/Zealand-1.png",
  "holbaek-kommune.png": "https://iot-fabrikken.uk/wp-content/uploads/2024/08/images-7-2-e1724329194663.png",
  "erzdioezese-freiburg.jpg": "https://iot-fabrikken.de/wp-content/uploads/2025/07/freiburg.jpg",
  "ekhn.jpg": "https://iot-fabrikken.de/wp-content/uploads/2025/06/EKHN-WBM_Kontur_Violett.jpg",
};

const outDir = path.resolve("public/cases");
await fs.promises.mkdir(outDir, { recursive: true });

for (const [file, url] of Object.entries(logos)) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error("FAIL", file, res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.promises.writeFile(path.join(outDir, file), buf);
  console.log("OK", file);
}
