/* ════════════════════════════════════════════════
   Clémence Creative Studio — site · Hero variations
   Three directions, switchable live via the Tweaks panel.
   ════════════════════════════════════════════════ */

const ASSET = "assets";

const HERO_ART = {
  spring: { src: `${ASSET}/illustrations/spring/muguet.png`, ratio: "portrait", alt: "Aquarelle de muguet" },
  summer: { src: `${ASSET}/illustrations/summer/coquillage-rose.png`, ratio: "land", alt: "Aquarelle de coquillage" },
  autumn: { src: `${ASSET}/illustrations/autumn/citrouilles.png`, ratio: "land", alt: "Aquarelle de citrouilles" },
  winter: { src: `${ASSET}/illustrations/winter/flocon-grand.png`, ratio: "square", alt: "Aquarelle de flocon de neige" },
};
const HERO_LOGO = {
  spring: `${ASSET}/logos/logo-forest.png`,
  summer: `${ASSET}/logos/logo-blush.png`,
  autumn: `${ASSET}/logos/logo-rust.png`,
  winter: `${ASSET}/logos/logo-navy.png`,
};

// Hero showcase: 1 portrait Clémence + 1 vraie référence cliente (Caravane Paris 200K)
const HERO_PORTFOLIO = [
  `${ASSET}/lifestyle/clemence-robe-verte.jpg`, // Clémence portrait robe verte balcon
  `${ASSET}/references/portfolio-00.jpg`,       // Caravane Paris case study (en backdrop)
];

/* headline split into rising words */
function RisingHeadline({ start = 120, step = 70, size }) {
  const words = ["Une", "présence", "digitale", "qui"];
  let d = start;
  return (
    <h1 style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: size, lineHeight: 1.0, margin: 0, letterSpacing: "-0.01em" }}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="rise-word" style={{ "--d": `${(d += step)}ms` }}>{w}</span>{" "}
        </React.Fragment>
      ))}
      <span className="rise-word" style={{ "--d": `${(d += step + 40)}ms`, fontFamily: "var(--script)", fontSize: "1.16em", color: "var(--accent)", lineHeight: 0.9 }}>te ressemble</span>
      <span className="rise-word" style={{ "--d": `${d}ms`, color: "var(--fg-heading)" }}>.</span>
    </h1>
  );
}

function HeroEyebrow() {
  return <div className="enter eyebrow" style={{ "--d": "60ms", marginBottom: 22 }}>Social Media Manager · Paris · depuis 5 ans</div>;
}

function HeroLede({ d }) {
  return (
    <p className="enter p" style={{ "--d": `${d}ms`, marginTop: 26, fontSize: 20, maxWidth: "46ch" }}>
      J'aide les marques lifestyle artisanales — mode, bijou, décoration, édition — à construire une présence Instagram cohérente et désirable, <em style={{ color: "var(--fg-heading)" }}>sans renier leur ADN</em>.
    </p>
  );
}

