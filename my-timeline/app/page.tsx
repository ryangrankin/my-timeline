
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <main>
      {/* HOMEPAGE */}
      <section
        style={{
          minHeight: "100vh",
          background: "#111318",
          color: "#f5f1e8",
          padding: "80px 6%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "#b9f76a",
            letterSpacing: "3px",
            fontSize: "12px",
          }}
        >
          RYAN RANKIN / PERSONAL ARCHIVE
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(65px, 11vw, 150px)",
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: "-4px",
            margin: "30px 0",
          }}
        >
          A life in
          <br />
          <em style={{ color: "#b9f76a" }}>progress.</em>
        </h1>

        <p
          style={{
            maxWidth: "480px",
            color: "#a7adb6",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          Part scrapbook. Part portfolio. A collection of places,
          people, projects, and experiences that have shaped who I am.
        </p>

        <a
          href="#timeline"
          style={{
            color: "#b9f76a",
            marginTop: "35px",
            fontSize: "12px",
            letterSpacing: "2px",
          }}
        >
          EXPLORE MY STORY ↓
        </a>
      </section>

      {/* INTERACTIVE HORIZONTAL TIMELINE */}
      <Timeline />
    </main>
  );
}
