module.exports = {
    "extends": "stylelint-config-standard-scss",
    "rules": {
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "scss/dollar-variable-empty-line-before": null,
        "scss/no-global-function-names": null,
        "no-descending-specificity": null,
        "selector-class-pattern": [
            "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
            {
                "message": "Class names must be in kebab-case",
                "resolveNestedSelectors": true
            }
        ],
        "selector-id-pattern": [
            "^[a-z][a-zA-Z0-9]+$",
            {
                "message": "IDs must be in lowerCamelCase"
            }
        ],
        "function-url-quotes": "always",
        "block-no-empty": true,
        "color-no-invalid-hex": true,
        "comment-no-empty": true,
        "declaration-block-no-duplicate-properties": [
            true,
            {
                "ignore": [
                    "consecutive-duplicates-with-different-values"
                ]
            }
        ],
        "declaration-block-no-shorthand-property-overrides": true,
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction": true,
        "keyframe-declaration-no-important": true,
        "media-feature-name-no-unknown": true,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-empty-source": true,
        "no-invalid-double-slash-comments": true,
        "property-no-unknown": true,
        "property-no-vendor-prefix": [
            true,
            {
                "ignoreProperties": [
                    "user-select"
                ]
            }
        ],
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": true,
        "selector-type-no-unknown": true,
        "string-no-newline": true,
        "unit-no-unknown": true,
        "at-rule-empty-line-before": [
            "always",
            {
                "except": [
                    "blockless-after-same-name-blockless",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "color-hex-length": "short",
        "color-named": [
            "never",
            {
                "message": "Colour names must not be used. Use a hex value or a variable instead"
            }
        ],
        "comment-empty-line-before": [
            "always",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "stylelint-commands"
                ]
            }
        ],
        "comment-whitespace-inside": "always",
        "custom-property-empty-line-before": [
            "always",
            {
                "except": [
                    "after-custom-property",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment",
                    "inside-single-line-block"
                ]
            }
        ],
        "declaration-block-single-line-max-declarations": 1,
        "function-name-case": "lower",
        "length-zero-no-unit": true,
        "rule-empty-line-before": [
            "always-multi-line",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "selector-pseudo-element-colon-notation": "double",
        "selector-type-case": "lower",
        "value-keyword-case": [
            "lower",
            {
                "ignoreFunctions": [
                    "env"
                ],
                "ignoreKeywords": [
                    "BlinkMacSystemFont",
                    "Roboto",
                    "Arial",
                    "Helvetica",
                    "Georgia"
                ]
            }
        ],
        "unit-disallowed-list": [
            "em",
            {
                "ignoreProperties": {
                    "em": [
                        "margin",
                        "margin-top",
                        "margin-bottom",
                        "margin-left",
                        "margin-right",
                        "padding",
                        "padding-top",
                        "padding-bottom",
                        "padding-left",
                        "padding-right"
                    ]
                }
            }
        ]
    }
};
