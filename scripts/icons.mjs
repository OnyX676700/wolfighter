import sharp from "sharp";

const src = "public/img/Logo2.png";
const bg = "#000000";

async function icon(size, padding, out) {
  const inner = Math.round(size * (1 - padding * 2));
  const logo = await sharp(src)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(out);
}

await icon(192, 0.1, "public/icon-192.png");
await icon(512, 0.1, "public/icon-512.png");
await icon(180, 0.1, "app/apple-icon.png");
await icon(512, 0.2, "public/icon-512-maskable.png");

console.log("Icone generate");