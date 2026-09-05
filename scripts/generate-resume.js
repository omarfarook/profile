const fs = require('fs')
const path = require('path')

const resumeData = require('../constant/resume-data.json')

const profile = {
  name: 'Mohamed Omar Farook',
  role: 'Senior Software Engineer',
  location: 'Singapore',
  email: 'omar@omarfarook.com',
  phone: '+65 96567792',
  linkedinUrl: 'https://www.linkedin.com/in/mohamed-omar-farook/',
  linkedinLabel: 'linkedin.com/in/mohamed-omar-farook',
  summary:
    'Senior Software Engineer with 10+ years of experience building scalable frontend platforms across banking, energy, and e-commerce. Strong focus on frontend architecture, reusable UI systems, test automation, and maintainable delivery.'
}

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const renderList = (items, className) =>
  items.map((item) => `<li class="${className}">${escapeHtml(item)}</li>`).join('')

const renderExperience = resumeData.experience
  .map(
    (item) => `
      <section class="experience-item">
        <div class="experience-header">
          <div>
            <h3>${escapeHtml(item.role)}</h3>
            <p class="company">${escapeHtml(item.company)}</p>
          </div>
          <p class="period">${escapeHtml(item.period)}</p>
        </div>
        <p class="location">${escapeHtml(item.location)}</p>
        <p class="summary">${escapeHtml(item.summary)}</p>
        <ul class="bullets">
          ${renderList(item.bullets, 'bullet')}
        </ul>
      </section>
    `
  )
  .join('')

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(profile.name)} Resume</title>
    <style>
      @page {
        size: A4;
        margin: 0.48in 0.52in;
      }

      :root {
        color-scheme: light;
        --ink: #18212f;
        --muted: #5d6776;
        --line: #d6dce5;
        --panel: #f4f6fa;
        --accent: #0f3361;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        color: var(--ink);
        background: #ffffff;
        line-height: 1.32;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      .page {
        width: 100%;
      }

      .header {
        border-bottom: 2px solid var(--accent);
        padding-bottom: 14px;
        margin-bottom: 18px;
      }

      h1 {
        margin: 0;
        font-size: 28px;
        line-height: 1.1;
        letter-spacing: 0;
      }

      .role {
        margin: 6px 0 8px;
        font-size: 14px;
        font-weight: 700;
        color: var(--accent);
      }

      .summary {
        margin: 0;
        font-size: 11px;
        color: var(--muted);
      }

      .contact-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 18px;
        margin-top: 10px;
        font-size: 10.5px;
      }

      .contact-row a {
        color: inherit;
        text-decoration: none;
      }

      .sidebar a {
        color: var(--accent);
        text-decoration: none;
        font-size: 10.5px;
      }

      .layout {
        display: grid;
        grid-template-columns: 30% 1fr;
        gap: 18px;
      }

      .sidebar {
        background: var(--panel);
        border: 1px solid var(--line);
        padding: 14px 14px 10px;
      }

      .main {
        min-width: 0;
      }

      .section {
        margin-bottom: 16px;
      }

      .section:last-child {
        margin-bottom: 0;
      }

      h2 {
        margin: 0 0 8px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--accent);
      }

      .sidebar p,
      .sidebar li,
      .main li,
      .main p {
        font-size: 10.5px;
      }

      .detail-list,
      .highlight-list,
      .bullets {
        margin: 0;
        padding-left: 16px;
      }

      .detail-list li,
      .highlight-list li,
      .bullets li {
        margin-bottom: 5px;
      }

      .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .skill {
        display: inline-block;
        padding: 4px 7px;
        border: 1px solid var(--line);
        background: #ffffff;
        font-size: 9.5px;
        line-height: 1.1;
      }

      .experience-item {
        padding-bottom: 11px;
        margin-bottom: 11px;
        border-bottom: 1px solid var(--line);
        break-inside: avoid;
      }

      .experience-item:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: 0;
      }

      .experience-header {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: flex-start;
      }

      h3 {
        margin: 0;
        font-size: 12px;
      }

      .company,
      .period,
      .location {
        margin: 2px 0 0;
        font-size: 10px;
        color: var(--muted);
      }

      .period {
        text-align: right;
        white-space: nowrap;
      }

      .summary + .bullets {
        margin-top: 6px;
      }

      .meta-line {
        margin: 0 0 4px;
        font-size: 10.5px;
      }

      @media print {
        .page {
          page-break-after: auto;
        }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <header class="header">
        <h1>${escapeHtml(profile.name)}</h1>
        <p class="role">${escapeHtml(profile.role)}</p>
        <p class="summary">${escapeHtml(profile.summary)}</p>
        <div class="contact-row">
          <span>${escapeHtml(profile.location)}</span>
          <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>
          <a href="tel:${escapeHtml(profile.phone)}">${escapeHtml(profile.phone)}</a>
          <a href="${escapeHtml(profile.linkedinUrl)}">${escapeHtml(profile.linkedinLabel)}</a>
        </div>
      </header>

      <section class="layout">
        <aside class="sidebar">
          <section class="section">
            <h2>Selected Impact</h2>
            <ul class="highlight-list">
              ${renderList(resumeData.highlights, 'highlight')}
            </ul>
          </section>

          <section class="section">
            <h2>Core Skills</h2>
            <div class="skills">
              ${resumeData.skills
                .map((skill) => `<span class="skill">${escapeHtml(skill)}</span>`)
                .join('')}
            </div>
          </section>

          <section class="section">
            <h2>Certification</h2>
            <p class="meta-line">AWS Certified Developer - Associate</p>
            <a href="${escapeHtml(resumeData.awsCertUrl)}">Verify on Credly</a>
          </section>

          <section class="section">
            <h2>Education</h2>
            <p class="meta-line">Bachelor's Degree in Computer Science and Engineering</p>
            <p class="meta-line">Anna University, Chennai</p>
          </section>
        </aside>

        <section class="main">
          <section class="section">
            <h2>Professional Experience</h2>
            ${renderExperience}
          </section>
        </section>
      </section>
    </main>
  </body>
</html>
`

const outputDir = path.join(__dirname, '..', 'tmp', 'pdfs')
fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(path.join(outputDir, 'resume.html'), html)
console.log(path.join(outputDir, 'resume.html'))
