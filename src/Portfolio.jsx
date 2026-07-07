import React from "react";
import { Github, Linkedin, Code2, Smartphone, Server, Radio, Globe } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform and native mobile apps built with Flutter and Kotlin — clean UI, smooth navigation, solid state management.",
    tags: ["Flutter", "Kotlin"],
  },
  {
    icon: Globe,
    title: "Web App Development",
    desc: "Responsive web apps and admin dashboards built with React and Next.js — the same product logic, extended to the browser.",
    tags: ["React", "Next.js"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "REST APIs and data layers that web and mobile apps can actually rely on — auth, schemas, and admin tooling included.",
    tags: ["Node.js", "PostgreSQL"],
  },
  {
    icon: Radio,
    title: "Real-Time Systems",
    desc: "Live chat, notifications, and status updates powered by sockets, so an app feels alive instead of static.",
    tags: ["Socket.io"],
  },
];

const projects = [
  {
    name: "MADES",
    kind: "Flutter · Node.js · Next.js · PostgreSQL",
    desc: "Full-stack home services employment platform — client app, provider matching, admin dashboard, real-time chat.",
  },
  {
    name: "Perfume",
    kind: "Flutter · Provider · l10n",
    desc: "Luxury fragrance e-commerce app with English/Amharic localization and a warm-dark theme toggle.",
  },
  {
    name: "Nees Café",
    kind: "Kotlin · Jetpack Compose",
    desc: "Native seat reservation app with a live table map and time-slot booking.",
  },
  {
    name: "POARS",
    kind: "React",
    desc: "Web-based records and administration system built for fast data entry and lookup.",
  },
];

const skillGroups = [
  { title: "Core Skills", items: ["Flutter", "Dart", "Kotlin", "Jetpack Compose"] },
  { title: "Backend", items: ["Node.js", "PostgreSQL", "Socket.io", "REST APIs"] },
  { title: "Web", items: ["React", "Next.js"] },
  { title: "Tools & Foundations", items: ["Git", "Figma", "OpenGL", "C++"] },
];

