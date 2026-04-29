import { LitElement as w, html as f } from "lit";
import { property as v } from "lit/decorators.js";
var $ = Object.defineProperty, y = (s, i, e, r) => {
  for (var t = void 0, o = s.length - 1, n; o >= 0; o--)
    (n = s[o]) && (t = n(i, e, t) || t);
  return t && $(i, e, t), t;
};
class c extends w {
  createRenderRoot() {
    return this;
  }
  hexToRgba(i, e) {
    const r = i.replace("#", ""), t = parseInt(r, 16), o = t >> 16 & 255, n = t >> 8 & 255, a = t & 255;
    return `rgba(${o}, ${n}, ${a}, ${e})`;
  }
  render() {
    var e, r, t, o, n, a, l, p, d, g, b, h, u, m, x, _;
    const i = this.hexToRgba(((e = this.config) == null ? void 0 : e.bg_OverlayColor_min) || "#000000", +`0.${((r = this.config) == null ? void 0 : r.bg_OverlayOpacity_min) || 6}`);
    return f`
      <style>
        .offer-banner {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          min-height: 420px;
          border-radius: 24px;
          overflow: hidden;
        }

        .offer-banner__bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .offer-banner__overlay {
          position: absolute;
          inset: 0;
        }

        .offer-banner__content {
          position: relative;
          z-index: 2;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 32px;
        }

        .offer-title {
          font-size: 34px;
          font-weight: 800;
          color: ${((t = this.config) == null ? void 0 : t.title_color) || "#fff"};
          margin-bottom: 10px;
        }

        .offer-subtitle {
          font-size: 15px;
          color: ${((o = this.config) == null ? void 0 : o.subtitle_color) || "#fff"};
          margin-bottom: 26px;
          max-width: 650px;
          line-height: 1.8;
        }

        .offer-countdown {
          margin-bottom: 24px;
        }

        .offer-countdown .s-count-down-list {
          display: flex !important;
          justify-content: center;
          gap: 18px;
          padding: 0;
          margin: 0;
        }

        .offer-countdown .s-count-down-item {
          min-width: 72px;
          display: flex !important;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .offer-countdown .s-count-down-item:not(:last-child)::after {
          content: "";
          position: absolute;
          left: -9px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 28px;
          background: rgba(255,255,255,.2);
        }

        .offer-countdown .s-count-down-item-value {
          font-size: 30px !important;
          font-weight: 800 !important;
          color: ${((n = this.config) == null ? void 0 : n.title_color) || "#fff"} !important;
        }

        .offer-countdown .s-count-down-item-label {
          font-size: 12px !important;
          color: ${((a = this.config) == null ? void 0 : a.title_color) || "#fff"} !important;
          margin-top: 6px;
          opacity: .85;
        }

        .offer-btn {
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: .25s ease;
          background: ${((l = this.config) == null ? void 0 : l.btn_Bgcolor) || "#fff"};
          color: ${((p = this.config) == null ? void 0 : p.btn_Texcolor) || "#000"};
        }

        .offer-btn:hover {
          transform: translateY(-2px);
          background: ${((d = this.config) == null ? void 0 : d.btn_BgcolorHover) || "#000"};
          color: ${((g = this.config) == null ? void 0 : g.btn_TexcolorHover) || "#fff"};
        }

        @media (max-width: 768px) {
          .offer-banner,
          .offer-banner__content {
            min-height: 340px;
          }

          .offer-title {
            font-size: 24px;
          }

          .offer-subtitle {
            font-size: 13px;
          }

          .offer-countdown .s-count-down-item-value {
            font-size: 22px !important;
          }

          .offer-countdown .s-count-down-item {
            min-width: 60px;
          }
        }
      </style>

      <section class="offer-banner">

        <img
          class="offer-banner__bg"
          src="${(b = this.config) == null ? void 0 : b.offer_products_image}"
          alt="offer banner"
        />

        <div
          class="offer-banner__overlay"
          style="
            background:${i};
            backdrop-filter:${(h = this.config) != null && h.bg_blur_min ? "blur(4px)" : "none"};
          "
        ></div>

        <div class="offer-banner__content">

          ${(u = this.config) != null && u.title ? f`
                  <h2 class="offer-title">
                    ${this.config.title}
                  </h2>
                ` : ""}

          ${(m = this.config) != null && m.subtitle ? f`
                  <p class="offer-subtitle">
                    ${this.config.subtitle}
                  </p>
                ` : ""}

          ${(x = this.config) != null && x.offer_end_date ? f`
                  <div class="offer-countdown">
                    <salla-count-down
                      boxed="false"
                      labeled
                      date="${this.config.offer_end_date}"
                    ></salla-count-down>
                  </div>
                ` : ""}

          ${(_ = this.config) != null && _.buttonText ? f`
                  <a
                    href="${this.config.buttonUrl}"
                    class="offer-btn"
                  >
                    ${this.config.buttonText}
                  </a>
                ` : ""}

        </div>
      </section>
    `;
  }
}
y([
  v({ type: Object })
], c.prototype, "config");
typeof c < "u" && c.registerSallaComponent("salla-special-special-offer");
export {
  c as default
};
