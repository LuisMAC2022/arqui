/* @ds-bundle: {"format":3,"namespace":"MantenimientoAngelDesignSystem_78b68c","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"BeforeAfter","sourcePath":"components/evidence/BeforeAfter.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"TrustStrip","sourcePath":"components/marketing/TrustStrip.jsx"},{"name":"FolioLine","sourcePath":"components/records/FolioLine.jsx"},{"name":"StatusBadge","sourcePath":"components/records/StatusBadge.jsx"}],"sourceHashes":{"components/core/Button.jsx":"8a7457cd6412","components/core/Card.jsx":"53ea3ac372d5","components/evidence/BeforeAfter.jsx":"6b96d4268776","components/forms/Field.jsx":"e19c2d6f404d","components/marketing/ServiceCard.jsx":"035c75933c37","components/marketing/TrustStrip.jsx":"340f551e7dcf","components/records/FolioLine.jsx":"5d0a5f66986c","components/records/StatusBadge.jsx":"98fec35a1b8d","ui_kits/website/Homepage.jsx":"fb7a11c55442"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MantenimientoAngelDesignSystem_78b68c = window.MantenimientoAngelDesignSystem_78b68c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the single green CTA does the converting; everything else is quiet.
 * Variants: primary (patina green), secondary (outlined slate), ghost, danger.
 */
function Button({
  children,
  variant = "secondary",
  size = "md",
  full = false,
  disabled = false,
  type = "button",
  onClick,
  ...rest
}) {
  const pads = {
    sm: "8px 14px",
    md: "12px 20px",
    lg: "15px 26px"
  };
  const fontSizes = {
    sm: "15px",
    md: "17px",
    lg: "18px"
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: size === "sm" ? "40px" : "48px",
    width: full ? "100%" : "auto",
    padding: pads[size],
    fontFamily: "var(--font-sans)",
    fontSize: fontSizes[size],
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)"
  };
  const variants = {
    primary: {
      background: "var(--action)",
      color: "var(--text-on-accent)"
    },
    secondary: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--line-firm)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)"
    },
    danger: {
      background: "transparent",
      color: "var(--danger)",
      borderColor: "var(--danger)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a panel resting on plaster. Crisp, soft shadow, hairline border.
 */
function Card({
  children,
  padded = true,
  raised = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: raised ? "var(--shadow-raised)" : "var(--shadow-card)",
      padding: padded ? "var(--space-4)" : 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — a calm labeled input. Errors are information, not alarm:
 * brick red used once, helpfully ("Add a phone number so we can reach you").
 */
function Field({
  label,
  hint,
  error,
  type = "text",
  as = "input",
  value,
  onChange,
  placeholder,
  ...rest
}) {
  const id = React.useId();
  const Tag = as;
  const borderColor = error ? "var(--danger)" : "var(--border-input)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "var(--text-small)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    type: as === "input" ? type : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: as === "textarea" ? 4 : undefined,
    style: {
      font: "inherit",
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      background: "var(--surface-card)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: "12px 14px",
      minHeight: as === "textarea" ? "auto" : "48px",
      resize: as === "textarea" ? "vertical" : undefined,
      outline: "none",
      width: "100%"
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ServiceCard — names its scope, what's included, and honestly what's NOT.
 * "What we don't do" is a credibility move, not a weakness.
 */
function ServiceCard({
  title,
  summary,
  includes = [],
  excludes = [],
  price,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: "var(--space-4)",
      height: "100%"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h3)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-muted)"
    }
  }, summary)), /*#__PURE__*/React.createElement(List, {
    items: includes,
    label: "Incluye",
    marker: "\u2713",
    markerColor: "var(--patina)"
  }), excludes.length > 0 && /*#__PURE__*/React.createElement(List, {
    items: excludes,
    label: "No incluye",
    marker: "\u2014",
    markerColor: "var(--text-muted)",
    muted: true
  }), price && /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-3)",
      borderTop: "1px solid var(--border-card)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono)",
      color: "var(--text-strong)"
    }
  }, price));
}
function List({
  items,
  label,
  marker,
  markerColor,
  muted
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-caps",
    style: {
      fontSize: "var(--text-small)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "10px",
      fontSize: "var(--text-base)",
      color: muted ? "var(--text-muted)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: markerColor,
      fontWeight: 600,
      flex: "0 0 auto"
    }
  }, marker), /*#__PURE__*/React.createElement("span", null, it)))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustStrip.jsx