function HeroCTAs({ d, onContact }) {
  return (
    <div className="enter" style={{ "--d": `${d}ms`, display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
      <Button variant="primary" icon="arrow-right" onClick={onContact}>Travailler ensemble</Button>
      <Button variant="ghost" onClick={() => window.ccsScrollTo("offres")}>Voir mes offres</Button>
    </div>
  );
}

function FloatArt({ season, maxH, dur = "7s", rot = "0deg", delay = "650ms" }) {
  const art = HERO_ART[season];
  return (
    <div className="enter-bloom" style={{ "--d": delay, display: "grid", placeItems: "center", width: "100%" }}>
      <div className="float" style={{ "--float-dur": dur, "--rot": rot, display: "grid", placeItems: "center" }}>
        <img src={art.src} alt={art.alt} style={{ maxHeight: maxH, maxWidth: "100%", width: "auto", height: "auto", filter: "drop-shadow(0 16px 28px rgba(112,88,70,.20))" }} />
      </div>
    </div>
  );
}

/* ── A · ÉDITORIAL — split, illustration on a vichy panel ── */
function HeroEditorial({ season, onContact }) {
  return (
    <section id="top" className="wrap" style={{ padding: "72px 40px 64px" }}>
      <div className="grid-hero" style={{ display: "grid", gridTemplateColumns: "1.22fr 0.92fr", gap: 56, alignItems: "center" }}>
        <div>
          <HeroEyebrow />
          <RisingHeadline size="clamp(46px, 6.6vw, 78px)" />
          <HeroLede d={560} />
          <HeroCTAs d={660} onContact={onContact} />
        </div>
        <div className="hero-visual enter-bloom" style={{ "--d": "420ms" }}>
          <div className={`gingham gingham--${season}`} style={{ position: "relative", borderRadius: 32, aspectRatio: "4/5", display: "grid", placeItems: "center", boxShadow: "var(--shadow-card)", border: "1px solid var(--border)", overflow: "hidden" }}>
            <div className="float" style={{ "--float-dur": "8s", display: "grid", placeItems: "center", padding: 28 }}>
              <img src={HERO_ART[season].src} alt={HERO_ART[season].alt} style={{ maxHeight: 320, maxWidth: "76%", width: "auto", filter: "drop-shadow(0 18px 30px rgba(112,88,70,.22))" }} />
            </div>
            <img src={HERO_LOGO[season]} alt="Monogramme CCS" style={{ position: "absolute", right: 16, bottom: 14, width: 58, opacity: 0.9 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── B · CENTRÉE — symmetrical, floating art above, daisy accents ── */
function HeroCentered({ season, onContact }) {
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden" }}>
      <div className="wrap" style={{ padding: "44px 40px 72px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ height: 200, display: "grid", placeItems: "center", marginBottom: 6 }}>
          <FloatArt season={season} maxH={196} dur="6.5s" delay="200ms" />
        </div>
        <HeroEyebrow />
        <RisingHeadline size="clamp(44px, 7vw, 86px)" />
        <p className="enter p" style={{ "--d": "560ms", marginTop: 24, fontSize: 20, maxWidth: "52ch", textAlign: "center" }}>
          J'aide les marques lifestyle artisanales — mode, bijou, décoration, édition — à construire une présence Instagram cohérente et désirable, <em style={{ color: "var(--fg-heading)" }}>sans renier leur ADN</em>.
        </p>
        <div className="enter" style={{ "--d": "660ms", display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap", justifyContent: "center" }}>
          <Button variant="primary" icon="arrow-right" onClick={onContact}>Travailler ensemble</Button>
          <Button variant="ghost" onClick={() => window.ccsScrollTo("offres")}>Voir mes offres</Button>
        </div>
        <div className="enter-fade" style={{ "--d": "900ms", marginTop: 30, fontFamily: "var(--serif-display)", fontSize: 26, letterSpacing: "0.18em", color: "var(--accent-soft)" }}>✿ &nbsp; ✦ &nbsp; ✿</div>
      </div>
    </section>
  );
}

/* ── C · COLLAGE — asymmetric layered, art breaks the grid ── */
function HeroCollage({ season, onContact }) {
  const art = HERO_ART[season];
  return (
    <section id="top" className="wrap" style={{ padding: "60px 40px 64px" }}>
      <div className="grid-hero" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 40, alignItems: "center" }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <HeroEyebrow />
          <h1 style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: "clamp(48px, 7vw, 92px)", lineHeight: 0.98, margin: 0, letterSpacing: "-0.01em" }}>
            <span className="rise-word" style={{ "--d": "160ms", display: "block" }}>Une présence</span>
            <span className="rise-word" style={{ "--d": "250ms", display: "block" }}>digitale qui</span>
            <span className="rise-word" style={{ "--d": "360ms", display: "inline-block", fontFamily: "var(--script)", fontSize: "1.2em", color: "var(--accent)" }}>te ressemble.</span>
          </h1>
          <HeroLede d={520} />
          <HeroCTAs d={640} onContact={onContact} />
        </div>
        <div className="hero-visual" style={{ position: "relative", minHeight: 420 }}>
          {/* back vichy card, tilted */}
          <div className={`gingham gingham--${season} enter-bloom`} style={{ "--d": "360ms", position: "absolute", top: 24, right: 8, width: "78%", aspectRatio: "1/1", borderRadius: 28, transform: "rotate(-5deg)", boxShadow: "var(--shadow-soft)", border: "1px solid var(--border)" }} />
          {/* front cream card */}
          <div className="enter-bloom" style={{ "--d": "480ms", position: "absolute", left: 0, bottom: 18, width: "62%", aspectRatio: "3/4", background: "var(--surface)", borderRadius: 26, boxShadow: "var(--shadow-card)", border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)", transform: "rotate(3deg)", display: "grid", placeItems: "center" }}>
            <img src={HERO_LOGO[season]} alt="Monogramme CCS" style={{ width: "54%" }} />
          </div>
          {/* floating illustration breaking out on top */}
          <div className="enter-bloom" style={{ "--d": "600ms", position: "absolute", top: -14, right: -6, width: art.ratio === "portrait" ? "44%" : "62%" }}>
            <div className="float" style={{ "--float-dur": "6s", "--rot": "4deg" }}>
              <img src={art.src} alt={art.alt} style={{ width: "100%", filter: "drop-shadow(0 18px 30px rgba(112,88,70,.24))" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── D · PORTFOLIO — éditorial, Clémence + 2 réalisations ── */
function HeroPortfolio({ season, onContact }) {
  return (
    <section id="top" className="wrap" style={{ padding: "72px 40px 72px" }}>
      <div className="grid-hero" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.95fr", gap: 56, alignItems: "center" }}>
        <div>
          <HeroEyebrow />
          <h1 style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: "clamp(46px, 6.6vw, 80px)", lineHeight: 1.0, margin: 0, letterSpacing: "-0.01em" }}>
            <span className="rise-word" style={{ "--d": "120ms", fontFamily: "var(--script)", fontSize: "1.18em", color: "var(--accent)", lineHeight: 0.9 }}>Clémence</span>
            <span className="rise-word" style={{ "--d": "220ms", display: "block" }}>Social Media</span>
            <span className="rise-word" style={{ "--d": "320ms", display: "block" }}>Manager.</span>
          </h1>
          <p className="enter p" style={{ "--d": "500ms", marginTop: 26, fontSize: 20, maxWidth: "46ch" }}>
            J'aide les marques lifestyle artisanales — mode, bijou, décoration, édition — à construire une présence Instagram cohérente et désirable, <em style={{ color: "var(--fg-heading)" }}>sans renier leur ADN</em>.
          </p>
          <HeroCTAs d={620} onContact={onContact} />
        </div>
        <div className="hero-visual" style={{ position: "relative", minHeight: 520 }}>
          {/* Vichy backdrop card */}
          <div className={`gingham gingham--${season} enter-bloom`} style={{ "--d": "320ms", position: "absolute", top: 18, right: 0, width: "78%", aspectRatio: "4/5", borderRadius: 28, transform: "rotate(-3deg)", boxShadow: "var(--shadow-soft)", border: "1px solid var(--border)" }} />
          {/* Case study card (back-right, horizontal) — Caravane Paris pour social proof */}
          <div className="enter-bloom" style={{ "--d": "440ms", position: "absolute", top: 12, right: 0, width: "62%", aspectRatio: "4/3", borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-soft)", border: "3px solid var(--surface)", transform: "rotate(4deg)", zIndex: 2 }}>
            <img src={HERO_PORTFOLIO[1]} alt="Référence cliente — Caravane Paris (200K abonnés)" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          {/* Portrait Clémence (front-left, vertical, dominant) — robe verte balcon parisien */}
          <div className="enter-bloom" style={{ "--d": "580ms", position: "absolute", left: 0, bottom: 0, width: "62%", aspectRatio: "3/4", borderRadius: 22, overflow: "hidden", boxShadow: "var(--shadow-card)", border: "4px solid var(--surface)", transform: "rotate(-3deg)", zIndex: 3 }}>
            <img src={HERO_PORTFOLIO[0]} alt="Clémence en robe verte sur balcon parisien" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          {/* Monogram badge floating over */}
          <img src={HERO_LOGO[season]} alt="Monogramme CCS" style={{ position: "absolute", top: -12, left: "44%", width: 72, opacity: 0.95, zIndex: 4, transform: "rotate(-6deg)", filter: "drop-shadow(0 10px 18px rgba(112,88,70,.24))" }} />
        </div>
      </div>
    </section>
  );
}

function Hero({ variant, season, onContact }) {
  if (variant === "centered") return <HeroCentered season={season} onContact={onContact} />;
  if (variant === "collage") return <HeroCollage season={season} onContact={onContact} />;
  if (variant === "portfolio") return <HeroPortfolio season={season} onContact={onContact} />;
  return <HeroEditorial season={season} onContact={onContact} />;
}

Object.assign(window, { Hero, HERO_ART, HERO_LOGO, HERO_PORTFOLIO, ASSET });
