import PaginaLayout from "./components/PaginaLayout";
import BotaoEvolucao from "./components/BotaoEvolucao";

export default function Home() {
  return (
    <PaginaLayout>
      <h1 style={{ fontSize: "2rem", marginBottom: "16px" }}>
        O AnimeLand mudou de casa!
      </h1>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "12px" }}>
        Para continuarmos trazendo as melhores notícias, reviews e conteúdos com
        a qualidade e velocidade que você merece, nós mudamos de casa.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "28px" }}>
        Toda a nossa equipe (e o seu conteúdo favorito) já está te esperando no
        novo portal.
      </p>
      <BotaoEvolucao label="Acessar novo portal" />
    </PaginaLayout>
  );
}
