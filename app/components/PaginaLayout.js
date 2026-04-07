import Image from "next/image";

export default function PaginaLayout({ children }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        color: "#fff",
      }}
    >
      <Image
        src="/logo.svg"
        alt="AnimeLand"
        width={216}
        height={39}
        priority
        style={{ marginBottom: "48px" }}
      />
      <section style={{ maxWidth: "720px", textAlign: "center" }}>
        {children}
      </section>
    </main>
  );
}
