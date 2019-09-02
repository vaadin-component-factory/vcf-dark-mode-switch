import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import '@vaadin-component-factory/vcf-toggle-button';

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
    return '0.2.6';
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

    // get user preference from local storage
    const storedDarkMode = JSON.parse(localStorage.getItem('vcf-dark-mode'));
    if (storedDarkMode !== null) {
      this.darkMode = storedDarkMode;
    } else {
      // if user has no preferences, then try to set dark mode based on OS setting
      const darkMQ = window.matchMedia('(prefers-color-scheme: dark)');
      this.darkMode = darkMQ.matches;
      // listen to changes in OS setting for dark mode
      darkMQ.addListener(e => {
        // update dark mode if the user still doesn't have any preferences
        const storedDarkMode = JSON.parse(localStorage.getItem('vcf-dark-mode'));
        if (storedDarkMode === null) {
          this.darkMode = e.matches;
          this.applyDarkMode();
        }
      });
    }
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