export default function Portfolio() {
  return (
    <div className="wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg: #0A0A0A;
          --card: #151515;
          --card-2: #1D1D1D;
          --border: rgba(255,255,255,0.08);
          --text: #EDEDED;
          --text-dim: #9A9A9A;
          --gold: #C9A227;
        }
        .wrap {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          min-height: 100%;
          width: 100%;
        }
        .wrap * { box-sizing: border-box; }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 6vw;
        }
        .nav-mark {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--card-2);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 14px;
        }
        .nav-pill {
          display: flex; gap: 6px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 30px;
          padding: 6px;
        }
        .nav-pill a {
          color: var(--text-dim);
          text-decoration: none;
          font-size: 13px;
          padding: 8px 18px;
          border-radius: 24px;
          transition: background 0.15s, color 0.15s;
        }
        .nav-pill a:hover { color: var(--text); background: var(--card-2); }
        .nav-cta {
          background: var(--card-2);
          border: 1px solid var(--border);
          color: var(--text);
          font-size: 13px;
          padding: 10px 20px;
          border-radius: 24px;
          text-decoration: none;
        }
        .nav-cta:hover { border-color: var(--gold); }
        @media (max-width: 800px) { .nav-pill { display: none; } }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 30px;
          align-items: center;
          padding: 50px 6vw 80px;
        }
        @media (max-width: 800px) { .hero { grid-template-columns: 1fr; } }
        .hero-eyebrow { color: var(--text-dim); font-size: 14px; margin-bottom: 14px; }
        .hero h1 {
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.08;
          margin: 0 0 18px;
        }
        .hero p {
          color: var(--text-dim);
          font-size: 15px;
          line-height: 1.7;
          max-width: 46ch;
          margin-bottom: 26px;
        }
        .btn {
          display: inline-block;
          background: var(--card-2);
          border: 1px solid var(--border);
          color: var(--text);
          font-size: 13px;
          font-weight: 600;
          padding: 12px 22px;
          border-radius: 24px;
          text-decoration: none;
        }
        .btn:hover { border-color: var(--gold); }
        .social-row { display: flex; gap: 12px; margin-top: 24px; }
        .social-icon {
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--text);
        }
        .social-icon:hover { border-color: var(--gold); color: var(--gold); }

        .avatar-block {
          aspect-ratio: 3/4;
          border-radius: 20px;
          background: linear-gradient(160deg, #1C1C1C, #0A0A0A);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .avatar-mark {
          font-family: 'Inter', sans-serif;
          font-size: 80px;
          font-weight: 700;
          color: rgba(255,255,255,0.08);
          letter-spacing: -2px;
        }
        .avatar-caption {
          position: absolute;
          bottom: 16px;
          left: 16px;
          font-size: 11px;
          color: var(--text-dim);
        }

        section { padding: 70px 6vw; }
        .section-label {
          text-align: center;
          color: var(--text-dim);
          font-size: 13px;
          margin-bottom: 6px;
        }
        .section-title {
          text-align: center;
          font-size: 30px;
          font-weight: 700;
          margin: 0 0 40px;
        }

        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        @media (max-width: 900px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .grid-4 { grid-template-columns: 1fr; } }
        .service-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
        }
        .service-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: var(--card-2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
          color: var(--gold);
        }
        .service-card h3 { font-size: 16px; margin: 0 0 8px; }
        .service-card p { color: var(--text-dim); font-size: 13.5px; line-height: 1.6; margin: 0 0 16px; }
        .tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag {
          background: var(--card-2);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 11.5px;
          color: var(--text-dim);
        }

        .about-text {
          text-align: center;
          color: var(--text-dim);
          font-size: 15px;
          line-height: 1.75;
          max-width: 70ch;
          margin: 0 auto 40px;
        }
        .approach-label { text-align: center; font-size: 15px; font-weight: 600; margin-bottom: 20px; }
        .approach-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 44px;
        }
        @media (max-width: 700px) { .approach-row { grid-template-columns: 1fr; } }
        .approach-item {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 13.5px;
        }
        .approach-num {
          background: var(--card-2);
          border-radius: 8px;
          width: 30px; height: 30px;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          color: var(--gold);
          flex-shrink: 0;
        }
        .stats-row {
          display: flex;
          justify-content: center;
          gap: 70px;
          flex-wrap: wrap;
        }
        .stat { text-align: center; }
        .stat-num { font-size: 30px; font-weight: 700; }
        .stat-label { font-size: 12px; color: var(--text-dim); margin-top: 4px; }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        @media (max-width: 700px) { .grid-2 { grid-template-columns: 1fr; } }
        .project-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 26px;
        }
        .project-card h3 { font-size: 18px; margin: 0 0 6px; }
        .project-kind { color: var(--gold); font-size: 12px; margin-bottom: 12px; }
        .project-card p { color: var(--text-dim); font-size: 13.5px; line-height: 1.6; margin: 0; }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .skills-grid { grid-template-columns: 1fr; } }
        .skill-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 22px;
        }
        .skill-card h4 { font-size: 14px; margin: 0 0 14px; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }

        footer {
          text-align: center;
          padding: 30px;
          color: var(--text-dim);
          font-size: 12px;
          border-top: 1px solid var(--border);
        }
      `}</style>

      <nav className="nav">
        <div className="nav-mark">ns</div>
        <div className="nav-pill">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
        <a className="nav-cta" href="#contact">Let's Talk</a>
      </nav>

      <section id="home" className="hero" style={{ paddingTop: 40 }}>
        <div>
          <div className="hero-eyebrow">I am Natanim</div>
          <h1>Web &amp; Mobile<br />App Developer</h1>
          <p>
            Software Engineering student building real products end to end —
            Flutter and Kotlin apps on mobile, React and Next.js on the web,
            backed by clean APIs and real-time systems.
          </p>
          <a className="btn" href="#contact">Let's Talk</a>
          <div className="social-row">
            <a className="social-icon" href="https://github.com/natanim-samuel" target="_blank" rel="noreferrer">
              <Github size={16} />
            </a>
            <a className="social-icon" href="https://leetcode.com/natanim_samuel" target="_blank" rel="noreferrer">
              <Code2 size={16} />
            </a>
            <a className="social-icon" href="#" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <div className="avatar-block">
          <div className="avatar-mark">NS</div>
          <div className="avatar-caption">Photo coming soon</div>
        </div>
      </section>

      <section id="services">
        <div className="section-label">What I build</div>
        <h2 className="section-title">Services</h2>
        <div className="grid-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="service-card">
                <div className="service-icon"><Icon size={18} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tag-row">
                  {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about">
        <div className="section-label">Get to know me</div>
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I'm a mobile-first developer passionate about turning ideas into
          reliable, polished apps. I focus on understanding what a product
          actually needs, designing clean interfaces around that, and making
          sure everything holds up across devices and real-world use.
        </p>
        <div className="approach-label">My Approach</div>
        <div className="approach-row">
          <div className="approach-item"><div className="approach-num">01</div>Understand the problem</div>
          <div className="approach-item"><div className="approach-num">02</div>Design clean, usable UI</div>
          <div className="approach-item"><div className="approach-num">03</div>Ship reliable, tested code</div>
        </div>
        <div className="stats-row">
          <div className="stat"><div className="stat-num">3rd</div><div className="stat-label">Year, SE</div></div>
          <div className="stat"><div className="stat-num">5+</div><div className="stat-label">Apps Built</div></div>
          <div className="stat"><div className="stat-num">2</div><div className="stat-label">Languages: Dart &amp; Kotlin</div></div>
        </div>
      </section>

      <section id="projects">
        <div className="section-label">Recent builds</div>
        <h2 className="section-title">Projects</h2>
        <div className="grid-2">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <h3>{p.name}</h3>
              <div className="project-kind">{p.kind}</div>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="section-label">Crafting seamless mobile experiences</div>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div key={g.title} className="skill-card">
              <h4>{g.title}</h4>
              <div className="skill-tags">
                {g.items.map((i) => <span key={i} className="tag">{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">© {new Date().getFullYear()} Natanim Samuel · natanim-samuel on GitHub</footer>
    </div>
  );
}