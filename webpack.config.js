var path    = require( "path" );
var webpack = require( "webpack" );

var production = (process.argv.indexOf( "--production" ) > -1);

module.exports = {
	cache:   {},
	entry:   {
		'dist/mf-js-form': [ "./src/mf-js-form.js" ],
	},
	output:  {
		libraryTarget: 'commonjs2',
		path:          __dirname,
		filename:      "[name].js"
	},
	module:  {
		loaders: [
			{
				test:    /\.js$/,
				exclude: /node_modules/,
				loader:  "babel?presets[]=es2015",
			},
			{
				test:   /\.json$/,
				loader: "json"
			}
		],
	},
	plugins: [ new webpack.DefinePlugin( { __PROD__: production } ) ].concat( production ? [ new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } ) ] : [] )
};
