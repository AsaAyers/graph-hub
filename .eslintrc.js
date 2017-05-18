module.exports = {
    "extends": [
        "plugin:import/errors",
        "plugin:import/warnings",
        "react-app"
    ],
    "rules": {
        "no-unused-vars": [2, { "vars": "all", "args": "after-used", "varsIgnorePattern": "[iI]gnored" }],
        // "react/prop-types": 2,
        "no-console": 1,
        "no-warning-comments": 1,
        "prefer-const": 1,
        "no-trailing-spaces": [2],
        "import/order": ["error", {
            "newlines-between": "always",
            "groups": [
                "index",
                [ "builtin", "external" ],
                [ "sibling", "parent", "internal" ]
            ]
        }],
        "indent": [1, 4, { "SwitchCase": 1 }]
    }
}
