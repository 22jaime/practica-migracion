export default function customLoader({ src, width, quality }) {
  // Local images are served by nginx directly — return src as-is
  // width and quality params are accepted to satisfy Next.js loader contract
  return src;
}