try { (() => {
/**
 * TrustStrip — credentials, RFC, insurance, years operating — presented quietly
 * and factually, with the data in documentary mono. Quiet facts read as true.
 */
function TrustStrip({
  facts = [],
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "var(--space-3)",
      ...rest.style
    }
  }, facts.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      padding: "var(--space-3) 0",
      borderTop: "1px solid var(--line-firm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-h3)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-strong)"
    }
  }, f.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-muted)"
    }
  }, f.label))));
}
Object.assign(__ds_scope, { TrustStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustStrip.jsx", error: String((e && e.message) || e) }); }

// components/records/FolioLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FolioLine — the signature documentary line, set in mono.
 * Dates, folio numbers, addresses, specs. This is the visual proof we keep records.
 */
function FolioLine({
  items = [],
  color = "muted",
  ...rest
}) {
  const colors = {
    muted: "var(--text-muted)",
    strong: "var(--text-strong)",
    onDark: "rgba(244,241,236,0.72)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "mono",
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono)",
      letterSpacing: "var(--tracking-mono)",
      color: colors[color]
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { FolioLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/records/FolioLine.jsx", error: String((e && e.message) || e) }); }

// components/evidence/BeforeAfter.jsx
try { (() => {
/**
 * BeforeAfter — the most persuasive asset on the site. A first-class component.
 * Paired images, same angle, dated, with a sentence of scope. A draggable
 * divider reveals before/after. Falls back to legible captions before images load.
 */
function BeforeAfter({
  before,
  after,
  scope,
  folio = [],
  height = 360
}) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const move = clientX => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = (clientX - r.left) / r.width * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseMove: e => e.buttons === 1 && move(e.clientX),
    onClick: e => move(e.clientX),
    style: {
      position: "relative",
      height,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      border: "1px solid var(--border-card)",
      background: "var(--stone)",
      cursor: "ew-resize",
      userSelect: "none"
    }
  }, /*#__PURE__*/React.createElement(Layer, {
    src: after,
    label: "Despu\xE9s",
    align: "right"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      width: `${pos}%`,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      width: ref.current?.offsetWidth || "100%"
    }
  }, /*#__PURE__*/React.createElement(Layer, {
    src: before,
    label: "Antes",
    align: "left",
    fixedWidth: ref.current?.offsetWidth
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: `${pos}%`,
      width: 2,
      background: "var(--near-white)",
      boxShadow: "0 0 0 1px rgba(28,43,58,0.25)",
      transform: "translateX(-1px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--near-white)",
      border: "1px solid var(--line-firm)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--slate-600)"
    }
  }, "\u2194"))), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-base)",
      color: "var(--text-body)"
    }
  }, scope), folio.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.FolioLine, {
    items: folio
  })));
}
function Layer({
  src,
  label,
  align,
  fixedWidth
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      width: fixedWidth || "100%",
      background: src ? `center/cover no-repeat url(${src})` : "var(--stone)",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: align === "right" ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      margin: "12px",
      padding: "4px 10px",
      background: "rgba(28,43,58,0.82)",
      color: "var(--plaster)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-sm)",
      borderRadius: "var(--radius-sm)"
    }
  }, label));
}
Object.assign(__ds_scope, { BeforeAfter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/evidence/BeforeAfter.jsx", error: String((e && e.message) || e) }); }

// components/records/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusBadge — quiet by default. Color is the EXCEPTION, never the rule.
 * Tones: neutral (the default for "OK"), resolved (green), attention (ochre), error (brick).
 */
function StatusBadge({
  children,
  tone = "neutral",
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--stone)",
      fg: "var(--text-muted)",
      dot: "var(--slate-600)"
    },
    resolved: {
      bg: "rgba(47,122,82,0.12)",
      fg: "var(--patina-700)",
      dot: "var(--patina)"
    },
    attention: {
      bg: "rgba(184,118,29,0.12)",
      fg: "var(--ochre)",
      dot: "var(--ochre)"
    },
    error: {
      bg: "rgba(178,58,46,0.10)",
      fg: "var(--brick)",
      dot: "var(--brick)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      padding: "5px 11px 5px 9px",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-sm)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-mono)",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: t.dot,
      flex: "0 0 auto"
    }
  }), children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/records/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
