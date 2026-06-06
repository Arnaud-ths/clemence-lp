/* ════════════════════════════════════════════════
   Clémence Creative Studio — site · Sections
   Marquee · Services · Méthode · About · Testimonial · Contact
   ════════════════════════════════════════════════ */

const ABOUT_ART = {
  spring: `${ASSET}/illustrations/spring/tulipes.png`,
  summer: `${ASSET}/illustrations/summer/etoile-de-mer-rose.png`,
  autumn: `${ASSET}/illustrations/autumn/pomme-de-pin.png`,
  winter: `${ASSET}/illustrations/winter/bonhomme-de-neige.png`,
};

function SectionHead({ eyebrow, title, note }) {
  return (
    <div className="stack-sm" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 48 }}>
      <div className="reveal">
        <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>
        <h2 style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: "clamp(34px, 4.4vw, 52px)", margin: 0, lineHeight: 1.04, maxWidth: "20ch" }}>{title}</h2>
      </div>
      {note && <p className="reveal caption text-right-sm" style={{ "--d": "80ms", maxWidth: "22ch", textAlign: "right", fontSize: 14 }}>{note}</p>}
    </div>
  );
}

/* ── MARQUEE ── */
function Marquee({ dur = 28 }) {
  const items = ["Mode", "✿", "Bijou", "✦", "Décoration", "✿", "Édition", "✦"];
  const run = [...items, ...items, ...items];
  return (
    <div className="ccs-marquee-wrap" style={{ borderTop: "1px solid color-mix(in srgb, var(--border) 35%, transparent)", borderBottom: "1px solid color-mix(in srgb, var(--border) 35%, transparent)", overflow: "hidden", background: "var(--surface)" }}>
      <div className="ccs-marquee" style={{ "--marquee-dur": `${dur}s`, display: "flex", whiteSpace: "nowrap", width: "max-content" }}>
        {run.map((it, i) => {
          const deco = it === "✿" || it === "✦";
          return <span key={i} style={{ fontFamily: "var(--serif-display)", fontSize: deco ? 24 : 30, color: deco ? "var(--accent-soft)" : "var(--fg-heading)", padding: "16px 34px", letterSpacing: "0.04em" }}>{it}</span>;
        })}
      </div>
    </div>
  );
}

/* ── SERVICES / LES 4 FORMULES (vrais tarifs + images) ── */
const OFFERS = [
  { n: "01", slug: "premiers-pas",  t: "Les Premiers Pas",  d: "Audit complet, positionnement, 10 recommandations concrètes et call de restitution. Livré en 7 jours.", tag: "Ponctuel",  price: "270 € TTC",     img: `${ASSET}/lifestyle/work-cottagecore.jpg` },
  { n: "02", slug: "la-creative",   t: "La Créative",       d: "Charte visuelle, piliers de contenu, 1 mois de calendrier édito et 2 calls pour ancrer la méthode.",   tag: "Signature",  price: "dès 545 € TTC", img: `${ASSET}/lifestyle/clemence-robe-verte.jpg` },
  { n: "03", slug: "quatre-saisons", t: "Les Quatre Saisons", d: "Tout La Créative + 4 chartes saisonnières + bibliothèque réutilisable + accompagnement 12 mois.",     tag: "Engagement", price: "dès 880 € TTC", img: `${ASSET}/lifestyle/interieur-fleurs.jpg` },
  { n: "04", slug: "sur-mesure",    t: "La Sur-Mesure & Options", d: "Gestion complète, création photo/vidéo, Pinterest, refonte ou formation 1:1. Pour tout besoin hors cadre.", tag: "Devis", price: "TJ 450 € HT", img: `${ASSET}/lifestyle/clemence-vichy-livre.jpg` },
];

