# isdownnow-js

[![Website Status](https://img.shields.io/badge/Status_Radar-Live-blue)](https://isdownnow.com/)
[![jsDelivr CDN](https://data.jsdelivr.com/v1/package/gh/isdownnow-network/isdownnow-js/badge)](https://www.jsdelivr.com/package/gh/isdownnow-network/isdownnow-js)

Official JavaScript and Node.js telemetry client, website outage prober, and latency monitor for [IsDownNow Network](https://isdownnow.com/).

[IsDownNow](https://isdownnow.com/) provides an independent real-time service outage radar, uptime monitoring grid, and website status diagnostics tracking global digital platforms, APIs, CDNs, and infrastructure providers.

## Official Resources
- **Website & Status Radar**: [https://isdownnow.com/](https://isdownnow.com/)
- **jsDelivr Package CDN**: [https://www.jsdelivr.com/package/gh/isdownnow-network/isdownnow-js](https://www.jsdelivr.com/package/gh/isdownnow-network/isdownnow-js)
- **Status Page Telemetry**: [https://isdownnow.instatus.com/](https://isdownnow.instatus.com/)
- **Public Uptime Radar**: [https://stats.uptimerobot.com/4J3W4Ygseu](https://stats.uptimerobot.com/4J3W4Ygseu)

## Quick Start (CDN)

Load `isdownnow-js` directly in any web browser via the global jsDelivr CDN network:

```html
<script type="module">
  import { checkStatus } from 'https://cdn.jsdelivr.net/gh/isdownnow-network/isdownnow-js@1.0.0/index.js';

  const status = await checkStatus('github.com');
  console.log('Outage Radar Telemetry:', status);
</script>
```

## Features
- Real-time website outage detection and response code telemetry.
- Multi-region edge latency checks across North America, Europe, and Asia.
- DNS resolution, TLS handshake diagnostics, and TTFB measurement.

Official Portal: [https://isdownnow.com/](https://isdownnow.com/)
