// DimusTech Official Web Portal & Publisher Platform
// Domain: dimustech.net / www.dimustech.net
// Author: Dima K. (DimusTech)
// AdSense Publisher ID: pub-0969681426923712

const ADS_TXT = "google.com, pub-0969681426923712, DIRECT, f08c47fec0942fa0\n";
const PUB_ID = "ca-pub-0969681426923712";
const SITE_URL = "https://dimustech.net";

const CSS = `
:root {
  --bg: #090d16;
  --card: #111827;
  --card-hover: #172033;
  --border: #1f293d;
  --text: #f3f4f6;
  --text-muted: #9ca3af;
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --accent: #10b981;
  --code-bg: #0d1117;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background-color: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}
a { color: var(--primary); text-decoration: none; transition: color 0.15s; }
a:hover { color: #60a5fa; text-decoration: underline; }
.container { max-width: 1040px; margin: 0 auto; padding: 0 1.25rem; }
header {
  border-bottom: 1px solid var(--border);
  background: rgba(9, 13, 22, 0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 50;
}
.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.25rem;
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
}
.brand-badge {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 0.375rem;
  text-transform: uppercase;
}
nav { display: flex; align-items: center; gap: 1.5rem; font-size: 0.925rem; font-weight: 500; }
nav a { color: var(--text-muted); }
nav a:hover { color: var(--text); text-decoration: none; }
.hero {
  padding: 4.5rem 0 3.5rem;
  border-bottom: 1px solid var(--border);
  background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.12), transparent 70%);
}
.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 9999px;
  color: #60a5fa;
  font-size: 0.825rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}
.hero h1 {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 720px;
  line-height: 1.7;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 3.5rem 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.grid-tools {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 1.25rem;
}
.tool-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.875rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.15s, border-color 0.15s, background 0.15s;
}
.tool-card:hover {
  transform: translateY(-2px);
  border-color: #3b82f6;
  background: var(--card-hover);
}
.tool-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
.tool-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
}
.tool-status {
  font-size: 0.75rem;
  font-weight: 600;
  color: #10b981;
  background: rgba(16, 185, 129, 0.12);
  padding: 0.15rem 0.5rem;
  border-radius: 9999px;
  border: 1px solid rgba(16, 185, 129, 0.25);
}
.tool-title { font-size: 1.125rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text); }
.tool-desc { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1.25rem; flex-grow: 1; }
.tool-link {
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--primary);
}
.article-list { display: flex; flex-direction: column; gap: 1.25rem; }
.article-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.875rem;
  padding: 1.75rem;
  transition: border-color 0.15s, background 0.15s;
}
.article-card:hover { border-color: #3b82f6; background: var(--card-hover); }
.article-meta {
  font-size: 0.8rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}
.article-title { font-size: 1.35rem; font-weight: 700; margin-bottom: 0.65rem; color: var(--text); }
.article-excerpt { font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.6; }
.ad-slot {
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: rgba(17, 24, 39, 0.6);
  border: 1px dashed var(--border);
  border-radius: 0.75rem;
  text-align: center;
  min-height: 90px;
}
.ad-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #6b7280;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}
.prose {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #d1d5db;
  max-width: 820px;
  margin: 0 auto;
}
.prose h1 { font-size: 2.25rem; font-weight: 800; color: #fff; margin: 2rem 0 1rem; line-height: 1.3; }
.prose h2 { font-size: 1.65rem; font-weight: 700; color: #fff; margin: 2.5rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); }
.prose h3 { font-size: 1.25rem; font-weight: 600; color: #f3f4f6; margin: 1.75rem 0 0.75rem; }
.prose p { margin-bottom: 1.25rem; }
.prose ul, .prose ol { margin: 1rem 0 1.5rem 1.75rem; }
.prose li { margin-bottom: 0.5rem; }
.prose pre {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 0.625rem;
  padding: 1.25rem;
  overflow-x: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875rem;
  margin: 1.5rem 0;
  color: #e5e7eb;
}
.prose code {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.15rem 0.35rem;
  border-radius: 0.25rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.875em;
}
.prose pre code { background: transparent; padding: 0; }
.prose blockquote {
  border-inline-start: 4px solid var(--primary);
  padding-inline-start: 1.25rem;
  font-style: italic;
  color: var(--text-muted);
  margin: 1.5rem 0;
}
footer {
  border-top: 1px solid var(--border);
  padding: 4rem 0 3rem;
  margin-top: 5rem;
  background: #060910;
  color: var(--text-muted);
  font-size: 0.875rem;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 3rem;
}
.footer-col h4 {
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.footer-col ul { list-style: none; }
.footer-col li { margin-bottom: 0.6rem; }
.footer-col a { color: var(--text-muted); }
.footer-col a:hover { color: var(--text); }
.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.8rem;
}
@media (max-width: 768px) {
  .hero h1 { font-size: 2rem; }
  .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
  nav { gap: 1rem; font-size: 0.85rem; }
}
`;

function layout({ title, description, content, canonical = "/", structuredData = null }) {
  const fullCanonical = `${SITE_URL}${canonical}`;
  const ldJson = structuredData ? `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>` : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | DimusTech</title>
  <meta name="description" content="${description}">
  <meta name="author" content="Dima K. (DimusTech)">
  <link rel="canonical" href="${fullCanonical}">
  <meta name="google-adsense-account" content="${PUB_ID}">
  <meta property="og:site_name" content="DimusTech">
  <meta property="og:title" content="${title} | DimusTech">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${fullCanonical}">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title} | DimusTech">
  <meta name="twitter:description" content="${description}">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUB_ID}" crossorigin="anonymous"></script>
  <style>${CSS}</style>
  ${ldJson}
