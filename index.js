const rules = require("./rules.js");

module.exports = {
    "extends": "stylelint-config-standard-scss",
    "rules": {
        ...rules,
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "scss/dollar-variable-empty-line-before": null,
        "scss/dollar-variable-colon-space-after": null,
        "scss/no-global-function-names": null,
        "scss/operator-no-newline-after": null
    }
};
