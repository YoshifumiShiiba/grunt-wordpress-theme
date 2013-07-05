/**
 * grunt-wordpress-theme
 * https://github.com/
 *
 * Copyright (c) 2013 Yoshifumi Shiiba
 * Licensed under the GPLv2+ License
 */

'use strict';

// Basic template description
exports.description = 'Make your WordPress theme.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after the question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template
exports.template = function( grunt, init, done ) {
	init.process( {}, [
		// Prompt for these values.
		init.prompt( 'title', 'WordPress Theme' ),
		{
			name   : 'prefix',
			message: 'PHP function prefix (alpha and underscore characters only)',
			default: 'wptheme'
		},
		init.prompt( 'description', 'This is Great theme!' ),
		init.prompt( 'homepage', 'http://wordpress.org/extend/themes' ),
		init.prompt( 'author_name' ),
		init.prompt( 'author_email' ),
		init.prompt( 'author_url' )
	], function( err, props ) {
		props.keywords = [];
		props.version = '0.1.0';
		props.devDependencies = {
			'grunt': '>0',
			'grunt-contrib-uglify': '>0',
			'grunt-contrib-cssmin': '>0',
			'grunt-contrib-watch': '>0',
			'grunt-contrib-coffee': '>0',
			'grunt-contrib-compass': '>0',
		};
		
		// Sanitize names where we need to for PHP/JS
		props.name = props.title.replace( /\s+/g, '-' ).toLowerCase();
		// Development prefix (i.e. to prefix PHP function names, variables)
		props.prefix = props.prefix.replace('/[^a-z_]/i', '').toLowerCase();
		// Development prefix in all caps (e.g. for constants)
		props.prefix_caps = props.prefix.toUpperCase();
		// An additional value, safe to use as a JavaScript identifier.
		props.js_safe_name = props.name.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
		// An additional value that won't conflict with NodeUnit unit tests.
		props.js_test_safe_name = props.js_safe_name === 'test' ? 'myTest' : props.js_safe_name;
		props.js_safe_name_caps = props.js_safe_name.toUpperCase();

		// Files to copy and process
		var files = init.filesToCopy( props );

		console.log( files );
		
		// Actually copy and process files
		init.copyAndProcess( files, props );
		
		// Generate package.json file
		init.writePackageJSON( 'package.json', props );
		
		// Done!
		done();
	});
};
