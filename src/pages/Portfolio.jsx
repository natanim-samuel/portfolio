import React, { useState, useEffect, useRef } from "react";

const TOKENS = {
  bg: "#0d0f0e",
  panel: "#14181a",
  card: "#181d1f",
  border: "#262b2c",
  borderLight: "#33393a",
  text: "#e9ebe8",
  muted: "#868d8a",
  faint: "#565c5a",
  accent: "#e8b44a",
  accent2: "#5fd0c0",
  mono: "ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace",
  sans: "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif",
};

const NAV = [
  { id: "home", label: "portfolio.tsx" },
  { id: "about", label: "about.md" },
  { id: "skills", label: "skills.json" },
  { id: "projects", label: "projects/" },
  { id: "contact", label: "contact.sh" },
];

const PROJECTS = [
  { name: "no-delala", ext: "tsx", lang: "React Native", color: "#5fd0c0", desc: "Home services platform connecting customers to verified local providers." },
  { name: "wedet", ext: "jsx", lang: "React", color: "#e8b44a", desc: "Bus ticket booking site — route search, seat selection, and payment flow." },
  { name: "perfume-co", ext: "tsx", lang: "Next.js", color: "#7aa2e8", desc: "Luxury perfume e-commerce app with catalog, cart, and checkout." },
  { name: "nees-cafe", ext: "kt", lang: "Kotlin", color: "#e88a5f", desc: "Table reservation app for a café — live availability and booking history." },
  { name: "poars", ext: "sql", lang: "PostgreSQL", color: "#c98ae8", desc: "Administration system for records, roles, and reporting workflows." },
];

const SKILLS = [
  { group: "frontend", items: ["React", "Next.js", "Flutter"] },
  { group: "backend", items: ["Node.js", "Express"] },
  { group: "mobile", items: ["Flutter", "Kotlin"] },
  { group: "database", items: ["PostgreSQL"] },
  { group: "tools", items: ["Git", "Figma"] },
];

