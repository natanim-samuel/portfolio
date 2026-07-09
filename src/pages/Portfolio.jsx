import React, { useRef, useState } from "react";
import "./portfolio.css";

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
    <div className="np-root">

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

      <div className="wrap wrap-page">
        {/* HERO */}
        <section id="home" ref={(el) => (refs.current.home = el)}>
          <div className="hero-grid">
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
              <div className="hero-actions">
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
            <div className="avatar-card">
              
               <img src="src/assets/d7.jpg" style={{width:"100%",height:"100%",objectFit:"cover"}} />

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
              <h3 className="edu-degree">BSc in Software Engineering</h3>
              <p className="edu-university">
                Addis Ababa University — College of Natural &amp; Computational Sciences
              </p>
              <div className="edu-meta">
                <span>📍 Addis Ababa, Ethiopia</span>
                <span>3rd Year</span>
                <span>Expected Graduation 2026</span>
              </div>
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <div className="stat-num">3rd</div>
              <div className="stat-label">Year of Study</div>
            </div>
            <div className="stat">
              <div className="stat-num">4+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
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
          <div className="lang-row lang-row-spaced">
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
            <p className="contact-lede">
              Reach out by email or phone, or find me on LinkedIn, GitHub, and LeetCode.
            </p>
            <div className="social-row social-row-center">
              {SOCIALS.map((s) => (
                <a key={s.label} className="social-chip" href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <s.icon /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="np-footer">
        © {new Date().getFullYear()} Natanim Samuel Mekonnen
      </footer>
    </div>
  );
}