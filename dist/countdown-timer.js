import { LitElement as c, html as r } from "lit";
import { property as s } from "lit/decorators.js";
var l = Object.defineProperty, m = (i, n, e, a) => {
  for (var t = void 0, o = i.length - 1, p; o >= 0; o--)
    (p = i[o]) && (t = p(n, e, t) || t);
  return t && l(n, e, t), t;
};
class d extends c {
  createRenderRoot() {
    return this;
  }
  render() {
    var n, e, a, t, o;
    return r`
      <style>
        .countdown-timer {
          margin: 32px 0;
          text-align: center;
        }

        .countdown-title {
          font-size: 30px;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--store-title);
        }

        .countdown-subtitle {
          font-size: 15px;
          color: var(--store-description);
          margin-bottom: 18px;
        }

        .countdown-btn {
          display: inline-flex;
          padding: 10px 20px;
          border-radius: 999px;
          background: var(--color-primary);
          color: #fff;
          font-weight: 700;
          text-decoration: none;
          margin-bottom: 28px;
          font-size: 14px;
        }

        .countdown-wrapper .s-count-down-list {
          display: flex !important;
          justify-content: center !important;
          gap: 14px !important;
          padding: 0 !important;
          margin: 0 !important;
          list-style: none !important;
        }

        .countdown-wrapper .s-count-down-item {
          min-width: 88px;
          padding: 16px 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,0,0,.05);
          display: flex !important;
          flex-direction: column;
          align-items: center;
        }

        .countdown-wrapper .s-count-down-item-value {
          font-size: 32px !important;
          font-weight: 800 !important;
          line-height: 1;
          color: var(--store-title) !important;
        }

        .countdown-wrapper .s-count-down-item-label {
          margin-top: 8px;
          font-size: 12px !important;
          font-weight: 600;
          color: var(--store-description) !important;
        }

        [data-theme="dark"] .countdown-title {
          color: #fff;
        }

        [data-theme="dark"] .countdown-subtitle {
          color: #aaa;
        }

        [data-theme="dark"] .countdown-wrapper .s-count-down-item {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
        }

        [data-theme="dark"] .countdown-wrapper .s-count-down-item-value {
          color: #fff !important;
        }

        [data-theme="dark"] .countdown-wrapper .s-count-down-item-label {
          color: #cbd5e1 !important;
        }

        @media (max-width: 768px) {
          .countdown-wrapper .s-count-down-list {
            gap: 8px !important;
          }

          .countdown-wrapper .s-count-down-item {
            min-width: 68px;
            padding: 12px 8px;
          }

          .countdown-wrapper .s-count-down-item-value {
            font-size: 24px !important;
          }
        }
      </style>

      <section class="countdown-timer">
        ${(n = this.config) != null && n.countdown_timer_title ? r`<h2 class="countdown-title">${this.config.countdown_timer_title}</h2>` : ""}

        ${(e = this.config) != null && e.countdown_timer_desc ? r`<p class="countdown-subtitle">${this.config.countdown_timer_desc}</p>` : ""}

        ${(a = this.config) != null && a.countdown_timer_btn && ((t = this.config) != null && t.countdown_timer_url) ? r`
                <a href="${this.config.countdown_timer_url}" class="countdown-btn">
                  ${this.config.countdown_timer_btn}
                </a>
              ` : ""}

        <div class="countdown-wrapper">
          <salla-count-down
            color="primary"
            boxed="false"
            size="md"
            labeled
            date="${(o = this.config) == null ? void 0 : o.countdown_timer_end_date}"
          ></salla-count-down>
        </div>
      </section>
    `;
  }
}
m([
  s({ type: Object })
], d.prototype, "config");
typeof d < "u" && d.registerSallaComponent("salla-countdown-timer");
export {
  d as default
};
