import "./globals.css";

export const metadata = {
  title: "AnimeLand",
  description: "O AnimeLand mudou de casa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
