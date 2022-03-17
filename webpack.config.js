// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export 
module.exports = {
	// parcel index.html
	// 파일을 읽어들이기 시작하는 진입점 설정 
	entry: './js/main.js',

	// 결과물(번들)을 변환하는 설정
	output: {
		// path: path.resolve(__dirname, 'dist'), // resolve 는 첫번째 인수의 경로와 두번째 인수의 경로를 합쳐주는 메소드
		// // __dirname 는 현재 파일이 있는 경로 지칭
		// filename: 'main.js',
		// path 와 filename 생략해도 기본값 dist 로 생성 됨
		clean: true // 새로 build 할 시 기존내역 지우고 새로 생성
	},

	module: {
		rules:[
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				use: [
					'babel-loader'
				]
			}
		]
	},

	plugins: [
		new HtmlPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'static'}
			]
		})
	],
	devServer: {
		host: 'localhost'
	}
}