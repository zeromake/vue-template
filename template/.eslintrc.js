module.exports = {
    "parser": 'babel-eslint',
    "parserOptions": {
        ecmaVersion: 6,
        sourceType: 'module'
    },
	"extends": "vue",
    "env": {
        browser: true,
        amd: true,
        es6: true,
        node: true,
        mocha: true
    },
    "rules": {
        "comma-dangle": 1,
        "strict": 0,
        "quotes": [
            1, "single"
        ],
        "no-undef": 1,
        "global-strict": 0,
        "no-extra-semi": 1,
        "no-underscore-dangle": 0,
        "no-console": 1,
		"no-alert": 1,
        "no-unused-vars": 1,
        "no-unreachable": 1,
        "no-alert": 1,
		"indent": ["warn", 4],
		"space-before-function-paren": 0,
		"quotes": 0
    }
}
