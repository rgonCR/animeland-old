import PaginaLayout from "./components/PaginaLayout";
import BotaoEvolucao from "./components/BotaoEvolucao";

export default function NotFound() {
  return (
    <PaginaLayout>
      <h1 style={{ fontSize: "3rem", marginBottom: "8px" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>
        Ops! Esta página mudou de endereço.
      </h2>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "12px" }}>
        O conteúdo que você está procurando não está mais aqui porque o
        AnimeLand passou por uma grande evolução e agora estamos em novo
        endereço.
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "28px" }}>
        Não se preocupe, nosso banco de dados inteiro foi migrado! Suas listas,
        animes favoritos e tudo o que você já gostava no AnimeLand continuam lá!
        Clique no botão abaixo para ir para a nova home e pesquise pelo seu
        artigo lá.
      </p>
      <BotaoEvolucao label="Acessar novo portal" />
    </PaginaLayout>
  );
}