</head>
<body>
  <header>
    <div class="container nav-wrapper">
      <a href="/" class="brand">
        <span>⚡ DimusTech</span>
        <span class="brand-badge">Lab</span>
      </a>
      <nav>
        <a href="/">Home</a>
        <a href="/#tools">Tools</a>
        <a href="/#articles">Engineering Guides</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    ${content}
  </main>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="brand" style="margin-bottom: 0.75rem;">
            <span>⚡ DimusTech Lab</span>
          </div>
          <p style="margin-bottom: 1rem; line-height: 1.6;">
            Engineering guides, client-side developer utilities, and self-hosting automation by Dima K. Built for performance, zero-friction workflows, and data privacy.
          </p>
          <p style="font-size: 0.8rem; color: #6b7280;">
            Publisher: DimusTech &bull; Inquiries: <a href="mailto:dimiboy@gmail.com">dimiboy@gmail.com</a>
          </p>
        </div>
        <div class="footer-col">
          <h4>Developer Utilities</h4>
          <ul>
            <li><a href="https://ports.dimustech.net" target="_blank" rel="noopener">Docker Port Clash Calculator</a></li>
            <li><a href="https://rtl.dimustech.net" target="_blank" rel="noopener">Hebrew RTL &amp; Subtitle Cleaner</a></li>
            <li><a href="https://ha.dimustech.net" target="_blank" rel="noopener">Home Assistant YAML Generator</a></li>
            <li><a href="https://thumbsplit.dimustech.net" target="_blank" rel="noopener">ThumbSplit CTR Split-Tester</a></li>
            <li><a href="https://willpark.app" target="_blank" rel="noopener">WillPark Israel Parking App</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Engineering Guides</h4>
          <ul>
            <li><a href="/articles/docker-port-conflicts-guide">Docker Port &amp; Subnet Conflicts</a></li>
            <li><a href="/articles/hebrew-rtl-unicode-subtitles-llm">Hebrew RTL &amp; LLM Prompting</a></li>
            <li><a href="/articles/home-assistant-jinja2-alerting-guide">Hardening Home Assistant YAML</a></li>
            <li><a href="/articles/youtube-thumbnail-ctr-split-testing">YouTube CTR Split-Testing</a></li>
            <li><a href="/articles/wireguard-tailscale-homelab-remote-access">WireGuard &amp; Tailscale Subnets</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company &amp; Legal</h4>
          <ul>
            <li><a href="/about">About DimusTech</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact Support</a></li>
            <li><a href="http://youtube.com/c/dimustech" target="_blank" rel="noopener">YouTube (English)</a></li>
            <li><a href="http://youtube.com/c/dimustechil" target="_blank" rel="noopener">YouTube (Hebrew)</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>&copy; ${new Date().getFullYear()} DimusTech. All rights reserved.</div>
        <div style="display: flex; gap: 1.25rem;">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/ads.txt">ads.txt</a>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

// ---------------- PAGES ----------------

