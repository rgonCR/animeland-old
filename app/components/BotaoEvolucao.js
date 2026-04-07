'use client';

export default function BotaoEvolucao({ label = 'Acessar novo portal' }) {
  const irParaNovaCasa = () => {
    const novaUrl = atob('aHR0cHM6Ly9hbmltZWxvdWQuY29tLmJy');
    window.location.assign(novaUrl);
  };

  return (
    <button
      onClick={irParaNovaCasa}
      style={{
        padding: '12px 32px',
        backgroundColor: '#58DC00',
        color: '#000',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px',
      }}
    >
      {label}
    </button>
  );
}
