/* ════════════════════════════════════════════════
   Clémence Creative Studio — site · Chrome
   Wordmark · SeasonSwitcher · Button · Nav · Footer
   ════════════════════════════════════════════════ */

function Icon({ name, size = 20, stroke = 1.6, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": stroke }, nameAttr: "data-lucide" });
    }
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: "inline-flex", ...style }} aria-hidden="true" />;
}

function Wordmark({ size = 1, onClick }) {
  return (
    <a href="#top" onClick={onClick} style={{ textDecoration: "none", lineHeight: 1, display: "block" }}>
      <div style={{ fontFamily: "var(--script)", color: "var(--fg-heading)", fontSize: `${32 * size}px`, lineHeight: 0.85 }}>Clémence</div>
      <div style={{ fontFamily: "var(--serif-display)", color: "var(--accent)", fontSize: `${15 * size}px`, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 3 }}>Creative Studio</div>
    </a>
  );
}

const SEASONS = [
  { key: "spring", label: "Printemps", dot: "#9BBF9F" },
  { key: "summer", label: "Été", dot: "#EF7C6F" },
  { key: "autumn", label: "Automne", dot: "#B85E2C" },
  { key: "winter", label: "Hiver", dot: "#0F1463" },
];

function SeasonSwitcher({ season, setSeason, compact }) {
  return (
    <div role="group" aria-label="Choisir la saison" style={{ display: "flex", gap: 4, alignItems: "center", background: "var(--surface)", border: "1px solid color-mix(in srgb, var(--border) 55%, transparent)", borderRadius: 999, padding: 4 }}>
      {SEASONS.map((s) => {
        const active = s.key === season;
        return (
          <button
            key={s.key}
            onClick={() => setSeason(s.key)}
            aria-pressed={active}
            title={s.label}
            className="ccs-season-btn"
            style={{
              display: "flex", alignItems: "center", gap: 7, cursor: "pointer",
              border: "none", borderRadius: 999, padding: compact ? "7px 10px" : "6px 13px",
              fontFamily: "var(--serif-body)", fontSize: 13, letterSpacing: "0.02em",
              background: active ? "var(--accent)" : "transparent",
              color: active ? "var(--on-accent)" : "var(--fg2)",
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: 999, background: s.dot, boxShadow: active ? "0 0 0 2px rgba(255,255,255,.45)" : "none", transition: "box-shadow var(--dur-base) var(--ease-soft)" }} />
            {!compact && s.label}
          </button>
        );
      })}
    </div>
  );
}

function Button({ children, variant = "primary", onClick, icon, type = "button" }) {
  const base = {
    fontFamily: "var(--serif-display)", fontSize: 19, letterSpacing: "0.02em",
    padding: "12px 28px", borderRadius: 999, cursor: "pointer", border: "1px solid transparent",
    display: "inline-flex", alignItems: "center", gap: 9, lineHeight: 1.1,
  };
  const variants = {
    primary: { background: "var(--accent)", color: "var(--on-accent)" },
    secondary: { background: "var(--ccs-sage-deep)", color: "var(--on-accent)" },
    ghost: { background: "transparent", color: "var(--fg-strong)", borderColor: "var(--border)" },
  };
  return (
    <button type={type} className={`ccs-btn ccs-btn--${variant}`} style={{ ...base, ...variants[variant] }} onClick={onClick}>
      {children}
      {icon && <span className="ccs-btn-arrow" style={{ display: "inline-flex" }}><Icon name={icon} size={17} /></span>}
    </button>
  );
}

function Nav({ season, setSeason, onContact, onNav }) {
  // [label, target, isExternalPage]
  const links = [
    ["Le studio", "top", false],
    ["Références", "references", false],
    ["Prestations", "prestations.html", true],
    ["La méthode", "methode", false],
    ["À propos", "apropos", false],
  ];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "color-mix(in srgb, var(--bg) 86%, transparent)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid color-mix(in srgb, var(--border) 28%, transparent)" }}>
      <nav className="wrap" style={{ padding: "15px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <Wordmark size={0.82} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
        <div className="ccs-navlinks" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map(([l, target, isPage]) => isPage ? (
            <a key={l} href={target} style={{ fontFamily: "var(--serif-body)", fontSize: 16, color: "var(--fg1)", textDecoration: "none" }} className="ccs-navlink">{l}</a>
          ) : (
            <a key={l} href={`#${target}`} onClick={(e) => { e.preventDefault(); onNav(target); }} style={{ fontFamily: "var(--serif-body)", fontSize: 16, color: "var(--fg1)", textDecoration: "none" }} className="ccs-navlink">{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div className="ccs-seasonwrap-nav"><SeasonSwitcher season={season} setSeason={setSeason} /></div>
          <Button variant="primary" onClick={onContact}>Travailler ensemble</Button>
        </div>
      </nav>
    </header>
  );
}

function Footer({ season, setSeason, onNav }) {
  return (
    <footer className={`gingham gingham--${season}`} style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)" }}>
        <div className="wrap grid-about" style={{ padding: "66px 40px 40px", display: "grid", gridTemplateColumns: "1.5fr 1fr 1.2fr", gap: 40 }}>
          <div>
            <Wordmark size={1.15} />
            <p className="p" style={{ marginTop: 18, fontSize: 16, maxWidth: "32ch", color: "var(--fg1)" }}>Direction artistique &amp; stratégie social pour les marques lifestyle artisanales. Installée à Paris. 🤍</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="eyebrow">Navigation</div>
            {[
              ["Le studio", "top", false],
              ["Mes références", "references", false],
              ["Les prestations", "prestations.html", true],
              ["La méthode", "methode", false],
              ["À propos", "apropos", false],
              ["On se parle", "contact", false],
            ].map(([l, target, isPage]) => isPage ? (
              <a key={l} href={target} style={{ fontFamily: "var(--serif-body)", color: "var(--fg1)", textDecoration: "none", fontSize: 16 }} className="ccs-navlink">{l}</a>
            ) : (
              <a key={l} href={`#${target}`} onClick={(e) => { e.preventDefault(); onNav(target); }} style={{ fontFamily: "var(--serif-body)", color: "var(--fg1)", textDecoration: "none", fontSize: 16 }} className="ccs-navlink">{l}</a>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="eyebrow">Me suivre</div>
            <a href="https://instagram.com/clemence.creativestudio" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: "var(--serif-body)", color: "var(--fg1)", textDecoration: "none", fontSize: 16 }} className="ccs-navlink"><Icon name="instagram" size={18} /> @clemence.creativestudio</a>
            <a href="https://pinterest.com/clemence.creativestudio" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: "var(--serif-body)", color: "var(--fg1)", textDecoration: "none", fontSize: 16 }} className="ccs-navlink"><Icon name="image" size={18} /> Pinterest</a>
            <a href="mailto:clemence.creativestudio@outlook.com" style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: "var(--serif-body)", color: "var(--fg1)", textDecoration: "none", fontSize: 16 }} className="ccs-navlink"><Icon name="mail" size={18} /> clemence.creativestudio@outlook.com</a>
          </div>
        </div>
        <div className="wrap stack-sm" style={{ padding: "20px 40px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, borderTop: "1px solid color-mix(in srgb, var(--border) 35%, transparent)" }}>
          <span className="caption">© 2026 Clémence Creative Studio · Paris · <span style={{ fontFamily: "var(--script)", fontSize: 18, color: "var(--fg-heading)" }}>fait avec soin</span></span>
          <SeasonSwitcher season={season} setSeason={setSeason} />
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, Wordmark, SeasonSwitcher, Button, Nav, Footer, SEASONS });
