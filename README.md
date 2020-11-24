# &lt;vcf-dark-mode-switch&gt;

## Demo

https://vcf-dark-mode-switch.netlify.com/

## Installation

Install `vcf-dark-mode-switch`:

```sh
npm i @vaadin-component-factory/vcf-dark-mode-switch --save
```

## Usage

Once installed, import it in your application:

```js
import '@vaadin-component-factory/vcf-dark-mode-switch';
```

And use it:

```html
<vcf-dark-mode-switch></vcf-dark-mode-switch>
```

You can provide a label via a `label` attribute.

By toggling the dark mode switch:

- A `theme="dark"` attribute will be toggled on the `html` tag.
- The user's preference will be persisted on `localStorage` with a key `vcf-dark-mode`.
- On page refresh, the persisted user's preference will be applied.

**Note that the component applies dark mode preference from the OS level if the user's preference is not set.**

## Running demo

1. Fork the `vcf-dark-mode-switch` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-dark-mode-switch` directory, run `npm install` to install dependencies.

1. Run `npm start` to open the demo.

## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.

## License

Apache License 2.0