function useCursorBlink() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return on;
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [openProject, setOpenProject] = useState(PROJECTS[0].name);
  const cursorOn = useCursorBlink();
  const sectionRefs = useRef({});

  const scrollTo = (id) => {
    setActive(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: TOKENS.bg, minHeight: "100vh", color: TOKENS.text, fontFamily: TOKENS.sans }}>
      <style>{`
        * { box-sizing: border-box; }
        ::selection { background: ${TOKENS.accent}; color: #0d0f0e; }
        a { color: inherit; }
        .np-container { max-width: 980px; margin: 0 auto; padding: 0 28px; }
        .np-nav { position: sticky; top: 0; z-index: 20; backdrop-filter: blur(10px); background: rgba(13,15,14,0.82); border-bottom: 1px solid ${TOKENS.border}; }
        .np-nav-inner { max-width: 980px; margin: 0 auto; padding: 0 28px; display: flex; align-items: center; gap: 4px; height: 52px; overflow-x: auto; }
        .np-mark { font-family: ${TOKENS.mono}; font-size: 13px; color: ${TOKENS.accent}; font-weight: 600; margin-right: 18px; white-space: nowrap; letter-spacing: 0.02em; }
        .np-tab { font-family: ${TOKENS.mono}; font-size: 12.5px; padding: 6px 12px; border-radius: 6px 6px 0 0; cursor: pointer; white-space: nowrap; color: ${TOKENS.muted}; border-bottom: 2px solid transparent; transition: color .15s, background .15s; background: transparent; border-top:none;border-left:none;border-right:none; }
        .np-tab:hover { color: ${TOKENS.text}; background: rgba(255,255,255,0.03); }
        .np-tab.is-active { color: ${TOKENS.text}; border-bottom: 2px solid ${TOKENS.accent}; }
        .np-editor { border: 1px solid ${TOKENS.border}; border-radius: 10px; background: ${TOKENS.panel}; overflow: hidden; box-shadow: 0 20px 60px -20px rgba(0,0,0,0.6); }
        .np-editor-bar { display: flex; align-items: center; gap: 8px; padding: 10px 14px; border-bottom: 1px solid ${TOKENS.border}; background: #111414; }
        .np-dot { width: 10px; height: 10px; border-radius: 50%; }
        .np-editor-filename { margin-left: 8px; font-family: ${TOKENS.mono}; font-size: 12px; color: ${TOKENS.muted}; }
        .np-line { display: flex; gap: 18px; padding: 2px 20px; font-family: ${TOKENS.mono}; }
        .np-lineno { color: ${TOKENS.faint}; user-select: none; width: 18px; text-align: right; flex-shrink: 0; font-size: 13px; }
        .np-btn { font-family: ${TOKENS.mono}; font-size: 13px; padding: 11px 20px; border-radius: 7px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; border: 1px solid transparent; cursor: pointer; transition: transform .15s ease, filter .15s ease; }
        .np-btn:hover { transform: translateY(-1px); }
        .np-btn:focus-visible { outline: 2px solid ${TOKENS.accent}; outline-offset: 2px; }
        .np-btn-primary { background: ${TOKENS.accent}; color: #14110a; font-weight: 600; }
        .np-btn-primary:hover { filter: brightness(1.08); }
        .np-btn-ghost { background: transparent; color: ${TOKENS.text}; border-color: ${TOKENS.borderLight}; }
        .np-btn-ghost:hover { border-color: ${TOKENS.accent2}; color: ${TOKENS.accent2}; }
        .np-comment { color: ${TOKENS.faint}; }
        .np-section-head { display:flex; align-items:baseline; gap:10px; margin-bottom: 26px; }
        .np-section-tag { font-family: ${TOKENS.mono}; font-size: 12px; color: ${TOKENS.accent2}; }
        .np-section-title { font-family: ${TOKENS.mono}; font-size: 22px; font-weight: 600; }
        .np-import { font-family: ${TOKENS.mono}; font-size: 14.5px; line-height: 2.1; }
        .np-import .kw { color: ${TOKENS.accent2}; }
        .np-import .str { color: ${TOKENS.accent}; }
        .np-import .punc { color: ${TOKENS.faint}; }
        .np-file-row { display:flex; align-items:center; gap:14px; padding: 15px 18px; border: 1px solid ${TOKENS.border}; border-radius: 8px; background: ${TOKENS.card}; cursor: pointer; transition: border-color .15s, background .15s; margin-bottom: 10px; }
        .np-file-row:hover { border-color: ${TOKENS.borderLight}; }
        .np-file-row.is-open { border-color: ${TOKENS.accent2}; }
        .np-file-name { font-family: ${TOKENS.mono}; font-size: 14.5px; }
        .np-file-ext { color: ${TOKENS.faint}; }
        .np-file-lang { margin-left: auto; font-family: ${TOKENS.mono}; font-size: 11.5px; color: ${TOKENS.muted}; border: 1px solid ${TOKENS.border}; padding: 3px 9px; border-radius: 20px; white-space: nowrap; }
        .np-file-desc { font-family: ${TOKENS.sans}; font-size: 14px; color: ${TOKENS.muted}; padding: 0 18px 16px 42px; margin-top: -8px; line-height: 1.6; }
        .np-hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 20px; align-items: stretch; }
        .np-avatar-box { border: 1px solid ${TOKENS.border}; border-radius: 10px; background: ${TOKENS.panel}; display:flex; align-items:center; justify-content:center; position: relative; min-height: 260px; }
        .np-corner { position: absolute; width: 16px; height: 16px; border-color: ${TOKENS.accent2}; }
        .np-monogram { font-family: ${TOKENS.mono}; font-size: 54px; font-weight: 600; color: ${TOKENS.text}; letter-spacing: -1px; }
        .np-skill-card { border: 1px solid ${TOKENS.border}; border-radius: 8px; background: ${TOKENS.card}; padding: 18px 20px; }
        .np-footer-prompt { font-family: ${TOKENS.mono}; font-size: 14px; color: ${TOKENS.muted}; }
        @media (max-width: 720px) {
          .np-hero-grid { grid-template-columns: 1fr; }
          .np-avatar-box { min-height: 140px; }
          .np-line { padding: 2px 14px; gap: 12px; font-size: 13px; }
        }
      `}</style>

      {/* NAV */}
      <div className="np-nav">
        <div className="np-nav-inner">
          <span className="np-mark">natanim.dev</span>
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`np-tab ${active === n.id ? "is-active" : ""}`}
              onClick={() => scrollTo(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>

      <div className="np-container" style={{ paddingTop: 56, paddingBottom: 100 }}>
        {/* HERO */}
        <section id="home" ref={(el) => (sectionRefs.current.home = el)}>
          <div className="np-hero-grid">
              <div className="np-avatar-box">
              <span className="np-corner" style={{ top: 10, left: 10, borderTop: "1px solid", borderLeft: "1px solid" }} />
              <span className="np-corner" style={{ top: 10, right: 10, borderTop: "1px solid", borderRight: "1px solid" }} />
              <span className="np-corner" style={{ bottom: 10, left: 10, borderBottom: "1px solid", borderLeft: "1px solid" }} />
              <span className="np-corner" style={{ bottom: 10, right: 10, borderBottom: "1px solid", borderRight: "1px solid" }} />
              <span className="np-monogram"><img src="src\assets\d7.jpg" alt=" n.s " style={{width:"100%",height:"100%",objectFit:"inherit",borderRadius:10}}  /></span>
        
            </div>
            <div className="np-editor">
              <div className="np-editor-bar">
                <span className="np-dot" style={{ backsground: "#e8635f" }} />
                <span className="np-dot" style={{ background: "#e8b44a" }} />
                <span className="np-dot" style={{ background: "#5fd08a" }} />
                <span className="np-editor-filename">portfolio.tsx</span>
              </div>
              <div style={{ padding: "22px 0" }}>
                <div className="np-line"><span className="np-lineno">1</span><span><span style={{ color: TOKENS.accent2 }}>const</span> natanim = {"{"}</span></div>
                <div className="np-line"><span className="np-lineno">2</span><span style={{ paddingLeft: 16 }}>role: <span style={{ color: TOKENS.accent }}>"Software Engineering Student"</span>,</span></div>
                <div className="np-line"><span className="np-lineno">3</span><span style={{ paddingLeft: 16 }}>builds: [<span style={{ color: TOKENS.accent }}>"web"</span>, <span style={{ color: TOKENS.accent }}>"mobile"</span>],</span></div>
                <div className="np-line"><span className="np-lineno">4</span><span style={{ paddingLeft: 16 }}>base: <span style={{ color: TOKENS.accent }}>"AAU · CTBE"</span>,</span></div>
                <div className="np-line"><span className="np-lineno">5</span><span style={{ paddingLeft: 16 }}>stack: [<span style={{ color: TOKENS.accent }}>"Flutter"</span>, <span style={{ color: TOKENS.accent }}>"React"</span>, <span style={{ color: TOKENS.accent }}>"Node"</span>, <span style={{ color: TOKENS.accent }}>"Postgres"</span>],</span></div>
                <div className="np-line"><span className="np-lineno">6</span><span>{"}"}{cursorOn ? <span style={{ color: TOKENS.accent2 }}>▍</span> : <span style={{ opacity: 0 }}>▍</span>}</span></div>
              </div>
              <div style={{ padding: "4px 20px 22px", display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="np-btn np-btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}>
                  run projects()
                </a>
                <a className="np-btn np-btn-ghost" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
                  ↳ contact.sh
                </a>
              </div>
            </div>

          
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" ref={(el) => (sectionRefs.current.about = el)} style={{ marginTop: 100 }}>
          <div className="np-section-head">
            <span className="np-section-tag">02</span>
            <span className="np-section-title">about.md</span>
          </div>
          <div className="np-editor" style={{ padding: "26px 28px" }}>
            <p className="np-comment" style={{ fontFamily: TOKENS.mono, fontSize: 13, marginBottom: 14 }}>/**</p>
            <p style={{ fontFamily: TOKENS.mono, fontSize: 15, lineHeight: 1.9, color: TOKENS.text, margin: 0 }}>
              <span className="np-comment">&nbsp;* </span>
              I'm a Software Engineering student at Addis Ababa University (CTBE)
              building web and mobile products end to end — from Flutter and React
              interfaces to Node.js and PostgreSQL behind the scenes.
            </p>
            <p style={{ fontFamily: TOKENS.mono, fontSize: 15, lineHeight: 1.9, color: TOKENS.text, marginTop: 10 }}>
              <span className="np-comment">&nbsp;* </span>
              I like shipping things people actually use — reservation systems,
              ticketing platforms, and admin tools that hold up under real traffic.
            </p>
            <p className="np-comment" style={{ fontFamily: TOKENS.mono, fontSize: 13, marginTop: 14 }}>&nbsp;*/</p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" ref={(el) => (sectionRefs.current.skills = el)} style={{ marginTop: 100 }}>
          <div className="np-section-head">
            <span className="np-section-tag">03</span>
            <span className="np-section-title">skills.json</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {SKILLS.map((s) => (
              <div className="np-skill-card" key={s.group}>
                <div className="np-import">
                  <span className="kw">import</span> {"{"} {s.items.join(", ")} {"}"}
                  <br />
                  <span className="kw">from</span> <span className="str">'{s.group}'</span><span className="punc">;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" ref={(el) => (sectionRefs.current.projects = el)} style={{ marginTop: 100 }}>
          <div className="np-section-head">
            <span className="np-section-tag">04</span>
            <span className="np-section-title">projects/</span>
          </div>
          <div>
            {PROJECTS.map((p) => {
              const isOpen = openProject === p.name;
              return (
                <div key={p.name}>
                  <div
                    className={`np-file-row ${isOpen ? "is-open" : ""}`}
                    onClick={() => setOpenProject(isOpen ? null : p.name)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter") setOpenProject(isOpen ? null : p.name); }}
                  >
                    <span className="np-dot" style={{ background: p.color, width: 8, height: 8 }} />
                    <span className="np-file-name">
                      {p.name}<span className="np-file-ext">.{p.ext}</span>
                    </span>
                    <span className="np-file-lang">{p.lang}</span>
                  </div>
                  {isOpen && <p className="np-file-desc">{p.desc}</p>}
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" ref={(el) => (sectionRefs.current.contact = el)} style={{ marginTop: 100 }}>
          <div className="np-section-head">
            <span className="np-section-tag">05</span>
            <span className="np-section-title">contact.sh</span>
          </div>
          <div className="np-editor" style={{ padding: "26px 28px" }}>
            <p className="np-footer-prompt" style={{ marginBottom: 18 }}>
              <span style={{ color: TOKENS.accent2 }}>natanim@aau</span>
              <span style={{ color: TOKENS.faint }}>:~$</span> open --contact
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="np-btn np-btn-primary" href="mailto:ntnmsamuel@gmail.com">✉ email</a>
              <a className="np-btn np-btn-ghost" href="https://github.com" target="_blank" rel="noreferrer">↗ github</a>
              <a className="np-btn np-btn-ghost" href="https://linkedin.com" target="_blank" rel="noreferrer">↗ linkedin</a>
            </div>
          </div>
        </section>
      </div>

      <footer style={{ textAlign: "center", padding: "30px 0 50px", fontFamily: TOKENS.mono, fontSize: 12.5, color: TOKENS.faint }}>
        © {new Date().getFullYear()} natanim samuel — built with react
      </footer>
    </div>
  );
}