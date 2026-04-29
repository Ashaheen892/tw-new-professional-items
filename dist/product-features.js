import { LitElement as c, html as a } from "lit";
import { property as g } from "lit/decorators.js";
var f = Object.defineProperty, m = (l, e, t, i) => {
  for (var r = void 0, s = l.length - 1, n; s >= 0; s--)
    (n = l[s]) && (r = n(e, t, r) || r);
  return r && f(e, t, r), r;
};
class d extends c {
  createRenderRoot() {
    return this;
  }
  normalizeItem(e) {
    const t = {};
    return Object.keys(e || {}).forEach((i) => {
      const r = i.includes(".") ? i.split(".").pop() : i;
      t[r] = e[i];
    }), t;
  }
  get items() {
    var e;
    return (((e = this.config) == null ? void 0 : e.general_items) || []).map((t) => this.normalizeItem(t));
  }
  get rightItems() {
    return this.items.length === 4 ? this.items.slice(0, 2) : this.items.slice(0, 3);
  }
  get leftItems() {
    return this.items.length <= 3 ? [] : this.items.length === 4 ? this.items.slice(2, 4) : this.items.slice(3, 6);
  }
  renderFeature(e) {
    var i;
    const t = (i = this.config) == null ? void 0 : i.general_rounded;
    return a`
      <div class="feature-item">
        ${e.image_icon ? a`
                <img
                  src="${e.image_icon}"
                  alt="${e.name}"
                  class="feature-item__image ${t ? "is-rounded" : ""}"
                  loading="lazy"
                />
              ` : a`
                <div class="feature-item__icon ${t ? "is-rounded" : ""}">
                  <i class="${e.icon}"></i>
                </div>
              `}

        <div class="feature-item__content">
          ${e.name ? a`<h3 class="feature-item__title">${e.name}</h3>` : ""}
          ${e.desc ? a`<p class="feature-item__desc">${e.desc}</p>` : ""}
        </div>
      </div>
    `;
  }
  render() {
    var e, t, i, r, s, n;
    return a`
      <style>
        .general-features {
          margin: 32px 0;
        }

        @media (min-width: 1024px) {
          .general-features {
            margin: 64px 0;
          }
        }

        .general-features__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 16px;
          text-align: center;
        }

        .general-features__header {
          margin-bottom: 32px;
        }

        .general-features__title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--store-title);
        }

        .general-features__desc {
          font-size: 15px;
          color: var(--store-description);
          max-width: 700px;
          margin: 0 auto;
        }

        .general-features__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .general-features__grid {
            grid-template-columns: 1fr auto 1fr;
          }
        }

        .features-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 20px;
          text-align: start;
        }

        .feature-item__image,
        .feature-item__icon {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .feature-item__image,
          .feature-item__icon {
            width: 112px;
            height: 112px;
          }
        }

        .feature-item__image {
          object-fit: cover;
        }

        .feature-item__icon {
          background: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 36px;
        }

        .is-rounded {
          border-radius: 9999px;
        }

        .feature-item__title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--store-title);
        }

        .feature-item__desc {
          font-size: 14px;
          line-height: 1.8;
          color: var(--store-description);
        }

        .general-features__hero {
          width: min(80vw, 360px);
          aspect-ratio: 1 / 1;
          overflow: hidden;
          margin: 0 auto;
        }

        .general-features__hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ================= DARK MODE ================= */

        [data-theme="dark"] .general-features__title,
        [data-theme="dark"] .feature-item__title {
          color: #fff;
        }

        [data-theme="dark"] .general-features__desc,
        [data-theme="dark"] .feature-item__desc {
          color: #aaa;
        }

        [data-theme="dark"] .feature-item__icon {
          background: var(--color-primary);
          color: #fff;
        }
      </style>

      <section class="general-features">
        <div class="general-features__container">

          ${(e = this.config) != null && e.general_title || (t = this.config) != null && t.general_desc ? a`
                  <div class="general-features__header">
                    ${(i = this.config) != null && i.general_title ? a`
                            <h2 class="general-features__title">
                              ${this.config.general_title}
                            </h2>
                          ` : ""}

                    ${(r = this.config) != null && r.general_desc ? a`
                            <p class="general-features__desc">
                              ${this.config.general_desc}
                            </p>
                          ` : ""}
                  </div>
                ` : ""}

          <div class="general-features__grid">

            <div class="features-column">
              ${this.rightItems.map((o) => this.renderFeature(o))}
            </div>

            ${(s = this.config) != null && s.general_image ? a`
                    <div
                      class="general-features__hero ${(n = this.config) != null && n.general_rounded ? "is-rounded" : ""}"
                    >
                      <img
                        src="${this.config.general_image}"
                        alt="${this.config.general_title || "Feature Image"}"
                        loading="lazy"
                      />
                    </div>
                  ` : ""}

            ${this.leftItems.length ? a`
                    <div class="features-column">
                      ${this.leftItems.map((o) => this.renderFeature(o))}
                    </div>
                  ` : ""}

          </div>
        </div>
      </section>
    `;
  }
}
m([
  g({ type: Object })
], d.prototype, "config");
typeof d < "u" && d.registerSallaComponent("salla-product-features");
export {
  d as default
};
