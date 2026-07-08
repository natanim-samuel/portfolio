import React, { useRef, useState } from "react";

const C = {
  bg: "#0a0a0a",
  panel: "#141414",
  card: "#161616",
  border: "#262626",
  borderLight: "#333333",
  text: "#f2f2f0",
  muted: "#a3a3a0",
  faint: "#6b6b68",
  chip: "#1c1c1c",
  sans: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "No Delala",
    sub: "Home Services Platform · Web",
    desc: "A platform connecting customers directly to verified local service providers — cutting out the middleman ('delala') for booking home repairs and services.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Wedet",
    sub: "Bus Ticket Booking · Web",
    desc: "A website for booking intercity bus tickets — route search, schedule browsing, and ticket purchase in a single streamlined flow.",
    tags: ["React", "Node.js"],
  },
  {
    title: "Hair Salon Appointment App",
    sub: "UI/UX Design · Figma",
    desc: "End-to-end UI/UX for a salon booking app — browsing services, selecting stylists, and reserving time slots, with a focus on clean layout and a polished visual identity.",
    tags: ["Figma", "UI Design", "UX Flow", "Prototyping"],
  },
  {
    title: "Nees Café",
    sub: "Seat Reservation & Management App · Kotlin, Android",
    desc: "An Android app for café seat reservation and order pickup, built with Jetpack Compose and Kotlin following OOP principles. Includes a manager dashboard for staff to oversee bookings and coordinate workers in real time.",
    tags: ["Kotlin", "Jetpack Compose", "Manager Dashboard", "OOP"],
  },
  {
    title: "POARS",
    sub: "Power Outage Alert & Reporting System · React, Web",
    desc: "A platform for citizens to report power outages and track live status. Includes area-based outage mapping, a feedback system, and a direct channel between residents and repair workers.",
    tags: ["React", "JavaScript", "Outage Reporting", "Real-time Status", "Worker Coordination"],
  },
  {
    title: "Luxury Perfume E-Commerce App",
    sub: "Flutter · Mobile",
    desc: "A Guerlain-inspired mobile shopping app with product browsing, a quantity-aware basket, and English/Amharic localization via Flutter's ARB i18n system, plus custom Cormorant Garamond typography and a gold-accented theme.",
    tags: ["Flutter", "Dart", "Provider", "Localization (ARB)", "Custom Theming"],
  },
];

const SKILLS = [
  { group: "Languages & Frameworks", items: ["C / C++", "Python", "JavaScript / React", "Java / Kotlin"] },
  { group: "Mobile & State", items: ["Jetpack Compose", "Flutter", "Provider", "State Management"] },
  { group: "Tools & Platforms", items: ["Git & GitHub", "Linux / Bash", "Figma", "Firebase"] },
  { group: "CS Fundamentals", items: ["OOP", "Data Structures & Algorithms", "Computer Networks", "Computer Graphics", "IT Security"] },
  { group: "Soft Skills", items: ["Problem Solving", "Team Collaboration"] },
];

const LANGUAGES = [
  { lang: "Amharic", level: "Native" },
  { lang: "English", level: "Professional" },
];

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.1Z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4V9Z" />
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}
function IconLeetCode() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 3 5 11.5a2 2 0 0 0 0 2.8L11 20" />
      <path d="M9 13.5h9" /><path d="m14 6 3-3" />
    </svg>
  );
}

