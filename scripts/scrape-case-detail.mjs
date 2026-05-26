const slugs = [
  "norddjurs-municipality",
  "varde-municipality",
  "dansk-industri",
  "skade-teknik",
  "sweco-6",
  "gribskov-municipality",
  "data-skal-dimensionere-nyt-raadhus-rigtigt",
];

for (const slug of slugs) {
  const html = await (await fetch(`https://iot-fabrikken.uk/case/${slug}/`)).text();
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, "").trim();
  const accent = html.match(/elementor-heading-title[^>]*>[\s\S]*?<\/h1>[\s\S]*?elementor-heading-title[^>]*>([^<]+)</i);
  const blocks = [...html.matchAll(/elementor-widget-text-editor[\s\S]*?<p>([^<]+(?:<[^/p][^>]*>[^<]*)*)<\/p>/gi)];
  const quote = html.match(/What do[^<]*say\?[\s\S]*?elementor-widget-text-editor[\s\S]*?<p>([^<]+)/i);
  console.log("\n===", slug, "===");
  console.log("H1:", h1);
  if (accent) console.log("Accent:", accent[1].trim());
  blocks.slice(0, 4).forEach((b, i) => console.log("P" + i + ":", b[1].replace(/<[^>]+>/g, "").trim().slice(0, 200)));
  if (quote) console.log("Quote:", quote[1].trim().slice(0, 300));
}
