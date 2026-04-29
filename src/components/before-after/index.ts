import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class BeforeAfter extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  createRenderRoot() {
    return this;
  }

  private updateSlider(value: number) {
    const container = this.querySelector('.before-after');
    const afterImg = this.querySelector('.after-img') as HTMLElement | null;
    const line = this.querySelector('.slider-line') as HTMLElement | null;
    const handle = this.querySelector('.slider-handle') as HTMLElement | null;

    if (!container || !afterImg || !line || !handle) return;

    const isRTL = getComputedStyle(container).direction === 'rtl';

    value = Math.max(0, Math.min(100, value));

    if (isRTL) {
      afterImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    } else {
      afterImg.style.clipPath = `inset(0 0 0 ${value}%)`;
    }

    line.style.left = `${value}%`;
    handle.style.left = `${value}%`;
  }

  firstUpdated() {
    const container = this.querySelector('.before-after');
    const slider = this.querySelector('.slider-range') as HTMLInputElement | null;

    if (!container || !slider) return;

    this.updateSlider(50);

    slider.addEventListener('input', e => {
      this.updateSlider(Number((e.target as HTMLInputElement).value));
    });

    container.addEventListener('mousemove', e => {
      const rect = container.getBoundingClientRect();
      const value = ((e.clientX - rect.left) / rect.width) * 100;
      this.updateSlider(value);
    });

    container.addEventListener('touchmove', e => {
      const rect = container.getBoundingClientRect();
      const value = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
      this.updateSlider(value);
    });
  }

  render() {
    return html`
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

        ${
          this.config?.title_main || this.config?.subtitle
            ? html`
                <div class="before-after-header">
                  ${
                    this.config?.title_main
                      ? html`
                          <h2 class="before-after-title">
                            ${this.config.title_main}
                          </h2>
                        `
                      : ''
                  }

                  ${
                    this.config?.subtitle
                      ? html`
                          <p class="before-after-subtitle">
                            ${this.config.subtitle}
                          </p>
                        `
                      : ''
                  }
                </div>
              `
            : ''
        }

        <div class="before-after" dir="auto">

          <div class="before-img">
            <img
              src="${this.config?.img_before}"
              class="before-img-inner"
              loading="lazy"
              alt="Before"
            />

            ${
              this.config?.img_before_text
                ? html`
                    <span class="badge badge-before">
                      ${this.config.img_before_text}
                    </span>
                  `
                : ''
            }
          </div>

          <div class="after-img">
            <img
              src="${this.config?.img_after}"
              class="after-img-inner"
              loading="lazy"
              alt="After"
            />

            ${
              this.config?.img_after_text
                ? html`
                    <span class="badge badge-after">
                      ${this.config.img_after_text}
                    </span>
                  `
                : ''
            }
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
