import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import 'vcf-toggle-button';

class VcfDarkModeSwitch extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <vcf-toggle-button label="[[label]]" checked="[[darkMode]]" on-change="toggleDarkMode"></vcf-toggle-button>
    `;
  }

  static get is() {
    return 'vcf-dark-mode-switch';
  }

  static get version() {
    return '0.1.0';
  }

  static get properties() {
    return {
      label: String,
      darkMode: {
        type: Boolean,
        value: false
      }
    };
  }

  ready() {
    super.ready();
    this.darkMode = JSON.parse(localStorage.getItem('vcf-dark-mode'));
    this.applyDarkMode();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('vcf-dark-mode', this.darkMode);
    this.applyDarkMode();
  }

  applyDarkMode() {
    if (this.darkMode) {
      document.documentElement.setAttribute('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('theme');
    }
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
