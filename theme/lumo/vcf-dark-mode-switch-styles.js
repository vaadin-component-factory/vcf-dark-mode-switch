const theme = document.createElement('dom-module');
theme.id = 'vcf-dark-mode-switch-lumo';
theme.setAttribute('theme-for', 'vcf-dark-mode-switch');
theme.innerHTML = `
    <template>
      <style>
        :host {}
      </style>
    </template>
  `;
theme.register(theme.id);
