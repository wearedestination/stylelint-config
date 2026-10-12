# Destination StyleLint Config

Defines a set of rules used by [StyleLint](https://stylelint.io/) to enforce our SCSS/CSS coding standards

## Installation

```sh
npm add @destination/stylelint-config --dev
```

## Usage

Add the following to your project's ruleset e.g. in `package.json`:

```json
{
  "stylelint": {
    "extends": "@destination/stylelint-config"
  }
}
```

For plain CSS projects (no preprocessor), extend the CSS config instead. It applies the same rules
on top of `stylelint-config-standard`, without the SCSS parser and plugin:

```json
{
  "stylelint": {
    "extends": "@destination/stylelint-config/css"
  }
}
```

## License

Released under the [MIT license](LICENSE)
