module.exports = {
	env: {
		// 코드 검사에 관한 설정 
		browser: true,
		node: true
	},
	extends: [
		// vue 
		// 'plugin:vue/vue3-essential', // Lv1
		'plugin:vue/vue3-strongly-recommended', // Lv2
		// 'plugin:vue/vue3-recommended', // Lv3

		//js
		'eslint:recommended'
		// 코드 규칙 설정
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		"vue/html-closing-bracket-newline": 
		// 닫히는 > 태그에 한줄,멀티라인 적용
		["error", {
			"singleline": "never",
			"multiline": "never"
		}],
		"vue/html-self-closing": ["error", {
			// 슬래시 / 로 마무리 적용 설정
			"html": {
				"void": "always",
				"normal": "never",  // 일반 태그 self-closing 사용 하지 않아도 됨 으로 설정
				"component": "always"
			},
			"svg": "always",
			"math": "always"
		}]
	}
}