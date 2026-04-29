import { LitElement as c, html as s } from "lit";
import { property as p } from "lit/decorators.js";
var g = Object.defineProperty, b = (n, e, o, i) => {
  for (var t = void 0, r = n.length - 1, a; r >= 0; r--)
    (a = n[r]) && (t = a(e, o, t) || t);
  return t && g(e, o, t), t;
};
class f extends c {
  createRenderRoot() {
    return this;
  }
  updateSlider(e) {
    const o = this.querySelector(".before-after"), i = this.querySelector(".after-img"), t = this.querySelector(".slider-line"), r = this.querySelector(".slider-handle");
    if (!o || !i || !t || !r) return;
    const a = getComputedStyle(o).direction === "rtl";
    e = Math.max(0, Math.min(100, e)), a ? i.style.clipPath = `inset(0 ${100 - e}% 0 0)` : i.style.clipPath = `inset(0 0 0 ${e}%)`, t.style.left = `${e}%`, r.style.left = `${e}%`;
  }
  firstUpdated() {
    const e = this.querySelector(".before-after"), o = this.querySelector(".slider-range");
    !e || !o || (this.updateSlider(50), o.addEventListener("input", (i) => {
      this.updateSlider(Number(i.target.value));
    }), e.addEventListener("mousemove", (i) => {
      const t = e.getBoundingClientRect(), r = (i.clientX - t.left) / t.width * 100;
      this.updateSlider(r);
    }), e.addEventListener("touchmove", (i) => {
      const t = e.getBoundingClientRect(), r = (i.touches[0].clientX - t.left) / t.width * 100;
      this.updateSlider(r);
    }));
  }
  render() {
    var e, o, i, t, r, a, l, d;
    return s`
      <style>
        .before-after-wrapper {
          margin: 32px 0;
        }

        .before-after-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .before-after-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--store-title);
        }

        .before-after-subtitle {
          font-size: 15px;
          color: var(--store-description);
        }

        .before-after {
          position: relative;
          width: 100%;
          max-width: 900px;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 16px;
          margin: 0 auto;
        }

        .before-img,
        .after-img,
        .before-img-inner,
        .after-img-inner {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .before-img-inner,
        .after-img-inner {
          object-fit: cover;
        }

        .after-img {
          z-index: 20;
          clip-path: inset(0 50% 0 0);
        }

        .slider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #fff;
          left: 50%;
          z-index: 30;
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,.15);
          z-index: 30;
          font-size: 18px;
          user-select: none;
        }

        .slider-range {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: ew-resize;
          z-index: 40;
        }

        .badge {
          position: absolute;
          top: 16px;
          padding: 8px 14px;
          border-radius: 999px;
          background: #fff;
          color: var(--color-primary);
          font-size: 13px;
          font-weight: 700;
          z-index: 25;
        }

        .badge-before {
          right: 16px;
        }

        .badge-after {
          left: 16px;
        }

        [data-theme="dark"] .before-after-title {
          color: #fff;
        }

        [data-theme="dark"] .before-after-subtitle {
          color: #aaa;
        }
      </style>

      <section class="before-after-wrapper">

        ${(e = this.config) != null && e.title_main || (o = this.config) != null && o.subtitle ? s`
                <div class="before-after-header">
                  ${(i = this.config) != null && i.title_main ? s`
                          <h2 class="before-after-title">
                            ${this.config.title_main}
                          </h2>
                        ` : ""}

                  ${(t = this.config) != null && t.subtitle ? s`
                          <p class="before-after-subtitle">
                            ${this.config.subtitle}
                          </p>
                        ` : ""}
                </div>
              ` : ""}

        <div class="before-after" dir="auto">

          <div class="before-img">
            <img
              src="${(r = this.config) == null ? void 0 : r.img_before}"
              class="before-img-inner"
              loading="lazy"
              alt="Before"
            />

            ${(a = this.config) != null && a.img_before_text ? s`
                    <span class="badge badge-before">
                      ${this.config.img_before_text}
                    </span>
                  ` : ""}
          </div>

          <div class="after-img">
            <img
              src="${(l = this.config) == null ? void 0 : l.img_after}"
              class="after-img-inner"
              loading="lazy"
              alt="After"
            />

            ${(d = this.config) != null && d.img_after_text ? s`
                    <span class="badge badge-after">
                      ${this.config.img_after_text}
                    </span>
                  ` : ""}
          </div>

          <div class="slider-line"></div>
          <div class="slider-handle">⟷</div>

          <input
            type="range"
            min="0"
            max="100"
            value="50"
            class="slider-range"
            aria-label="Before After Slider"
          />
        </div>
      </section>
    `;
  }
}
b([
  p({ type: Object })
], f.prototype, "config");
typeof f < "u" && f.registerSallaComponent("salla-before-after");
export {
  f as default
};