function renderHomePage() {
  const content = `
    <section class="hero">
      <div class="container">
        <div class="hero-tag">
          <span>🚀 DimusTech Engineering &amp; Software Hub</span>
        </div>
        <h1>Practical Engineering Guides &amp; Turnkey Web Tools</h1>
        <p>
          High-performance developer utilities, self-hosted Docker architectures, Home Assistant automations, and practical technical guides built and maintained by Dima K.
        </p>
      </div>
    </section>

    <div class="container">
      <div class="ad-slot">
        <div class="ad-label">Advertisement</div>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="${PUB_ID}"
             data-ad-slot="1001"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>

      <h2 id="tools" class="section-title">
        <span>🛠️ Active Developer Tools &amp; Web Apps</span>
      </h2>
      <div class="grid-tools">
        <div class="tool-card">
          <div>
            <div class="tool-header">
              <div class="tool-icon">🐳</div>
              <span class="tool-status">Live Utility</span>
            </div>
            <div class="tool-title">Docker Port &amp; Subnet Calculator</div>
            <div class="tool-desc">
              Paste your docker-compose.yml or pick containers to instantly detect host port conflicts, subnet collisions, and generate safe remapped configs.
            </div>
          </div>
          <a href="https://ports.dimustech.net" target="_blank" rel="noopener" class="tool-link">
            Open Tool &rarr;
          </a>
        </div>

        <div class="tool-card">
          <div>
            <div class="tool-header">
              <div class="tool-icon">🔤</div>
              <span class="tool-status">Live Utility</span>
            </div>
            <div class="tool-title">Hebrew RTL &amp; Subtitle Cleaner</div>
            <div class="tool-desc">
              Fix reversed Hebrew punctuation, mixed Hebrew-English brackets using Unicode control characters (LRM/RLM), and sanitize SRT/VTT for LLM prompt engineering.
            </div>
          </div>
          <a href="https://rtl.dimustech.net" target="_blank" rel="noopener" class="tool-link">
            Open Tool &rarr;
          </a>
        </div>

        <div class="tool-card">
          <div>
            <div class="tool-header">
              <div class="tool-icon">🏠</div>
              <span class="tool-status">Live Utility</span>
            </div>
            <div class="tool-title">Home Assistant Jinja2 / YAML Builder</div>
            <div class="tool-desc">
              Interactive Jinja2 template tester and generator. Build fail-safe sensor math with float fallbacks, humanized uptimes, and debounce Telegram alerts.
            </div>
          </div>
          <a href="https://ha.dimustech.net" target="_blank" rel="noopener" class="tool-link">
            Open Tool &rarr;
          </a>
        </div>

        <div class="tool-card">
          <div>
            <div class="tool-header">
              <div class="tool-icon">🖼️</div>
              <span class="tool-status">Live Utility</span>
            </div>
            <div class="tool-title">ThumbSplit YouTube Previewer</div>
            <div class="tool-desc">
              Side-by-side A/B thumbnail and title split-tester. Simulates YouTube mobile and desktop dark mode feeds to maximize Click-Through Rates (CTR).
            </div>
          </div>
          <a href="https://thumbsplit.dimustech.net" target="_blank" rel="noopener" class="tool-link">
            Open Tool &rarr;
          </a>
        </div>

        <div class="tool-card">
          <div>
            <div class="tool-header">
              <div class="tool-icon">🚗</div>
              <span class="tool-status">Live Application</span>
            </div>
            <div class="tool-title">WillPark Israel Parking Comparison</div>
            <div class="tool-desc">
              Crowdsourced parking lot price map across Israel with photo verification, resident discount filters (Ahuzot HaHof 75%), and Android Auto support.
            </div>
          </div>
          <a href="https://willpark.app" target="_blank" rel="noopener" class="tool-link">
            Open App &rarr;
          </a>
        </div>
      </div>

      <h2 id="articles" class="section-title">
        <span>📖 In-Depth Engineering Guides</span>
      </h2>
      <div class="article-list">
        <article class="article-card">
          <div class="article-meta">
            <span>Docker &amp; Networking</span>
            <span>&bull;</span>
            <span>12 min read</span>
            <span>&bull;</span>
            <span>By Dima K.</span>
          </div>
          <h3 class="article-title">
            <a href="/articles/docker-port-conflicts-guide">Solving Docker Port Conflicts &amp; Subnet Clashes in Modern Self-Hosted Stacks</a>
          </h3>
          <p class="article-excerpt">
            A comprehensive engineering guide on Docker bridge networking, diagnosing bind address conflicts (0.0.0.0:8080), avoiding overlapping IPAM CIDRs, and structuring multi-container stacks for zero downtime.
          </p>
          <a href="/articles/docker-port-conflicts-guide" style="font-weight: 600; font-size: 0.9rem;">Read Full Guide &rarr;</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span>NLP &amp; Unicode</span>
            <span>&bull;</span>
            <span>10 min read</span>
            <span>&bull;</span>
            <span>By Dima K.</span>
          </div>
          <h3 class="article-title">
            <a href="/articles/hebrew-rtl-unicode-subtitles-llm">Mastering Bidirectional Text: Solving Hebrew RTL Punctuation &amp; Subtitles for LLMs</a>
          </h3>
          <p class="article-excerpt">
            How Unicode Bidirectional Algorithm (UBA) works, why punctuation reverses in mixed Hebrew-English strings, how to use LRM and RLM markers, and sanitizing messy subtitle files for prompt tokenization.
          </p>
          <a href="/articles/hebrew-rtl-unicode-subtitles-llm" style="font-weight: 600; font-size: 0.9rem;">Read Full Guide &rarr;</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span>Home Automation &amp; IoT</span>
            <span>&bull;</span>
            <span>11 min read</span>
            <span>&bull;</span>
            <span>By Dima K.</span>
          </div>
          <h3 class="article-title">
            <a href="/articles/home-assistant-jinja2-alerting-guide">Hardening Home Assistant: Safe Jinja2 Floating-Point Math &amp; Debounced Multi-Channel Telegram Alerts</a>
          </h3>
          <p class="article-excerpt">
            Eliminate startup template crashes by using fallback filters (| float(0)), humanize seconds into readable uptimes, and implement notification debouncing to prevent Telegram rate-limit lockouts.
          </p>
          <a href="/articles/home-assistant-jinja2-alerting-guide" style="font-weight: 600; font-size: 0.9rem;">Read Full Guide &rarr;</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span>Content Strategy &amp; Video</span>
            <span>&bull;</span>
            <span>9 min read</span>
            <span>&bull;</span>
            <span>By Dima K.</span>
          </div>
          <h3 class="article-title">
            <a href="/articles/youtube-thumbnail-ctr-split-testing">The Psychology of High Click-Through Rates: Visual Hierarchy &amp; Title Split-Testing</a>
          </h3>
          <p class="article-excerpt">
            A practical analysis of YouTube feed dynamics: focal points, timestamp badges overlay protection, color contrast against mobile dark mode feeds, and cognitive framing for technical tutorials.
          </p>
          <a href="/articles/youtube-thumbnail-ctr-split-testing" style="font-weight: 600; font-size: 0.9rem;">Read Full Guide &rarr;</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span>DevOps &amp; Security</span>
            <span>&bull;</span>
            <span>11 min read</span>
            <span>&bull;</span>
            <span>By Dima K.</span>
          </div>
          <h3 class="article-title">
            <a href="/articles/wireguard-tailscale-homelab-remote-access">Zero-Trust Remote Access: Combining WireGuard-Easy and Tailscale Subnet Routers</a>
          </h3>
          <p class="article-excerpt">
            Architecting a resilient, dual-layer remote access mesh. High-throughput WireGuard UDP tunnels paired with Tailscale NAT traversal for bulletproof home server administration from anywhere.
          </p>
          <a href="/articles/wireguard-tailscale-homelab-remote-access" style="font-weight: 600; font-size: 0.9rem;">Read Full Guide &rarr;</a>
        </article>
      </div>

      <div class="ad-slot">
        <div class="ad-label">Advertisement</div>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="${PUB_ID}"
             data-ad-slot="1002"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>
  `;

  return layout({
    title: "DimusTech — Engineering Lab, Self-Hosting & Developer Tools",
    description: "Engineering guides, client-side developer utilities, and self-hosting automation by Dima K. Built for performance, zero-friction workflows, and data privacy.",
    content,
    canonical: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "DimusTech",
      "url": SITE_URL,
      "description": "Engineering Lab, Self-Hosting & Developer Utilities by Dima K.",
      "author": { "@type": "Person", "name": "Dima K." }
    }
  });
}

