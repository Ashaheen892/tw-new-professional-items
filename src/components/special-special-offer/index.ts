import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class SpecialSpecialOffer extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  createRenderRoot() {
    return this;
  }

  hexToRgba(hex: string, opacity: number) {
    const cleanHex = hex.replace('#', '');

    const bigint = parseInt(cleanHex, 16);

    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  render() {
    const overlayColor = this.hexToRgba(this.config?.bg_OverlayColor_min || '#000000', Number(`0.${this.config?.bg_OverlayOpacity_min || 6}`));

    return html`
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
          color: ${this.config?.title_color || '#fff'};
          margin-bottom: 10px;
        }

        .offer-subtitle {
          font-size: 15px;
          color: ${this.config?.subtitle_color || '#fff'};
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
          color: ${this.config?.title_color || '#fff'} !important;
        }

        .offer-countdown .s-count-down-item-label {
          font-size: 12px !important;
          color: ${this.config?.title_color || '#fff'} !important;
          margin-top: 6px;
          opacity: .85;
        }

        .offer-btn {
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: .25s ease;
          background: ${this.config?.btn_Bgcolor || '#fff'};
          color: ${this.config?.btn_Texcolor || '#000'};
        }

        .offer-btn:hover {
          transform: translateY(-2px);
          background: ${this.config?.btn_BgcolorHover || '#000'};
          color: ${this.config?.btn_TexcolorHover || '#fff'};
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
          src="${this.config?.offer_products_image}"
          alt="offer banner"
        />

        <div
          class="offer-banner__overlay"
          style="
            background:${overlayColor};
            backdrop-filter:${this.config?.bg_blur_min ? 'blur(4px)' : 'none'};
          "
        ></div>

        <div class="offer-banner__content">

          ${
            this.config?.title
              ? html`
                  <h2 class="offer-title">
                    ${this.config.title}
                  </h2>
                `
              : ''
          }

          ${
            this.config?.subtitle
              ? html`
                  <p class="offer-subtitle">
                    ${this.config.subtitle}
                  </p>
                `
              : ''
          }

          ${
            this.config?.offer_end_date
              ? html`
                  <div class="offer-countdown">
                    <salla-count-down
                      boxed="false"
                      labeled
                      date="${this.config.offer_end_date}"
                    ></salla-count-down>
                  </div>
                `
              : ''
          }

          ${
            this.config?.buttonText
              ? html`
                  <a
                    href="${this.config.buttonUrl}"
                    class="offer-btn"
                  >
                    ${this.config.buttonText}
                  </a>
                `
              : ''
          }

        </div>
      </section>
    `;
  }
}
