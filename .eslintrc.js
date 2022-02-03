module.exports = {
	"env": {
		"node": true,
		"browser": true,
		"commonjs": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"ignorePatterns": ['dist/*'], // <<< ignore all files in test folder
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"semi": [
			"error",
			"never"
		],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
	}
}