function renderAboutPage() {
  const content = `
    <div class="container" style="padding-top: 3.5rem;">
      <div class="prose">
        <h1>About DimusTech</h1>
        <p>
          Welcome to <strong>DimusTech</strong> &mdash; an independent technology publication, software laboratory, and hardware testing hub created by <strong>Dima K.</strong>
        </p>

        <h2>Our Mission</h2>
        <p>
          In a software ecosystem cluttered with heavy subscription models, intrusive trackers, and bloated web apps, DimusTech focuses on high-speed, lightweight client-side tools and rigorously tested engineering guides.
        </p>
        <p>
          Every tool hosted on our subdomains runs entirely client-side or on edge compute with zero backend tracking, instant execution, and zero user friction.
        </p>

        <h2>Who is Dima K.?</h2>
        <p>
          Dima K. is a software developer, technology enthusiast, and content creator based in Israel. With years of experience spanning Linux server administration, IoT and home automation engineering (Home Assistant, Zigbee, Z-Wave), and web development, Dima creates technical content across multiple platforms:
        </p>
        <ul>
          <li><strong>English YouTube Channel:</strong> <a href="http://youtube.com/c/dimustech" target="_blank" rel="noopener">DimusTech on YouTube</a> &mdash; In-depth hardware teardowns, smart home setups, and homelab tutorials.</li>
          <li><strong>Hebrew YouTube Channel:</strong> <a href="http://youtube.com/c/dimustechil" target="_blank" rel="noopener">DimusTech IL on YouTube</a> &mdash; Local Israeli tech reviews, consumer tech advice, and smart living guides.</li>
        </ul>

        <h2>Editorial Integrity &amp; Hardware Testing Standards</h2>
        <p>
          We take technical accuracy seriously. All scripts, Docker configurations, and benchmarks published on DimusTech are deployed and verified on real physical hardware in our 24/7 home lab before publication.
        </p>
        <p>
          We do not publish sponsored reviews disguised as objective analysis. When affiliate links or product recommendations are included, they undergo strict vetting &mdash; only high-reliability, thoroughly tested equipment from proven manufacturers is ever recommended.
        </p>

        <h2>Advertising &amp; Funding</h2>
        <p>
          DimusTech is funded through non-intrusive contextual advertising provided by Google AdSense, as well as voluntary tips and developer kit contributions on platforms like Ko-fi. This allows all our tools and guides to remain 100% free and accessible to developers worldwide.
        </p>

        <div class="ad-slot" style="margin: 2rem 0;">
          <div class="ad-label">Advertisement</div>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="${PUB_ID}"
               data-ad-slot="1003"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <h2>Contact Information</h2>
        <p>
          For technical feedback, project collaboration, or press inquiries, please reach out via:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:dimiboy@gmail.com">dimiboy@gmail.com</a></li>
          <li><strong>Location:</strong> Bat Yam, Israel</li>
          <li><strong>Contact Form:</strong> <a href="/contact">Visit Contact Page</a></li>
        </ul>
      </div>
    </div>
  `;

  return layout({
    title: "About DimusTech — Editorial Standards & Mission",
    description: "Learn about DimusTech, founder Dima K., our engineering philosophy, and our commitment to independent hardware and software publishing.",
    content,
    canonical: "/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About DimusTech",
      "url": `${SITE_URL}/about`,
      "mainEntity": {
        "@type": "Organization",
        "name": "DimusTech",
        "url": SITE_URL,
        "founder": { "@type": "Person", "name": "Dima K." }
      }
    }
  });
}

function renderPrivacyPage() {
  const content = `
    <div class="container" style="padding-top: 3.5rem;">
      <div class="prose">
        <h1>Privacy Policy</h1>
        <p><em>Last updated: November 2026</em></p>

        <p>
          At <strong>DimusTech</strong> (accessible from <a href="https://dimustech.net">https://dimustech.net</a> and its subdomains), the privacy of our visitors is of paramount importance. This Privacy Policy document outlines the types of information collected and recorded by DimusTech and how we use it.
        </p>

        <h2>1. Client-Side Tools &amp; Data Isolation</h2>
        <p>
          The majority of our web utilities (including the Hebrew RTL &amp; Subtitle Cleaner, Docker Port Clash Calculator, Home Assistant Jinja2 Builder, and ThumbSplit) run <strong>100% client-side in your web browser</strong>.
        </p>
        <p>
          Text you paste, Docker Compose files you analyze, and images you preview are processed entirely in your device's memory and are <strong>never uploaded to our servers or stored in any database</strong>.
        </p>

        <h2>2. Log Files</h2>
        <p>
          DimusTech follows a standard procedure of using log files through our edge delivery network (Cloudflare). These logs record basic request information when visitors visit websites: internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, and referring/exit pages. This data is used solely for analyzing trends, preventing DDoS attacks, and administering the site. None of this data is linked to personally identifiable information.
        </p>

        <h2>3. Google AdSense &amp; Cookies</h2>
        <p>
          We use <strong>Google AdSense</strong> to display advertisements across our site. Google is a third-party vendor on our site and uses cookies, including the DoubleClick DART cookie, to serve ads to visitors based upon their visit to dimustech.net and other sites on the internet.
        </p>
        <ul>
          <li>Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our sites and/or other sites on the Internet.</li>
          <li>Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener">Google Ads Settings</a> or <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">aboutads.info</a>.</li>
          <li>For more information on how Google uses data when you use our site, see <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">How Google uses data when you use our partners' sites or apps</a>.</li>
        </ul>

        <h2>4. Third-Party Links &amp; External Services</h2>
        <p>
          Our website contains links to external websites, including GitHub, YouTube, and Ko-fi. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.
        </p>

        <h2>5. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p>
          Under the California Consumer Privacy Act (CCPA), California consumers have the right to request that a business disclose what personal data it collects, request deletion of personal data, and request that a business not sell their personal data. DimusTech does not sell any personal data of its visitors.
        </p>

        <h2>6. GDPR Data Protection Rights</h2>
        <p>
          We would like to make sure you are fully aware of all of your data protection rights under GDPR: the right to access, the right to rectification, the right to erasure, the right to restrict processing, and the right to data portability. If you make a request, we have one month to respond to you.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at: <a href="mailto:dimiboy@gmail.com">dimiboy@gmail.com</a>.
        </p>
      </div>
    </div>
  `;

  return layout({
    title: "Privacy Policy — DimusTech",
    description: "Read the Privacy Policy for DimusTech, covering Google AdSense disclosures, cookie policies, GDPR/CCPA compliance, and client-side data isolation.",
    content,
    canonical: "/privacy"
  });
}

