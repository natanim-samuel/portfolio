import React from "react";

export default function Portfolio() {
  return (
    <div style={{
      minHeight:"100vh",
      background:"#0b0b0b",
      color:"#fff",
      fontFamily:"Arial, sans-serif",
      padding:"40px"
    }}>
      <header style={{maxWidth:1100,margin:"0 auto"}}>
        <h1 style={{fontSize:56,marginBottom:10}}>Natanim Samuel</h1>
        <p style={{color:"#bbb",fontSize:20}}>Software Engineering Student • Flutter • React • Node.js</p>

        <a href="#projects" style={{
          display:"inline-block",
          marginTop:30,
          padding:"12px 24px",
          background:"#C9A227",
          color:"#000",
          textDecoration:"none",
          borderRadius:8,
          fontWeight:"bold"
        }}>View Projects</a>
      </header>

      <section style={{maxWidth:1100,margin:"80px auto"}}>
        <h2>About Me</h2>
        <p>
          I'm a Software Engineering student passionate about building modern
          mobile and web applications using Flutter, React, Node.js and PostgreSQL.
        </p>
      </section>

      <section id="projects" style={{maxWidth:1100,margin:"60px auto"}}>
        <h2>Projects</h2>

        {[
          ["MADES","Home services platform"],
          ["Perfume","Luxury perfume ecommerce app"],
          ["Nees Cafe","Reservation application"],
          ["POARS","Administration system"]
        ].map(([title,desc])=>(
          <div key={title}
            style={{
              border:"1px solid #333",
              borderRadius:12,
              padding:20,
              marginBottom:16,
              background:"#161616"
            }}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </section>

      <section style={{maxWidth:1100,margin:"60px auto"}}>
        <h2>Skills</h2>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          {["Flutter","React","Node.js","Next.js","PostgreSQL","Kotlin","Git"]
          .map(s=>(
            <span key={s}
              style={{
                border:"1px solid #C9A227",
                padding:"8px 14px",
                borderRadius:20
              }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{
        textAlign:"center",
        paddingTop:50,
        color:"#888"
      }}>
        © {new Date().getFullYear()} Natanim Samuel
      </footer>
    </div>
  );
}
