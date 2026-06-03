# Destination StyleLint Config

Defines a set of rules used by [StyleLint](https://stylelint.io/) to enforce our SCSS/CSS coding standards

## Installation

```console
npm install stylelint @destination/stylelint-config --save-dev
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

### Working with Vue

You must add the `stylelint-config-recommended-vue` package:

```sh
npm install stylelint-config-recommended-vue --save-dev
```

Then update your stylelint config in package.json:

```json
"stylelint": {
    "extends": [
        "@destination/stylelint-config",
        "stylelint-config-recommended-vue"
    ]
}
```

## License

Released under the [MIT license](LICENSE)
