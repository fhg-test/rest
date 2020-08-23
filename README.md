<div align="center">
  <h1>rest</h1>
  <p>API Client</p>

  <div>
    <a href="https://github.com/fhg-test/rest/commits" aria-label="Commitizen Friendly">
      <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
    </a>
    <a href="https://github.com/fhg-test/rest" aria-label="Prettier Code Style">
      <img src="https://img.shields.io/badge/code_style-prettier-brightgreen?style=flat-square">
    </a>
    <a href="https://github.com/fhg-test/rest/actions" aria-label="Lint Status">
      <img src="https://img.shields.io/github/workflow/status/fhg-test/rest/lint-source?style=flat-square&label=lint">
    </a>
    <a href="https://github.com/fhg-test/rest/actions" aria-label="Build Status">
      <img src="https://img.shields.io/github/workflow/status/fhg-test/rest/build-source?style=flat-square">
    </a>
    <a href="https://david-dm.org/fhg-test/rest" aria-label="Dependencies Status">
      <img src="https://img.shields.io/david/fhg-test/rest?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@fhg-test/rest" aria-label="NPM Version">
      <img src="https://img.shields.io/npm/v/@fhg-test/rest?color=brightgreen&style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@fhg-test/rest" aria-label="NPM Downloads">
      <img src="https://img.shields.io/npm/dm/@fhg-test/rest?style=flat-square">
    </a>
    <a href="https://github.com/fhg-test/rest/blob/master/LICENSE" aria-label="MIT License">
      <img src="https://img.shields.io/github/license/fhg-test/rest?color=brightgreen&style=flat-square">
    </a>
  </div>
</div>

## Installation

Use the package manager to install @fhg-test/rest

```bash
yarn add @fhg-test/rest
```

## Usage

```javascript
// initialize API Client
import rest from '@fhg-test/rest';
rest.init('http://localhost:9000/api');

// make a request
import * as rest from '@fhg-test/rest';
(async () => {
  const booking = await rest.bookings.get('123');
})();
```

## Authors

[Phat Pham](https://github.com/phatpham9)

## License

[MIT](https://github.com/fhg-test/rest/blob/master/LICENSE)
