const path         = require( 'path' );
const webpack      = require( 'webpack' );
const TerserPlugin = require( 'terser-webpack-plugin' );

const is_production = (process.argv.indexOf( '-p' ) !== -1);

const configuration = {
	mode:    is_production ? 'production' : 'development',
	entry:   {
		'mf-js-form': [ path.join( __dirname, "src/mf-js-form.js" ) ]
	},
	output:  {
		path:          path.join( __dirname, "commonjs/" ),
		publicPath:    'commonjs/',
		filename:      '[name].js',
		chunkFilename: '[name].bundle.js'
	},
	module:  {
		rules: [
			{
				test:    /\.js$/,
				exclude: /node_modules\/(?!(mf-js)\/).*/,
				use:     [
					{
						loader:  'babel-loader',
						options: {
							presets: [
								[ '@babel/preset-env', {
									'modules': false,
									'targets': {
										'browsers': [ 'last 3 versions', 'safari >= 7' ]
									}
								} ]
							],
							plugins: [ '@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime' ]
						}
					}
				]
			}
		]
	},
	plugins: is_production ? [
		new TerserPlugin( {
							  sourceMap:     true,
							  terserOptions: {
								  ecma:     5,
								  beautify: false,
								  mangle:   true,
								  ie8:      false,
								  compress: { drop_console: true, warnings: false },
								  comments: false
							  }
						  } ),
		new webpack.DefinePlugin( { 'process.env.NODE_ENV': JSON.stringify( 'production' ) } ),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	] : [
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin( { 'process.env.NODE_ENV': JSON.stringify( 'development' ) } ),
	]
};

module.exports = configuration;

if ( !module.parent ) {
	const compiler = webpack( configuration );

	compiler.run( function ( err, stats ) {
		console.log( stats.hash );
	} );
}
