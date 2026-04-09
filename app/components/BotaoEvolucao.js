'use client';

const UTM = {
  utm_source: 'animeland',
  utm_medium: 'migration_button',
  utm_campaign: 'portal_antigo',
};

function montarUrlDestino() {
  const base = atob('aHR0cHM6Ly9hbmltZWxvdWQuY29tLmJy').replace(/\/$/, '');
  if (typeof window === 'undefined') return base + '/';

  const relative =
    window.location.pathname +
    window.location.search +
    window.location.hash;
  const url = new URL(relative, base + '/');
  const params = new URLSearchParams(url.search);
  for (const [key, value] of Object.entries(UTM)) {
    params.set(key, value);
  }
  url.search = params.toString();
  return url.href;
}

export default function BotaoEvolucao({ label = 'Acessar novo portal' }) {
  const irParaNovaCasa = () => {
    const novaUrl = montarUrlDestino();
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'click_animeloud_btn', {
        event_callback: () => window.location.assign(novaUrl),
        event_timeout: 800,
      });
      setTimeout(() => window.location.assign(novaUrl), 900);
      return;
    }

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