function renderTermsPage() {
  const content = `
    <div class="container" style="padding-top: 3.5rem;">
      <div class="prose">
        <h1>Terms of Service</h1>
        <p><em>Last updated: November 2026</em></p>

        <h2>1. Terms &amp; Acceptance</h2>
        <p>
          By accessing the website at <a href="https://dimustech.net">https://dimustech.net</a> or utilizing any of our subdomain tools, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>

        <h2>2. Use License &amp; Open Utilities</h2>
        <p>
          Permission is granted to freely use the online developer tools, calculators, and documentation on DimusTech for personal, educational, or commercial software engineering purposes.
        </p>
        <p>
          You may not:
        </p>
        <ul>
          <li>Use automated scrapers or flood attacks to overwhelm or disrupt our Cloudflare edge infrastructure.</li>
          <li>Attempt to decompile or reverse-engineer proprietary backend services.</li>
          <li>Mirror the site or tools with fraudulent intent or disguised malicious redirects.</li>
        </ul>

        <h2>3. Disclaimer of Warranties</h2>
        <p>
          THE MATERIALS AND TOOLS ON DIMUSTECH ARE PROVIDED ON AN &lsquo;AS IS&rsquo; BASIS. DIMUSTECH MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR ACCURACY OF CODE GENERATION.
        </p>
        <p>
          While our Docker port calculators and Home Assistant YAML builders are thoroughly tested, users are advised to verify all generated configuration files in non-production environments before applying them to mission-critical infrastructure.
        </p>

        <h2>4. Limitations of Liability</h2>
        <p>
          In no event shall DimusTech or its contributors be liable for any damages (including, without limitation, damages for loss of data or profit, server downtime, or business interruption) arising out of the use or inability to use the tools or documentation on DimusTech.
        </p>

        <h2>5. Affiliate Disclosure</h2>
        <p>
          DimusTech participates in selective affiliate marketing programs (such as Amazon and KSP). When readers purchase vetted hardware tools or components through our links, we may earn an affiliate commission at no extra cost to the buyer. This supports our ongoing lab hosting and testing.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the State of Israel, and you irrevocably submit to the exclusive jurisdiction of the courts located in Tel Aviv-Jaffa.
        </p>
      </div>
    </div>
  `;

  return layout({
    title: "Terms of Service — DimusTech",
    description: "Read the Terms of Service for DimusTech covering software use licenses, limitation of liability, and engineering disclaimers.",
    content,
    canonical: "/terms"
  });
}

function renderContactPage() {
  const content = `
    <div class="container" style="padding-top: 3.5rem;">
      <div class="prose">
        <h1>Contact DimusTech</h1>
        <p>
          Have questions regarding our developer tools, feedback on an engineering guide, or a business/sponsorship proposal? We welcome community communication.
        </p>

        <div style="background: var(--card); border: 1px solid var(--border); border-radius: 0.875rem; padding: 2rem; margin: 2rem 0;">
          <h2 style="margin-top: 0; border: none; font-size: 1.35rem;">Direct Communication Channels</h2>
          <ul style="margin-left: 0; list-style: none;">
            <li style="margin-bottom: 1rem;">
              <strong>📧 Primary Email:</strong> <a href="mailto:dimiboy@gmail.com">dimiboy@gmail.com</a>
              <div style="font-size: 0.85rem; color: var(--text-muted);">Response time typically within 24–48 hours for technical and editorial inquiries.</div>
            </li>
            <li style="margin-bottom: 1rem;">
              <strong>📺 YouTube Community:</strong> <a href="http://youtube.com/c/dimustech" target="_blank" rel="noopener">DimusTech (English)</a> &bull; <a href="http://youtube.com/c/dimustechil" target="_blank" rel="noopener">DimusTech IL (Hebrew)</a>
              <div style="font-size: 0.85rem; color: var(--text-muted);">Leave a comment on any recent video for rapid hardware discussions.</div>
            </li>
            <li style="margin-bottom: 1rem;">
              <strong>💻 GitHub Issues &amp; Contributions:</strong> <a href="https://github.com/dimiboy" target="_blank" rel="noopener">github.com/dimiboy</a>
              <div style="font-size: 0.85rem; color: var(--text-muted);">Submit bug reports, feature requests, or PRs for any open-source tool.</div>
            </li>
          </ul>
        </div>

        <h2>Location</h2>
        <p>
          DimusTech is headquartered and operated from Bat Yam, Israel (Jerusalem Standard Time, UTC+2).
        </p>
      </div>
    </div>
  `;

  return layout({
    title: "Contact Us — DimusTech",
    description: "Get in touch with Dima K. at DimusTech for technical support, tool feedback, or business inquiries.",
    content,
    canonical: "/contact"
  });
}

// ---------------- ARTICLES ----------------

