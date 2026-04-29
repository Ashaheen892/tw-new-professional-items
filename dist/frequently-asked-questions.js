import { LitElement as q, html as o } from "lit";
import { property as g, state as x } from "lit/decorators.js";
var u = Object.defineProperty, p = (l, a, i, f) => {
  for (var t = void 0, e = l.length - 1, n; e >= 0; e--)
    (n = l[e]) && (t = n(a, i, t) || t);
  return t && u(a, i, t), t;
};
class s extends q {
  constructor() {
    super(...arguments), this.activeIndex = null;
  }
  createRenderRoot() {
    return this;
  }
  toggleAccordion(a) {
    this.activeIndex = this.activeIndex === a ? null : a;
  }
  render() {
    var i, f, t, e, n;
    const a = ((i = this.config) == null ? void 0 : i.faq_items) || [];
    return o`
      <style>
        .faq-section {
          padding: 32px 0;
        }

        .faq-container {
          max-width: 1280px;
          margin: auto;
          padding: 0 16px;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .faq-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--store-title);
        }

        .faq-subtitle {
          color: var(--store-description);
          line-height: 1.8;
        }

        .faq-layout {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: flex-start;
        }

        .faq-list {
          flex: 1;
          display: grid;
          gap: 16px;
          align-items: start;
        }

        .faq-list.two-columns {
          grid-template-columns: repeat(2, 1fr);
        }

        .faq-image {
          width: 35%;
        }

        .faq-image img {
          width: 100%;
          border-radius: 16px;
          display: block;
        }

        .faq-item {
          border: 1px solid var(--color-primary);
          background: var(--store-background-secondary);
          overflow: hidden;
        }

        .faq-item.rounded {
          border-radius: 14px;
        }

        .faq-button {
          width: 100%;
          padding: 8px 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--store-title);
          font-size: 15px;
          font-weight: 700;
          text-align: start;
        }

        .faq-question-text {
          flex: 1;
          line-height: 1.7;
          white-space: normal;
          word-break: break-word;
        }

        .faq-icon {
          width: 30px;
          height: 30px;
          min-width: 30px;
          border-radius: 999px;
          background: var(--color-primary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: .25s ease;
          font-size: 14px;
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
        }

        .faq-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: .3s ease;
        }

        .faq-item.active .faq-content {
          grid-template-rows: 1fr;
        }

        .faq-content-inner {
          overflow: hidden;
        }

        .faq-answer {
          padding: 0 20px 18px;
          font-size: 14px;
          line-height: 1.9;
          color: var(--store-description);
        }

        .faq-link {
          display: inline-block;
          margin: 0 20px 20px;
          padding: 10px 16px;
          border-radius: 10px;
          background: var(--color-primary);
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        @media (max-width: 992px) {
          .faq-layout {
            flex-direction: column-reverse;
          }

          .faq-image,
          .faq-list {
            width: 100%;
          }

          .faq-list.two-columns {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <section class="faq-section">
        <div class="faq-container">

          <div class="faq-header">
            <h2 class="faq-title">${(f = this.config) == null ? void 0 : f.faq_title}</h2>
            <p class="faq-subtitle">${(t = this.config) == null ? void 0 : t.faq_subtitle}</p>
          </div>

          <div class="faq-layout">

            ${(e = this.config) != null && e.faq_image ? o`
                    <div class="faq-image">
                      <img src="${this.config.faq_image}" alt="FAQ">
                    </div>
                  ` : ""}

            <div class="faq-list ${(n = this.config) != null && n.faq_two_columns ? "two-columns" : ""}">
              ${a.map(
      (r, d) => {
        var c;
        return o`
                <div class="
                  faq-item
                  ${this.activeIndex === d ? "active" : ""}
                  ${(c = this.config) != null && c.faq_rounded ? "rounded" : ""}
                ">
                  
                  <button
                    class="faq-button"
                    @click=${() => this.toggleAccordion(d)}
                  >
                    <span class="faq-question-text">
                      ${r.faq_question}
                    </span>

                    <span class="faq-icon">⌄</span>
                  </button>

                  <div class="faq-content">
                    <div class="faq-content-inner">
                      <div class="faq-answer">
                        ${r.faq_answer}
                      </div>

                      ${r.faq_answer_btntext ? o`
                        <a href="${r.faq_ansurl}" class="faq-link">
                          ${r.faq_answer_btntext}
                        </a>
                      ` : ""}
                    </div>
                  </div>

                </div>
              `;
      }
    )}
            </div>

          </div>
        </div>
      </section>
    `;
  }
}
p([
  g({ type: Object })
], s.prototype, "config");
p([
  x()
], s.prototype, "activeIndex");
typeof s < "u" && s.registerSallaComponent("salla-frequently-asked-questions");
export {
  s as default
};
