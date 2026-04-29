import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

export default class FaqSection extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  @state()
  activeIndex: number | null = null;

  createRenderRoot() {
    return this;
  }

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  render() {
    const questions = this.config?.faq_items || [];

    return html`
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
            <h2 class="faq-title">${this.config?.faq_title}</h2>
            <p class="faq-subtitle">${this.config?.faq_subtitle}</p>
          </div>

          <div class="faq-layout">

            ${
              this.config?.faq_image
                ? html`
                    <div class="faq-image">
                      <img src="${this.config.faq_image}" alt="FAQ">
                    </div>
                  `
                : ''
            }

            <div class="faq-list ${this.config?.faq_two_columns ? 'two-columns' : ''}">
              ${questions.map(
                (item: any, index: number) => html`
                <div class="
                  faq-item
                  ${this.activeIndex === index ? 'active' : ''}
                  ${this.config?.faq_rounded ? 'rounded' : ''}
                ">
                  
                  <button
                    class="faq-button"
                    @click=${() => this.toggleAccordion(index)}
                  >
                    <span class="faq-question-text">
                      ${item.faq_question}
                    </span>

                    <span class="faq-icon">⌄</span>
                  </button>

                  <div class="faq-content">
                    <div class="faq-content-inner">
                      <div class="faq-answer">
                        ${item.faq_answer}
                      </div>

                      ${
                        item.faq_answer_btntext
                          ? html`
                        <a href="${item.faq_ansurl}" class="faq-link">
                          ${item.faq_answer_btntext}
                        </a>
                      `
                          : ''
                      }
                    </div>
                  </div>

                </div>
              `
              )}
            </div>

          </div>
        </div>
      </section>
    `;
  }
}