const ARTICLES = {
  "docker-port-conflicts-guide": {
    title: "Solving Docker Port Conflicts & Subnet Clashes in Modern Self-Hosted Stacks",
    description: "A deep engineering dive into Docker bridge networking, bind address allocation, subnet overlaps, and automated port clash detection in homelabs.",
    category: "Docker & Networking",
    readTime: "12 min read",
    date: "November 2026",
    content: `
      <h1>Solving Docker Port Conflicts &amp; Subnet Clashes in Modern Self-Hosted Stacks</h1>
      <p class="article-meta">Published: November 2026 &bull; By Dima K. &bull; 12 min read</p>

      <p>
        Running 15+ containers on a single host is a standard setup for home-labbers, DevOps practitioners, and self-hosters. However, as stacks expand to incorporate reverse proxies (Nginx Proxy Manager, Traefik), media servers (Plex, Jellyfin), databases (PostgreSQL, MariaDB), and monitoring daemons (Prometheus, Uptime Kuma), two insidious networking failures inevitably emerge:
      </p>
      <ol>
        <li><strong>Host Port Collision:</strong> Two containers attempting to bind to the same host TCP/UDP port on <code>0.0.0.0</code>.</li>
        <li><strong>Bridge Subnet Clashes:</strong> Docker engine automatically allocating internal bridge networks that overlap with your physical local area network (LAN) CIDR (e.g., <code>192.168.1.0/24</code>), causing routing blackholes where host machines silently lose internet or LAN access.</li>
      </ol>

      <h2>1. Understanding Docker Host Port Binding</h2>
      <p>
        When you write a port definition like <code>ports: - "8080:80"</code> in a <code>docker-compose.yml</code> file, Docker instructs <code>docker-proxy</code> and iptables to listen on all available interfaces (<code>0.0.0.0</code>) on port 8080 and forward incoming packets to port 80 inside the container's isolated network namespace.
      </p>
      <pre><code># The typical culprit of silent collisions
services:
  app-one:
    image: nginx:alpine
    ports:
      - "8080:80"

  app-two:
    image: apache:latest
    ports:
      - "8080:80" # ERROR: bind: address already in use</code></pre>

      <p>
        If <code>app-one</code> is already running, starting <code>app-two</code> results in the dreaded <code>driver failed programming external connectivity on endpoint: Bind for 0.0.0.0:8080 failed: port is already allocated</code> error.
      </p>

      <h2>2. Identifying Active Host Listeners</h2>
      <p>
        Before remapping ports, always inspect which process or container currently holds the port.
      </p>
      <p>On Linux systems:</p>
      <pre><code># Check listening ports and process IDs
sudo ss -tulpn | grep -E ':8080|:80|:443'

# Check active Docker container bindings
docker ps --format "table {{.Names}}\\t{{.Ports}}"</code></pre>

      <p>On Windows hosts (PowerShell):</p>
      <pre><code># Find process holding the port
Get-NetTCPConnection -LocalPort 8080 | Select-Object LocalAddress, LocalPort, OwningProcess, State</code></pre>

      <h2>3. The Silent Killer: Docker Subnet Overlaps</h2>
      <p>
        By default, Docker allocates default pool subnets from the <code>172.17.0.0/16</code> through <code>172.31.0.0/16</code> range and <code>192.168.0.0/20</code>. If your home network router uses <code>192.168.1.1/24</code>, Docker may eventually create a bridge network on <code>192.168.1.0/20</code>.
      </p>
      <p>
        When this collision occurs, the Linux kernel route table directs all traffic destined for your physical gateway through the Docker virtual bridge interface instead of your physical Ethernet card, causing complete connectivity failure.
      </p>
      <p>
        <strong>The Fix:</strong> Configure Docker daemon with explicit, non-overlapping address pools in <code>/etc/docker/daemon.json</code>:
      </p>
      <pre><code>{
  "default-address-pools": [
    {
      "base": "10.200.0.0/16",
      "size": 24
    }
  ]
}</code></pre>

      <h2>4. Automated Port Clash Prevention</h2>
      <p>
        To prevent these issues from derailing deployments, we built the <strong><a href="https://ports.dimustech.net" target="_blank" rel="noopener">Docker Port &amp; Subnet Clash Calculator</a></strong>. It runs 100% client-side, parses multiple Compose files simultaneously, cross-references against a database of 120+ standard self-hosted application ports, and suggests one-click non-conflicting port remaps.
      </p>
    `
  },
  "hebrew-rtl-unicode-subtitles-llm": {
    title: "Mastering Bidirectional Text: Solving Hebrew RTL Punctuation & Subtitles for LLMs",
    description: "An authoritative guide on the Unicode Bidirectional Algorithm (UBA), LRM/RLM control characters, and sanitizing Hebrew subtitles for AI pipelines.",
    category: "NLP & Unicode",
    readTime: "10 min read",
    date: "November 2026",
    content: `
      <h1>Mastering Bidirectional Text: Solving Hebrew RTL Punctuation &amp; Subtitles for LLMs</h1>
      <p class="article-meta">Published: November 2026 &bull; By Dima K. &bull; 10 min read</p>

      <p>
        Hebrew and Arabic are Right-to-Left (RTL) languages. When RTL scripts are mixed with Left-to-Right (LTR) elements &mdash; such as English technical terms, code snippets, numbers, URLs, and punctuation &mdash; digital layout engines frequently display reversed brackets <code>)text(</code>, question marks on the wrong side of the sentence, and garbled subtitle timing tags.
      </p>
      <p>
        In modern Artificial Intelligence pipelines, feeding corrupted bidirectional text into Large Language Models (LLMs like ChatGPT, Claude, and Gemini) leads to hallucinated grammar and inflated token counts.
      </p>

      <h2>1. How the Unicode Bidirectional Algorithm (UBA) Works</h2>
      <p>
        Every Unicode character possesses a directional category:
      </p>
      <ul>
        <li><strong>Strong RTL:</strong> Hebrew (<code>\u0590-\u05FF</code>) and Arabic letters.</li>
        <li><strong>Strong LTR:</strong> Latin characters (<code>a-z</code>, <code>A-Z</code>) and ASCII numerals.</li>
        <li><strong>Neutral / Weak:</strong> Punctuation marks (<code>?</code>, <code>!</code>, <code>.</code>), spaces, and brackets (<code>(</code>, <code>)</code>, <code>[</code>, <code>]</code>).</li>
      </ul>
      <p>
        Neutral characters take their directional orientation from the surrounding strong characters. When a Hebrew sentence ends with an English word followed by a question mark:
      </p>
      <pre><code>שלום Docker?</code></pre>
      <p>
        The question mark is flanked by the strong LTR word "Docker", causing standard renderers to treat it as part of the LTR sequence and placing the question mark to the right of "Docker" rather than the logical end of the Hebrew sentence on the left!
      </p>

      <h2>2. The Fix: Unicode Control Markers (LRM &amp; RLM)</h2>
      <p>
        To force renderers to place punctuation correctly without altering visual text, developers insert invisible Unicode directional formatting markers:
      </p>
      <ul>
        <li><strong>RLM (Right-to-Left Mark - <code>\u200F</code>):</strong> An invisible zero-width character with strong RTL properties. Appending RLM after neutral punctuation forces the layout engine to treat the punctuation as part of the RTL paragraph.</li>
        <li><strong>LRM (Left-to-Right Mark - <code>\u200E</code>):</strong> An invisible zero-width character with strong LTR properties, useful for enclosing code blocks inside Hebrew paragraphs.</li>
      </ul>

      <h2>3. Subtitle Sanitization for LLM Ingestion</h2>
      <p>
        SRT and VTT subtitle files extracted from video editing timelines contain timestamp blocks, sequence numbers, and HTML color tags:
      </p>
      <pre><code>1
00:01:14,200 --> 00:01:17,800
&lt;font color="#ffff00"&gt;זהו מבחן למערכת החניה.&lt;/font&gt;</code></pre>
      <p>
        Passing these raw timecodes directly into an LLM context window wastes up to 45% of available token budget on metadata numbers. Stripping sequential integers, normalizing line endings, and joining broken sentences into coherent paragraphs is essential for accurate summarization.
      </p>
      <p>
        We packaged these algorithms into our free <strong><a href="https://rtl.dimustech.net" target="_blank" rel="noopener">Hebrew RTL &amp; Subtitle Cleaner</a></strong>, allowing creators to fix reversed punctuation and prepare clean LLM prompts in under 2 seconds.
      </p>
    `
  },
  "home-assistant-jinja2-alerting-guide": {
    title: "Hardening Home Assistant: Safe Jinja2 Floating-Point Math & Debounced Multi-Channel Telegram Alerts",
    description: "Prevent Home Assistant startup crashes caused by invalid sensor floats and eliminate Telegram notification spam using debounced state automations.",
    category: "Home Automation & IoT",
    readTime: "11 min read",
    date: "November 2026",
    content: `
      <h1>Hardening Home Assistant: Safe Jinja2 Floating-Point Math &amp; Debounced Multi-Channel Telegram Alerts</h1>
      <p class="article-meta">Published: November 2026 &bull; By Dima K. &bull; 11 min read</p>

      <p>
        Home Assistant is the gold standard for private, local-first smart home automation. However, complex Jinja2 templates and real-time alert automations are vulnerable to two major production pitfalls:
      </p>
      <ol>
        <li><strong>Startup Template Fatalities:</strong> Converting non-numeric sensor states (such as <code>unknown</code> or <code>unavailable</code> during startup) to numbers using <code>| float</code> without a default value causes template sensors to fail to load.</li>
        <li><strong>Notification Storms:</strong> Rapid sensor state fluctuations (e.g., power monitoring spikes or intermittent Wi-Fi door sensors) sending dozens of duplicate Telegram messages per minute.</li>
      </ol>

      <h2>1. Strict Default Values in Jinja2 Math</h2>
      <p>
        In legacy versions of Home Assistant, <code>{{ states('sensor.power') | float }}</code> would silently return <code>0.0</code> if the sensor was unavailable. Modern Home Assistant cores strictly enforce default values. Failing to provide a default raises a template evaluation warning or renders the entire entity unavailable.
      </p>
      <pre><code># DANGEROUS: Will break on HA restart
{{ states('sensor.server_power') | float * 1.25 }}

# SAFE & HARDENED: Defaults gracefully to 0.0
{{ (states('sensor.server_power') | float(0.0)) * 1.25 }}</code></pre>

      <h2>2. Humanizing System Uptime</h2>
      <p>
        Standard Linux uptime sensors report total runtime in raw seconds or ISO timestamps. Converting this into an elegant Hebrew or English string makes notifications significantly more readable:
      </p>
      <pre><code>{% set s = states('sensor.server_uptime_seconds') | int(0) %}
{% set days = (s / 86400) | int %}
{% set hours = ((s % 86400) / 3600) | int %}
{% set mins = ((s % 3600) / 60) | int %}
{{ days }}d {{ hours }}h {{ mins }}m</code></pre>

      <h2>3. Implementing a 15-Minute Debounce Engine</h2>
      <p>
        To prevent Telegram alert spam when a server threshold is breached multiple times in quick succession, store the last alert timestamp in an <code>input_datetime</code> helper:
      </p>
      <pre><code>condition:
  - condition: template
    value_template: &gt;
      {{ (as_timestamp(now()) - as_timestamp(states('input_datetime.last_server_alert'))) &gt; 900 }}
action:
  - service: telegram_bot.send_message
    data:
      title: "🚨 Server CPU Threshold Warning"
      message: "Host CPU load exceeded 90% for 3 consecutive checks."
  - service: input_datetime.set_datetime
    target:
      entity_id: input_datetime.last_server_alert
    data:
      timestamp: "{{ as_timestamp(now()) }}"</code></pre>

      <p>
        To test templates and generate debounced alerting automations with zero syntax errors, use our <strong><a href="https://ha.dimustech.net" target="_blank" rel="noopener">Home Assistant Jinja2 / YAML Template Generator</a></strong>.
      </p>
    `
  },
  "youtube-thumbnail-ctr-split-testing": {
    title: "The Psychology of High Click-Through Rates: Visual Hierarchy & Title Split-Testing",
    description: "How visual saliency, thumbnail contrast in mobile dark mode, and cognitive title framing drive YouTube algorithm recommendations.",
    category: "Content Strategy & Video",
    readTime: "9 min read",
    date: "November 2026",
    content: `
      <h1>The Psychology of High Click-Through Rates: Visual Hierarchy &amp; Title Split-Testing</h1>
      <p class="article-meta">Published: November 2026 &bull; By Dima K. &bull; 9 min read</p>

      <p>
        On YouTube, your video&apos;s Click-Through Rate (CTR) and Average View Duration (AVD) are the primary signals governing algorithmic distribution. Even exceptional content will fail to gain traction if prospective viewers scroll past the packaging in their home feed.
      </p>

      <h2>1. The Mobile Dark Mode Imperative</h2>
      <p>
        Over 70% of YouTube impressions occur on mobile devices, with the vast majority of technical and gaming audiences utilizing dark mode (<code>#0f0f0f</code> background).
      </p>
      <p>
        Thumbnails composed with dark, muddy backgrounds blend seamlessly into the app interface, rendering them invisible to rapid thumb-scrolling. High-performing packaging utilizes:
      </p>
      <ul>
        <li><strong>Edge Luminance Contrast:</strong> Bright, saturated outlines or background gradients that visually separate the 16:9 canvas from the YouTube feed.</li>
        <li><strong>The 3-Element Limit:</strong> Human visual working memory processes a maximum of 3 distinct focal elements in a split-second glance: one subject face/hardware item, one short bold text hook (under 4 words), and one contextual badge/logo.</li>
      </ul>

      <h2>2. Protecting the Timestamp Safe Zone</h2>
      <p>
        YouTube automatically overlays a black video duration badge in the bottom-right corner of every thumbnail. Placing critical text, punchline logos, or facial features in the bottom-right 20% quadrant leads to visual obstruction on mobile screens.
      </p>

      <h2>3. Title &amp; Thumbnail Symbiosis</h2>
      <p>
        Never repeat your title text inside your thumbnail. If the title reads <em>"How to Fix Docker Port Collisions"</em>, the thumbnail text should provide complementary emotional or cognitive context, such as <em>"NEVER USE 0.0.0.0!"</em> or <em>"CONTAINER CRASHED?"</em>.
      </p>
      <p>
        We designed <strong><a href="https://thumbsplit.dimustech.net" target="_blank" rel="noopener">ThumbSplit</a></strong> to allow creators to preview two distinct thumbnail variations side-by-side in simulated YouTube desktop and mobile dark-mode feeds before publishing.
      </p>
    `
  },
  "wireguard-tailscale-homelab-remote-access": {
    title: "Zero-Trust Remote Access: Combining WireGuard-Easy and Tailscale Subnet Routers",
    description: "Building a high-throughput, redundant remote access architecture for home servers using kernel WireGuard and Tailscale mesh networks.",
    category: "DevOps & Security",
    readTime: "11 min read",
    date: "November 2026",
    content: `
      <h1>Zero-Trust Remote Access: Combining WireGuard-Easy and Tailscale Subnet Routers</h1>
      <p class="article-meta">Published: November 2026 &bull; By Dima K. &bull; 11 min read</p>

      <p>
        Exposing internal home-lab services (Proxmox, TrueNAS, Home Assistant, SSH) directly to the public internet via port forwarding exposes servers to automated vulnerability scanning, brute-force attacks, and zero-day exploits.
      </p>
      <p>
        Modern secure server administration combines two complementary VPN protocols to deliver zero-trust security without sacrificing throughput:
      </p>
      <ul>
        <li><strong>Primary High-Throughput Layer: WireGuard-Easy:</strong> Direct UDP peer-to-peer connection with minimal CPU overhead, ideal for high-bandwidth local file streaming and backups.</li>
        <li><strong>Resilient Secondary Layer: Tailscale:</strong> Mesh overlay using DERP relay fallback to guarantee connectivity even behind strict CGNAT (Carrier-Grade NAT) cellular connections or hotel firewalls.</li>
      </ul>

      <h2>1. The WireGuard Subnet Router Pattern</h2>
      <p>
        By enabling IP forwarding in the host Linux kernel (<code>net.ipv4.ip_forward = 1</code>) and advertising home subnet routes (e.g. <code>192.168.10.0/24</code>), a single lightweight Docker container acts as a secure gateway for all internal network devices without requiring VPN software on every individual IoT device.
      </p>

      <h2>2. Redundant Watchdog Failover</h2>
      <p>
        To ensure remote access remains uninterrupted during dynamic DNS changes or router reboots, a background watchdog script continuously probes internet connectivity and automatically restarts the WireGuard interface if handshake packets stall for more than 180 seconds.
      </p>
    `
  }
};

