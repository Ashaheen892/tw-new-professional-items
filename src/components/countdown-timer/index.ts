import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class CountdownTimer extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
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
        ${this.config?.countdown_timer_title ? html`<h2 class="countdown-title">${this.config.countdown_timer_title}</h2>` : ''}

        ${this.config?.countdown_timer_desc ? html`<p class="countdown-subtitle">${this.config.countdown_timer_desc}</p>` : ''}

        ${
          this.config?.countdown_timer_btn && this.config?.countdown_timer_url
            ? html`
                <a href="${this.config.countdown_timer_url}" class="countdown-btn">
                  ${this.config.countdown_timer_btn}
                </a>
              `
            : ''
        }

        <div class="countdown-wrapper">
          <salla-count-down
            color="primary"
            boxed="false"
            size="md"
            labeled
            date="${this.config?.countdown_timer_end_date}"
          ></salla-count-down>
        </div>
      </section>
    `;
  }
}
