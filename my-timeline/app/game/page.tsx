
import ArcadeGame from "../../components/ArcadeGame";

export default function GamePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <ArcadeGame />
    </main>
  );
}