function renderArticlePage(slug) {
  const article = ARTICLES[slug];
  if (!article) return null;

  const content = `
    <div class="container" style="padding-top: 3.5rem;">
      <article class="prose">
        <a href="/#articles" style="font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.35rem; margin-bottom: 1.5rem;">
          &larr; Back to all guides
        </a>
        <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">
          ${article.category}
        </div>
        ${article.content}

        <div class="ad-slot" style="margin: 3rem 0;">
          <div class="ad-label">Advertisement</div>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="${PUB_ID}"
               data-ad-slot="1004"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <div style="background: var(--card); border: 1px solid var(--border); border-radius: 0.875rem; padding: 1.75rem; margin-top: 3rem;">
          <h3 style="margin-top: 0;">About the Author</h3>
          <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">
            <strong>Dima K.</strong> is the founder of DimusTech, specializing in IoT hardware integration, self-hosted Docker architectures, and developer tooling.
          </p>
          <div style="font-size: 0.85rem;">
            Follow on <a href="http://youtube.com/c/dimustech" target="_blank" rel="noopener">YouTube (English)</a> &bull; <a href="http://youtube.com/c/dimustechil" target="_blank" rel="noopener">YouTube (Hebrew)</a>
          </div>
        </div>
      </article>
    </div>
  `;

  return layout({
    title: article.title,
    description: article.description,
    content,
    canonical: `/articles/${slug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": article.title,
      "description": article.description,
      "author": { "@type": "Person", "name": "Dima K." },
      "publisher": { "@type": "Organization", "name": "DimusTech", "url": SITE_URL },
      "datePublished": "2026-11-20",
      "mainEntityOfPage": `${SITE_URL}/articles/${slug}`
    }
  });
}

function renderSitemap() {
  const articleUrls = Object.keys(ARTICLES).map(slug => `
  <url>
    <loc>${SITE_URL}/articles/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/privacy</loc>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${SITE_URL}/terms</loc>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${SITE_URL}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>${articleUrls}
</urlset>`;
}

function renderRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

// ---------------- MAIN WORKER ROUTER ----------------

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    // 1. Ads.txt (Exact compliance)
    if (path === "/ads.txt") {
      return new Response(ADS_TXT, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    // 2. Robots.txt
    if (path === "/robots.txt") {
      return new Response(renderRobots(), {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" }
      });
    }

    // 3. Sitemap.xml
    if (path === "/sitemap.xml") {
      return new Response(renderSitemap(), {
        status: 200,
        headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=86400" }
      });
    }

    // 4. Core Pages
    if (path === "/") {
      return new Response(renderHomePage(), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    if (path === "/about") {
      return new Response(renderAboutPage(), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    if (path === "/privacy") {
      return new Response(renderPrivacyPage(), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    if (path === "/terms") {
      return new Response(renderTermsPage(), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    if (path === "/contact") {
      return new Response(renderContactPage(), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // 5. Article Pages
    if (path.startsWith("/articles/")) {
      const slug = path.replace("/articles/", "");
      const html = renderArticlePage(slug);
      if (html) {
        return new Response(html, {
          status: 200,
          headers: { "Content-Type": "text/html; charset=utf-8" }
        });
      }
    }

    // 404 Fallback
    const notFoundHtml = layout({
      title: "Page Not Found",
      description: "The requested page does not exist on DimusTech.",
      content: `
        <div class="container" style="padding: 6rem 1.25rem; text-align: center;">
          <h1 style="font-size: 3rem; margin-bottom: 1rem;">404</h1>
          <p style="color: var(--text-muted); margin-bottom: 2rem;">The page you are looking for does not exist or has moved.</p>
          <a href="/" style="font-weight: 600; padding: 0.6rem 1.25rem; background: var(--primary); color: #fff; border-radius: 0.5rem; text-decoration: none;">
            Return Home &rarr;
          </a>
        </div>
      `,
      canonical: path
    });

    return new Response(notFoundHtml, {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