function Services() {
  return (
    <section id="offres" className="wrap" style={{ padding: "92px 40px" }}>
      <SectionHead eyebrow="Les prestations" title={<>Quatre formules, <span style={{ fontFamily: "var(--script)", color: "var(--accent)", fontSize: "1.12em", lineHeight: 0.9 }}>cousues main</span>.</>} note="Chaque formule s'adapte à ton rythme et à ton budget." />
      <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
        {OFFERS.map((o, i) => {
          const isSignature = o.slug === "la-creative";
          return (
            <article key={o.n} className="reveal ccs-card" style={{ "--d": `${i * 100}ms`, background: "var(--surface)", borderRadius: 24, overflow: "hidden", boxShadow: isSignature ? "0 16px 36px rgba(112,88,70,.18)" : "var(--shadow-soft)", border: isSignature ? "2px solid color-mix(in srgb, var(--accent) 50%, transparent)" : "1px solid color-mix(in srgb, var(--border) 45%, transparent)", display: "flex", flexDirection: "column", transition: "transform .4s cubic-bezier(.16,1,.4,1), box-shadow .4s ease", position: "relative" }}>
              {isSignature && <span style={{ position: "absolute", top: 12, right: 12, zIndex: 3, background: "var(--accent)", color: "var(--on-accent)", fontFamily: "var(--serif-body)", fontSize: 11, letterSpacing: "0.12em", padding: "5px 11px", borderRadius: 999, textTransform: "uppercase", boxShadow: "0 4px 12px rgba(0,0,0,.16)" }}>✿ Signature</span>}
              {/* Image au top */}
              <div style={{ aspectRatio: "4/3", overflow: "hidden", borderBottom: "1px solid color-mix(in srgb, var(--border) 35%, transparent)" }}>
                <img src={o.img} alt={`Illustration ${o.t}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .8s cubic-bezier(.2,.7,.2,1)" }} />
              </div>
              <div style={{ padding: "22px 22px 24px", display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--serif-display)", fontSize: 30, color: "var(--accent-soft)", lineHeight: 1 }}>{o.n}</span>
                  <span className="ccs-chip">{o.tag}</span>
                </div>
                <h3 style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: 22, margin: "2px 0 0", lineHeight: 1.05 }}>{o.t}</h3>
                <p className="p" style={{ fontSize: 14, lineHeight: 1.5, margin: 0 }}>{o.d}</p>
                <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px dashed color-mix(in srgb, var(--border) 60%, transparent)", display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: 21, lineHeight: 1.0, letterSpacing: "-0.01em" }}>{o.price}</span>
                  <a href={`prestations.html#${o.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--serif-body)", color: "var(--link)", textDecoration: "underline", textUnderlineOffset: 3, fontSize: 14 }} className="ccs-navlink">En savoir plus <span className="ccs-btn-arrow" style={{ display: "inline-flex" }}><Icon name="arrow-right" size={13} /></span></a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="reveal" style={{ "--d": "500ms", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginTop: 48 }}>
        <Button variant="primary" icon="arrow-right" onClick={() => window.location.href = "prestations.html"}>Voir toutes les prestations en détail</Button>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--serif-body)", fontSize: 15, color: "var(--fg2)" }}>
          <span style={{ fontFamily: "var(--script)", color: "var(--accent)", fontSize: 22, lineHeight: 0.9 }}>ou</span>
          <a href="#contact" onClick={(e) => { e.preventDefault(); window.ccsScrollTo("contact"); }} style={{ color: "var(--link)", textDecoration: "underline", textUnderlineOffset: 3 }}>réservez un appel découverte de 30 min · <em style={{ color: "var(--accent)", fontStyle: "normal" }}>gratuit</em></a>
        </div>
      </div>
    </section>
  );
}

/* ── RÉFÉRENCES CLIENTES ── */
const REFERENCES = [
  { name: "Caravane Paris", followers: "200K", sector: "Décoration d'intérieur", img: `${ASSET}/references/portfolio-00.jpg`, alt: "Étude de cas — Caravane Paris" },
  { name: "Mayrena",        followers: "20K",  sector: "Bijouterie",            img: `${ASSET}/references/portfolio-01.jpg`, alt: "Étude de cas — Mayrena" },
  { name: "Arlun Paris",    followers: "1,1K", sector: "Mode éco-responsable",  img: `${ASSET}/references/portfolio-02.jpg`, alt: "Étude de cas — Arlun Paris" },
];

function References() {
  return (
    <section id="references" className="wrap" style={{ padding: "92px 40px 80px" }}>
      <SectionHead
        eyebrow="Mes références"
        title={<>Des marques qui me <span style={{ fontFamily: "var(--script)", color: "var(--accent)", fontSize: "1.12em", lineHeight: 0.9 }}>font confiance</span>.</>}
        note={<>3 univers, 3 tons, une même exigence.<br />Voir les case studies complètes.</>}
      />
      <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
        {REFERENCES.map((r, i) => (
          <article key={r.name} className="reveal" style={{ "--d": `${i * 120}ms`, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ aspectRatio: "4/3", borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-card)", border: "1px solid color-mix(in srgb, var(--border) 50%, transparent)" }}>
              <img src={r.img} alt={r.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 10, paddingTop: 4 }}>
              <div>
                <h3 style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: 26, margin: 0, lineHeight: 1.05 }}>{r.name}</h3>
                <p className="p" style={{ marginTop: 4, fontSize: 14 }}>{r.sector}</p>
              </div>
              <span className="ccs-chip" style={{ whiteSpace: "nowrap" }}>{r.followers} abonnés</span>
            </div>
          </article>
        ))}
      </div>
      <div className="reveal" style={{ "--d": "420ms", display: "flex", justifyContent: "center", marginTop: 40 }}>
        <a href={`https://instagram.com/${"clemence.creativestudio"}`} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--serif-body)", color: "var(--link)", textDecoration: "underline", textUnderlineOffset: 4, fontSize: 16 }} className="ccs-navlink">Voir tous mes projets sur Instagram <span style={{ display: "inline-flex" }}><Icon name="arrow-right" size={15} /></span></a>
      </div>
    </section>
  );
}

/* ── MÉTHODE / COMMENT ÇA MARCHE ── */
const STEPS = [
  { n: "01", t: "Raconte-moi", d: "On démarre par ton histoire, tes valeurs, tes envies. Je creuse ton ADN avant tout." },
  { n: "02", t: "On pose la vibe", d: "Direction artistique, palette saisonnière, ton de voix. On définit ton univers ensemble." },
  { n: "03", t: "Je crée", d: "Posts, stories, calendrier. Tout est pensé pour ressembler à ta marque, pas à un template." },
  { n: "04", t: "On fait grandir", d: "On mesure, on ajuste, on garde le cap. Une présence qui s'installe dans la durée." },
];

function Methode() {
  return (
    <div className="gingham gingham--spring" id="methode" style={{ borderTop: "1px solid color-mix(in srgb, var(--border) 30%, transparent)", borderBottom: "1px solid color-mix(in srgb, var(--border) 30%, transparent)" }}>
      <div style={{ background: "color-mix(in srgb, var(--bg) 84%, transparent)" }}>
        <section className="wrap" style={{ padding: "88px 40px" }}>
          <SectionHead eyebrow="La méthode" title="Comment on travaille, étape par étape." note="Quatre temps, jamais pressés. Doux mais carré." />
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} className="reveal" style={{ "--d": `${i * 110}ms`, display: "flex", flexDirection: "column", gap: 12, paddingTop: 18, borderTop: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "var(--serif-display)", fontSize: 52, color: "var(--accent-soft)", lineHeight: 0.8 }}>{s.n}</span>
                <h3 style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: 26, margin: 0 }}>{s.t}</h3>
                <p className="p" style={{ fontSize: 16 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

/* ── ABOUT ── */
function About({ season }) {
  return (
    <div style={{ background: "var(--surface)", borderTop: "1px solid color-mix(in srgb, var(--border) 30%, transparent)", borderBottom: "1px solid color-mix(in srgb, var(--border) 30%, transparent)" }}>
      <section id="apropos" className="wrap" style={{ padding: "84px 40px" }}>
        <div className="grid-about" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 56, alignItems: "center" }}>
          <div className="reveal" style={{ position: "relative", aspectRatio: "4/5", borderRadius: 28, overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
            <img src={`${ASSET}/lifestyle/clemence-vichy-livre.jpg`} alt="Portrait de Clémence en robe vichy devant des fleurs blanches, Paris" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            {/* season-tinted gradient overlay for cohesion */}
            <div className={`gingham gingham--${season}`} style={{ position: "absolute", inset: 0, opacity: 0.18, mixBlendMode: "multiply" }} />
            {/* small floating illustration in corner */}
            <div className="float" style={{ "--float-dur": "8s", position: "absolute", right: 14, top: 14, padding: 8, background: "color-mix(in srgb, var(--surface) 92%, transparent)", borderRadius: 16, backdropFilter: "blur(6px)" }}>
              <img src={ABOUT_ART[season]} alt="Illustration aquarelle saisonnière" style={{ width: 56, height: "auto", filter: "drop-shadow(0 6px 12px rgba(112,88,70,.18))" }} />
            </div>
            <span style={{ position: "absolute", left: 18, bottom: 18, fontFamily: "var(--script)", fontSize: 26, color: "var(--surface)", textShadow: "0 2px 8px rgba(0,0,0,.35)", lineHeight: 0.9 }}>Clémence, Paris</span>
          </div>
          <div>
            <div className="reveal eyebrow" style={{ marginBottom: 16 }}>À propos de moi</div>
            <p className="reveal" style={{ "--d": "70ms", fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: "clamp(30px, 3.6vw, 42px)", lineHeight: 1.1, margin: 0 }}>
              Je m'appelle <span style={{ fontFamily: "var(--script)", fontSize: "1.2em" }}>Clémence</span>, et je crée des feeds qu'on a envie d'enregistrer.
            </p>
            <p className="reveal p" style={{ "--d": "140ms", marginTop: 22, fontSize: 18 }}>
              Cinq ans à façonner l'image de marques artisanales m'ont appris une chose : une jolie grille ne suffit pas. Il faut une <em style={{ color: "var(--fg-heading)" }}>vraie voix</em>, un rythme, et un univers reconnaissable au premier coup d'œil.
            </p>
            <div className="reveal grid-3" style={{ "--d": "220ms", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 34, paddingTop: 26, borderTop: "1px solid color-mix(in srgb, var(--fg2) 22%, transparent)" }}>
              {[["5 ans", "d'expérience"], ["+40", "marques accompagnées"], ["4", "univers saisonniers"]].map(([a, b]) => (
                <div key={a}>
                  <div style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: "clamp(30px, 4vw, 38px)", lineHeight: 1 }}>{a}</div>
                  <div className="caption" style={{ marginTop: 4 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── TESTIMONIAL ── */
function Testimonial() {
  return (
    <section className="wrap reveal" style={{ textAlign: "center", padding: "84px 40px" }}>
      <div style={{ fontFamily: "var(--script)", color: "var(--accent-soft)", fontSize: 70, lineHeight: 0.5 }}>“</div>
      <p style={{ fontFamily: "var(--serif-body)", fontStyle: "italic", color: "var(--fg-heading)", fontSize: "clamp(24px, 3.2vw, 32px)", lineHeight: 1.35, maxWidth: "24ch", margin: "0 auto" }}>
        Clémence a tout compris à notre univers en une seule réunion. Notre feed n'a jamais été aussi nous.
      </p>
      <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: 22 }}>Margaux L.</span>
        <span className="caption">Fondatrice · Maison de bijoux</span>
      </div>
    </section>
  );
}

/* ── CONTACT ── */
function Contact({ season }) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = React.useState(false);
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim();
  const submit = () => { setTouched(true); if (valid) setSent(true); };
  const field = (k, label, type, area, ph) => {
    const empty = touched && !String(form[k]).trim();
    return (
      <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        <span style={{ fontFamily: "var(--serif-body)", color: "var(--fg-strong)", fontSize: 14, letterSpacing: "0.03em" }}>{label}</span>
        {area ? (
          <textarea rows={4} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} className="ccs-field" placeholder={ph} style={empty ? { borderColor: "var(--ccs-summer-coral)" } : undefined} />
        ) : (
          <input type={type} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} className="ccs-field" placeholder={ph} style={empty ? { borderColor: "var(--ccs-summer-coral)" } : undefined} />
        )}
      </label>
    );
  };
  return (
    <div id="contact" className={`gingham gingham--${season}`} style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ background: "color-mix(in srgb, var(--bg) 78%, transparent)" }}>
        <section className="wrap" style={{ padding: "88px 40px" }}>
          <div className="grid-contact" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 16 }}>On se parle ?</div>
              <h2 style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: "clamp(34px, 4.4vw, 52px)", lineHeight: 1.05, margin: 0 }}>Raconte-moi ta marque.</h2>
              <p className="p" style={{ marginTop: 20, fontSize: 18, maxWidth: "34ch" }}>Première réponse sous 48 h, toujours. Pas de blabla, juste une vraie conversation sur ton univers et tes envies.</p>
            </div>
            <div className="reveal" style={{ "--d": "100ms", background: "var(--surface)", borderRadius: 28, padding: 34, boxShadow: "var(--shadow-card)", border: "1px solid color-mix(in srgb, var(--border) 45%, transparent)" }}>
              {sent ? (
                <div className="enter-bloom" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, padding: "28px 0" }}>
                  <Icon name="heart" size={40} stroke={1.4} style={{ color: "var(--accent)" }} />
                  <div style={{ fontFamily: "var(--script)", color: "var(--fg-heading)", fontSize: 44 }}>Merci !</div>
                  <p className="p" style={{ fontSize: 16, maxWidth: "26ch" }}>Ton message est parti. Je te réponds très vite, promis. 🤍</p>
                  <Button variant="ghost" onClick={() => { setSent(false); setTouched(false); setForm({ name: "", email: "", message: "" }); }}>Envoyer un autre</Button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {field("name", "Ton prénom", "text", false, "Ton prénom")}
                  {field("email", "Ton e-mail", "email", false, "bonjour@tamarque.fr")}
                  {field("message", "Ton projet", "text", true, "Raconte-moi ton projet…")}
                  {touched && !valid && <span className="caption" style={{ color: "var(--ccs-summer-coral)" }}>Un petit champ manque — remplis tout pour m'écrire. ✿</span>}
                  <Button variant="primary" icon="arrow-right" onClick={submit}>Envoyer mon message</Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ── INSTAGRAM TEASER (CTA block, illustrations brand) ── */
const IG_HANDLE = "clemence.creativestudio";
const IG_URL = `https://instagram.com/${IG_HANDLE}`;

function InstagramTeaser({ season }) {
  const seasonArt = {
    spring: `${ASSET}/illustrations/spring/tulipes.png`,
    summer: `${ASSET}/illustrations/summer/marguerite-creme.png`,
    autumn: `${ASSET}/illustrations/autumn/feuilles-erable-orange.png`,
    winter: `${ASSET}/illustrations/winter/fleur-lila.png`,
  };
  return (
    <section id="instagram" style={{ padding: "0" }}>
      <div className={`gingham gingham--${season || "spring"}`} style={{ borderTop: "1px solid color-mix(in srgb, var(--border) 30%, transparent)", borderBottom: "1px solid color-mix(in srgb, var(--border) 30%, transparent)" }}>
        <div style={{ background: "color-mix(in srgb, var(--surface) 82%, transparent)" }}>
          <section className="wrap" style={{ padding: "78px 40px", display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", gap: 32, alignItems: "center" }}>
            <div className="reveal float" style={{ "--float-dur": "8s", display: "grid", placeItems: "center" }}>
              <img src={seasonArt[season || "spring"]} alt="Illustration brand" style={{ maxWidth: 130, maxHeight: 160, filter: "drop-shadow(0 12px 22px rgba(112,88,70,.18))" }} />
            </div>
            <div className="reveal" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
              <div className="eyebrow">Suis le quotidien</div>
              <h2 style={{ fontFamily: "var(--serif-display)", color: "var(--fg-heading)", fontSize: "clamp(34px, 4.6vw, 56px)", margin: 0, lineHeight: 1.0 }}>
                Le feed, <span style={{ fontFamily: "var(--script)", color: "var(--accent)", fontSize: "1.18em", lineHeight: 0.9 }}>côté coulisses</span>.
              </h2>
              <p className="p" style={{ fontSize: 17, maxWidth: "42ch" }}>
                Posts, stories, projets en cours, inspirations saisonnières — le studio à ciel ouvert sur Instagram.
              </p>
              <div style={{ fontFamily: "var(--script)", color: "var(--fg-heading)", fontSize: 36, lineHeight: 1, marginTop: 4 }}>@{IG_HANDLE}</div>
              <Button variant="primary" icon="instagram" onClick={() => window.open(IG_URL, "_blank", "noopener")}>Me suivre sur Instagram</Button>
            </div>
            <div className="reveal float" style={{ "--float-dur": "9s", "--rot": "-6deg", display: "grid", placeItems: "center" }}>
              <img src={HERO_LOGO[season || "spring"]} alt="Monogramme CCS" style={{ maxWidth: 120, opacity: 0.95, filter: "drop-shadow(0 10px 20px rgba(112,88,70,.18))" }} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Marquee, Services, References, Methode, About, Testimonial, Contact, InstagramTeaser, ABOUT_ART, IG_HANDLE, IG_URL, OFFERS, REFERENCES });
