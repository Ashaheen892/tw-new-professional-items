import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class GeneralFeatures extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  createRenderRoot() {
    return this;
  }

  normalizeItem(item: any) {
    const obj: Record<string, any> = {};

    Object.keys(item || {}).forEach(key => {
      const cleanKey = key.includes('.') ? key.split('.').pop()! : key;
      obj[cleanKey] = item[key];
    });

    return obj;
  }

  get items() {
    return (this.config?.general_items || []).map((item: any) => this.normalizeItem(item));
  }

  get rightItems() {
    return this.items.length === 4 ? this.items.slice(0, 2) : this.items.slice(0, 3);
  }

  get leftItems() {
    if (this.items.length <= 3) return [];

    return this.items.length === 4 ? this.items.slice(2, 4) : this.items.slice(3, 6);
  }

  renderFeature(item: any) {
    const rounded = this.config?.general_rounded;

    return html`
      <div class="feature-item">
        ${
          item.image_icon
            ? html`
                <img
                  src="${item.image_icon}"
                  alt="${item.name}"
                  class="feature-item__image ${rounded ? 'is-rounded' : ''}"
                  loading="lazy"
                />
              `
            : html`
                <div class="feature-item__icon ${rounded ? 'is-rounded' : ''}">
                  <i class="${item.icon}"></i>
                </div>
              `
        }

        <div class="feature-item__content">
          ${item.name ? html`<h3 class="feature-item__title">${item.name}</h3>` : ''}
          ${item.desc ? html`<p class="feature-item__desc">${item.desc}</p>` : ''}
        </div>
      </div>
    `;
  }

  render() {
    return html`
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

          ${
            this.config?.general_title || this.config?.general_desc
              ? html`
                  <div class="general-features__header">
                    ${
                      this.config?.general_title
                        ? html`
                            <h2 class="general-features__title">
                              ${this.config.general_title}
                            </h2>
                          `
                        : ''
                    }

                    ${
                      this.config?.general_desc
                        ? html`
                            <p class="general-features__desc">
                              ${this.config.general_desc}
                            </p>
                          `
                        : ''
                    }
                  </div>
                `
              : ''
          }

          <div class="general-features__grid">

            <div class="features-column">
              ${this.rightItems.map(item => this.renderFeature(item))}
            </div>

            ${
              this.config?.general_image
                ? html`
                    <div
                      class="general-features__hero ${this.config?.general_rounded ? 'is-rounded' : ''}"
                    >
                      <img
                        src="${this.config.general_image}"
                        alt="${this.config.general_title || 'Feature Image'}"
                        loading="lazy"
                      />
                    </div>
                  `
                : ''
            }

            ${
              this.leftItems.length
                ? html`
                    <div class="features-column">
                      ${this.leftItems.map(item => this.renderFeature(item))}
                    </div>
                  `
                : ''
            }

          </div>
        </div>
      </section>
    `;
  }
}
