/** Barra superior — só em rotas de prévia; não vai para o site final do cliente. */
export function PreviewBar() {
  return (
    <div className="sd-preview-bar" role="note">
      <span className="sd-preview-bar-full">
        Prévia exclusiva · Stresser Digital · SEO técnico implementado (indexação ao publicar no
        domínio do cliente)
      </span>
      <span className="sd-preview-bar-short">Prévia exclusiva · Stresser Digital</span>
    </div>
  );
}
