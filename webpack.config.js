/**
 * External Dependencies
 */
const path = require( 'path' );

/**
 * WordPress Dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

module.exports = {
	...defaultConfig,
	...{
		entry: {
			main: path.resolve( process.cwd(), 'src/css', 'style.css' ),
			app: path.resolve( process.cwd(), 'src/js', 'app.js' ),
		},
	},
	plugins: [ ...defaultConfig.plugins ],
}