const SOCIALS = [
  { icon: IconMail, label: "ntnmsamuel@gmail.com", href: "mailto:ntnmsamuel@gmail.com" },
  { icon: IconPhone, label: "+251 96 701 5702", href: "tel:+251967015702" },
  { icon: IconLinkedIn, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: IconGitHub, label: "GitHub", href: "https://github.com" },
  { icon: IconLeetCode, label: "LeetCode", href: "https://leetcode.com" },
];

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const refs = useRef({});
  const scrollTo = (id) => {
    setActive(id);
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: C.sans }}>
      <style>{`
        * { box-sizing: border-box; }
        ::selection { background: #ffffff; color: #0a0a0a; }
        a { color: inherit; text-decoration: none; }
        .wrap { max-width: 1040px; margin: 0 auto; padding: 0 24px; }
        .nav-shell { position: sticky; top: 18px; z-index: 30; display: flex; justify-content: center; padding: 0 16px; }
        .nav-pill { display:flex; align-items:center; gap:6px; background: rgba(20,20,20,0.85); backdrop-filter: blur(14px); border: 1px solid ${C.border}; border-radius: 999px; padding: 6px; box-shadow: 0 10px 30px -12px rgba(0,0,0,0.6); }
        .nav-mark { width:34px; height:34px; border-radius:50%; background:#1e1e1e; border:1px solid ${C.borderLight}; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; margin-right:6px; }
        .nav-link { font-size: 13px; padding: 8px 14px; border-radius: 999px; color: ${C.muted}; cursor:pointer; white-space:nowrap; transition: color .15s, background .15s; background:none; border:none; }
        .nav-link:hover { color: ${C.text}; }
        .nav-link.active { color: ${C.text}; background: #232323; }
        .nav-cta { font-size: 13px; padding: 8px 16px; border-radius: 999px; background:#f2f2f0; color:#0a0a0a; font-weight:600; margin-left: 4px; }
        .btn { display:inline-flex; align-items:center; gap:8px; font-size:14px; font-weight:600; padding: 12px 22px; border-radius: 10px; cursor:pointer; border:1px solid transparent; transition: transform .15s, filter .15s, border-color .15s; }
        .btn:hover { transform: translateY(-1px); }
        .btn:focus-visible { outline:2px solid #fff; outline-offset:2px; }
        .btn-primary { background:#f2f2f0; color:#0a0a0a; }
        .btn-primary:hover { filter: brightness(0.94); }
        .btn-ghost { background:transparent; color:${C.text}; border-color:${C.borderLight}; }
        .btn-ghost:hover { border-color:#7a7a78; }
        .social-row { display:flex; gap:10px; flex-wrap:wrap; }
        .social-chip { display:flex; align-items:center; gap:7px; font-size:12.5px; color:${C.muted}; padding:8px 13px; border:1px solid ${C.border}; border-radius:999px; transition: border-color .15s, color .15s; }
        .social-chip:hover { border-color:${C.borderLight}; color:${C.text}; }
        .eyebrow { font-size:13px; color:${C.muted}; letter-spacing:0.02em; margin-bottom:10px; }
        .h1 { font-size:44px; line-height:1.08; font-weight:700; letter-spacing:-0.02em; margin:0 0 14px; }
        .lede { font-size:15.5px; color:${C.muted}; line-height:1.7; max-width: 480px; margin: 0 0 26px; }
        .avatar-card { border-radius:20px; background: linear-gradient(160deg,#1c1c1c,#0f0f0f); border:1px solid ${C.border}; aspect-ratio: 3/4; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
        .avatar-mono { font-size:64px; font-weight:700; color:#3a3a38; letter-spacing:-2px; }
        .section { margin-top: 110px; }
        .section-head { text-align:center; margin-bottom: 44px; }
        .section-title { font-size:30px; font-weight:700; letter-spacing:-0.01em; margin:0 0 10px; }
        .section-tagline { font-size:13.5px; color:${C.faint}; }
        .grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        .grid-2 { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
        .card { background:${C.card}; border:1px solid ${C.border}; border-radius:14px; padding:22px; }
        .card h3 { font-size:15.5px; margin:0 0 8px; font-weight:700; }
        .card p { font-size:13.5px; color:${C.muted}; line-height:1.6; margin:0; }
        .tag { display:inline-block; font-size:11.5px; color:${C.muted}; background:${C.chip}; border:1px solid ${C.border}; padding:5px 11px; border-radius:999px; margin:4px 6px 0 0; }
        .project-card { background:${C.card}; border:1px solid ${C.border}; border-radius:16px; padding:26px; margin-bottom:14px; }
        .project-title { font-size:19px; font-weight:700; margin:0 0 4px; }
        .project-sub { font-size:12.5px; color:${C.faint}; font-weight:600; letter-spacing:0.01em; text-transform:uppercase; margin-bottom:12px; }
        .project-desc { font-size:14.5px; color:${C.muted}; line-height:1.7; margin-bottom:14px; max-width:640px; }
        .stat-row { display:flex; justify-content:center; gap:60px; margin-top:34px; flex-wrap:wrap; }
        .stat-num { font-size:30px; font-weight:700; }
        .stat-label { font-size:12.5px; color:${C.faint}; margin-top:4px; }
        .edu-card { display:flex; gap:20px; background:${C.card}; border:1px solid ${C.border}; border-radius:16px; padding:28px; align-items:flex-start; }
        .edu-badge { width:44px; height:44px; border-radius:12px; background:#1e1e1e; border:1px solid ${C.borderLight}; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:18px; }
        .lang-row { display:flex; justify-content:center; gap:14px; flex-wrap:wrap; }
        .lang-chip { display:flex; align-items:center; gap:8px; font-size:13.5px; padding:10px 18px; border:1px solid ${C.border}; border-radius:999px; background:${C.card}; }
        .lang-level { color:${C.faint}; font-size:12px; }
        .contact-panel { background:${C.card}; border:1px solid ${C.border}; border-radius:18px; padding:36px; text-align:center; }
        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .grid-4, .grid-2 { grid-template-columns: 1fr !important; }
          .h1 { font-size:34px; }
          .avatar-card { max-width: 260px; margin: 0 auto; }
          .nav-pill { flex-wrap: wrap; justify-content:center; }
        }
      `}</style>

      <div className="nav-shell">
        <nav className="nav-pill">
          <span className="nav-mark">NS</span>
          {NAV.map((n) => (
            <button key={n.id} className={`nav-link ${active === n.id ? "active" : ""}`} onClick={() => scrollTo(n.id)}>
              {n.label}
            </button>
          ))}
          <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
            Let's Talk
          </a>
        </nav>
      </div>

      <div className="wrap" style={{ paddingTop: 60, paddingBottom: 110 }}>
        {/* HERO */}
        <section id="home" ref={(el) => (refs.current.home = el)}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }}>
             <div className="avatar-card">
              
              <img src="src\assets\d7.jpg" style={{width:"100%",height:"100%",objectFit:"contain"}}></img>
            </div>
            <div>
              <p className="eyebrow">I am Natanim Samuel Mekonnen</p>
              <h1 className="h1">
                Software Engineering<br />Student
              </h1>
              <p className="lede">
                Third-year Software Engineering student at Addis Ababa University,
                building web and mobile products — from UI/UX design in Figma to
                production apps in React, Flutter, and Kotlin.
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 26, flexWrap: "wrap" }}>
                <a className="btn btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>
                  View Projects
                </a>
                <a className="btn btn-ghost" href="mailto:ntnmsamuel@gmail.com">
                  <IconMail /> Get in Touch
                </a>
              </div>
              <div className="social-row">
                {SOCIALS.map((s) => (
                  <a key={s.label} className="social-chip" href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <s.icon /> {s.label}
                  </a>
                ))}
              </div>
            </div>
           
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section" ref={(el) => (refs.current.education = el)}>
          <div className="section-head">
            <h2 className="section-title">Education</h2>
            <p className="section-tagline">Where the foundation was built</p>
          </div>
          <div className="edu-card">
            <div className="edu-badge">🎓</div>
            <div>
              <h3 style={{ margin: "0 0 4px", fontSize: 17, fontWeight: 700 }}>BSc in Software Engineering</h3>
              <p style={{ margin: "0 0 10px", fontSize: 13.5, color: C.muted }}>
                Addis Ababa University — College of Natural &amp; Computational Sciences
              </p>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: 13, color: C.faint }}>
                <span>📍 Addis Ababa, Ethiopia</span>
                <span>3rd Year</span>
                <span>Expected Graduation 2026</span>
              </div>
            </div>
          </div>
          <div className="stat-row">
            <div style={{ textAlign: "center" }}>
              <div className="stat-num">3rd</div>
              <div className="stat-label">Year of Study</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="stat-num">4+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="stat-num">2026</div>
              <div className="stat-label">Expected Graduation</div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section" ref={(el) => (refs.current.projects = el)}>
          <div className="section-head">
            <h2 className="section-title">Projects</h2>
            <p className="section-tagline">From Figma flows to production code</p>
          </div>
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.title}>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-sub">{p.sub}</p>
              <p className="project-desc">{p.desc}</p>
              <div>
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section id="skills" className="section" ref={(el) => (refs.current.skills = el)}>
          <div className="section-head">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-tagline">Crafting seamless UI/UX and clean code</p>
          </div>
          <div className="grid-2">
            {SKILLS.map((s) => (
              <div className="card" key={s.group}>
                <h3>{s.group}</h3>
                <div>
                  {s.items.map((it) => (
                    <span className="tag" key={it}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="lang-row" style={{ marginTop: 30 }}>
            {LANGUAGES.map((l) => (
              <div className="lang-chip" key={l.lang}>
                <span>{l.lang}</span>
                <span className="lang-level">— {l.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section" ref={(el) => (refs.current.contact = el)}>
          <div className="section-head">
            <h2 className="section-title">Contact</h2>
            <p className="section-tagline">Open to internships, collaborations, and freelance work</p>
          </div>
          <div className="contact-panel">
            <p style={{ fontSize: 15, color: C.muted, marginBottom: 22, maxWidth: 460, marginLeft: "auto", marginRight: "auto" }}>
              Reach out by email or phone, or find me on LinkedIn, GitHub, and LeetCode.
            </p>
            <div className="social-row" style={{ justifyContent: "center" }}>
              {SOCIALS.map((s) => (
                <a key={s.label} className="social-chip" href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <s.icon /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer style={{ textAlign: "center", padding: "10px 0 50px", fontSize: 12.5, color: C.faint }}>
        © {new Date().getFullYear()} Natanim Samuel Mekonnen
      </footer>
    </div>
  );
}