/* global React */
const {
  Button,
  FolioLine,
  StatusBadge,
  ServiceCard,
  TrustStrip,
  BeforeAfter,
  Field
} = window.MantenimientoAngelDesignSystem_78b68c;
const wrap = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 24px"
};
function Logo({
  onDark
}) {
  const ink = onDark ? "var(--plaster)" : "var(--slate-900)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "24",
    height: "24",
    rx: "3",
    fill: "none",
    stroke: ink,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 18 L13 6 L21 18",
    fill: "none",
    stroke: ink,
    strokeWidth: "1.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "18",
    r: "1.6",
    fill: "var(--patina)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 18,
      color: ink,
      letterSpacing: "-0.01em"
    }
  }, "Mantenimiento \xC1ngel"));
}
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--line-soft)",
      background: "var(--surface-page)",
      position: "sticky",
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, ["Servicios", "Trabajo", "Edificios", "Nosotros"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      textDecoration: "none",
      color: "var(--text-muted)",
      fontSize: 16,
      fontWeight: 500
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Solicitar visita"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingTop: 64,
      paddingBottom: 56,
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "neutral"
  }, "Atendemos CDMX y zona metropolitana"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-display)",
      margin: "20px 0 0",
      letterSpacing: "-0.015em",
      lineHeight: 1.08
    }
  }, "Lo revisamos, le decimos qu\xE9 encontramos, lo reparamos."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lead)",
      color: "var(--text-muted)",
      margin: "20px 0 0",
      maxWidth: 480
    }
  }, "Mantenimiento integral para casas y edificios. Trabajo documentado, sin sorpresas, con reporte fotogr\xE1fico de cada visita."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Solicitar visita de diagn\xF3stico"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Ver trabajos realizados")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(FolioLine, {
    items: ["Respondemos en menos de 24 h", "Visita de diagnóstico · $650"]
  }))), /*#__PURE__*/React.createElement(BeforeAfter, {
    before: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=70",
    after: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=70",
    scope: "Sellado de penetraci\xF3n en azotea, Torre B \u2014 eliminada la filtraci\xF3n sobre el pasillo del 4.\xBA piso.",
    folio: ["2026-03-14", "Folio MTO-0412", "Insurgentes 1247"],
    height: 380
  }));
}
function TrustBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-panel)",
      borderTop: "1px solid var(--line-soft)",
      borderBottom: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "32px 24px"
    }
  }, /*#__PURE__*/React.createElement(TrustStrip, {
    facts: [{
      value: "12 años",
      label: "Operando en CDMX"
    }, {
      value: "RFC disponible",
      label: "Factura al instante"
    }, {
      value: "$5M MXN",
      label: "Responsabilidad civil"
    }, {
      value: "< 24 h",
      label: "Tiempo de respuesta"
    }]
  })));
}
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "72px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-caps"
  }, "Servicios"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h1)",
      margin: "10px 0 0"
    }
  }, "Cada servicio dice qu\xE9 incluye \u2014 y qu\xE9 no."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-lead)",
      marginTop: 12
    }
  }, "Describimos la realidad, no vendemos todo a todos.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Azoteas e impermeabilizaci\xF3n",
    summary: "Revisi\xF3n, sellado e impermeabilizaci\xF3n de azoteas y bajadas pluviales.",
    includes: ["Inspección con reporte fotográfico", "Sellado de juntas y penetraciones", "Limpieza de coladeras"],
    excludes: ["Reconstrucción estructural de losa", "Trabajos eléctricos en azotea"],
    price: "Diagn\xF3stico \xB7 $650"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    title: "Plomer\xEDa y filtraciones",
    summary: "Detecci\xF3n y reparaci\xF3n de fugas, instalaci\xF3n y cambio de l\xEDneas.",
    includes: ["Localización de fuga", "Reparación con garantía", "Prueba de presión documentada"],
    excludes: ["Obra civil de albañilería mayor", "Tratamiento de cisternas"],
    price: "Diagn\xF3stico \xB7 $550"
  }), /*#__PURE__*/React.createElement(ServiceCard, {
    title: "El\xE9ctrico y alumbrado",
    summary: "Mantenimiento de instalaciones, tableros y alumbrado de \xE1reas comunes.",
    includes: ["Revisión de tablero", "Cambio de luminarias", "Reporte de cargas"],
    excludes: ["Acometida con CFE", "Plantas de emergencia"],
    price: "Diagn\xF3stico \xB7 $600"
  })));
}
function Contract() {
  const points = ["Calendario de visitas programadas — usted sabe cuándo vamos.", "Un solo contacto responsable, no una central rotativa.", "Reporte documentado por folio después de cada visita.", "Los problemas se atrapan temprano, así no hay urgencias."];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-ink)",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "72px 24px",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "label-caps",
    style: {
      color: "rgba(244,241,236,0.6)"
    }
  }, "Para administradores"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h1)",
      color: "var(--plaster)",
      margin: "12px 0 0"
    }
  }, "Contrato de mantenimiento recurrente"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lead)",
      color: "rgba(244,241,236,0.78)",
      marginTop: 14,
      maxWidth: 420
    }
  }, "Lo que compra un administrador es previsibilidad. Vendemos la ausencia de caos."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Agendar una llamada")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(FolioLine, {
    color: "onDark",
    items: ["Contrato ANUAL-228", "Próxima visita 2026-04-11", "Unidad Lomas de Chapultepec Secc. 4"]
  }))), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "grid",
      gap: 16
    }
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      borderTop: "1px solid rgba(244,241,236,0.14)",
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--patina)",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.4
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      color: "var(--plaster)",
      lineHeight: 1.5
    }
  }, p))))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "72px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      background: "var(--surface-card)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-h3)",
      lineHeight: 1.5,
      color: "var(--text-strong)"
    }
  }, "\u201CLlevamos tres a\xF1os con ellos. Lo que m\xE1s valoro: el reporte llega siempre, y nunca hemos tenido una urgencia que no hubieran anticipado en una visita anterior.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(FolioLine, {
    items: ["— Administrador, Condominio Roma 88", "Contrato desde 2023"]
  }))));
}
function Quote() {
  const [sent, setSent] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [err, setErr] = React.useState("");
  const submit = e => {
    e.preventDefault();
    if (!phone.trim()) {
      setErr("Agrega un teléfono para poder contactarte.");
      return;
    }
    setErr("");
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: "var(--surface-panel)",
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "72px 24px",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "label-caps"
  }, "Solicitar visita"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h1)",
      margin: "12px 0 0"
    }
  }, "Cu\xE9ntenos qu\xE9 est\xE1 pasando."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lead)",
      color: "var(--text-muted)",
      marginTop: 14,
      maxWidth: 380
    }
  }, "Solo pedimos lo necesario para responder. Sin compromiso."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      marginTop: 24,
      display: "grid",
      gap: 12
    }
  }, ["Respondemos en menos de 24 horas.", "La visita de diagnóstico cuesta $650.", "Después de enviar, recibe confirmación inmediata."].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      fontSize: 16,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--patina)",
      fontWeight: 700
    }
  }, "\xB7"), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      padding: 32
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "20px 0"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    tone: "resolved"
  }, "Solicitud recibida"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h2)"
    }
  }, "Gracias. Le respondemos en menos de 24 horas."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Guardamos su solicitud con folio. Le escribiremos al n\xFAmero que dej\xF3 para agendar la visita de diagn\xF3stico."), /*#__PURE__*/React.createElement(FolioLine, {
    items: ["Folio MTO-0517", "Recibido 2026-03-14 11:42", "Diagnóstico · $650"]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setPhone("");
    }
  }, "Enviar otra solicitud"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre",
    placeholder: "Su nombre"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Tel\xE9fono",
    placeholder: "55 0000 0000",
    value: phone,
    onChange: e => setPhone(e.target.value),
    error: err,
    hint: !err ? "Para poder contactarle" : undefined
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Direcci\xF3n o edificio",
    placeholder: "Calle, n\xFAmero, colonia"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "\xBFQu\xE9 necesita revisar?",
    as: "textarea",
    placeholder: "Describa el problema; entre m\xE1s detalle, mejor preparamos la visita."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    full: true
  }, "Enviar solicitud"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-small)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Al enviar acepta que le contactemos. No compartimos sus datos.")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-page)",
      borderTop: "1px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "40px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement(FolioLine, {
    items: ["Mantenimiento Ángel S.A. de C.V.", "RFC MAN960214AB3", "Tel. 55 1234 5678"]
  })));
}
function Homepage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustBand, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Contract, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(Quote, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.BeforeAfter = __ds_scope.BeforeAfter;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TrustStrip = __ds_scope.TrustStrip;

__ds_ns.FolioLine = __ds_scope.FolioLine;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

})();
