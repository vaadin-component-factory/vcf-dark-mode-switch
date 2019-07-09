import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';

class VcfDarkModeSwitch extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }

  static get is() {
    return 'vcf-dark-mode-switch';
  }

  static get version() {
    return '0.1.0';
  }

  static get properties() {
    return {};
  }

  connectedCallback() {
    super.connectedCallback();
  }
}

customElements.define(VcfDarkModeSwitch.is, VcfDarkModeSwitch);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfDarkModeSwitch = VcfDarkModeSwitch;

if (window.Vaadin.runIfDevelopmentMode) {
  window.Vaadin.runIfDevelopmentMode('vaadin-license-checker', VcfDarkModeSwitch);
}
