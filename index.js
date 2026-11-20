/**
 * isdownnow-js
 * Official JavaScript & Node.js telemetry client for IsDownNow Network.
 * Website: https://isdownnow.com/
 */

export async function checkStatus(domain) {
  const url = `https://isdownnow.com/api/check?domain=${encodeURIComponent(domain)}`;
  const res = await fetch(url);
  return await res.json();
}
