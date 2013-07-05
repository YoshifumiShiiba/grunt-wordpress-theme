module.exports = function( grunt ) {
	'use strict';

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
		uglify: {
			all: {
				files: {
					'assets/js/all.min.js': ['assets/js/all.js']
				},
				options: {
					banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
						' * <%= pkg.homepage %>\n' +
						' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
						' * Licensed GPLv2+' +
						' */\n',
					mangle: {
						except: ['jQuery']
					}
				}
			}
		},
		compass:   {
      dist: {
        options:{
          sassDir: 'assets/css/sass',
          cssDir: 'assets/css/css',
        }
      }
		},
    coffee: {
      compile: {
        files: {
          'assets/js/all.js': ['assets/js/coffee/*.coffee'] // 1:1 compile
        }
      }
    },
		cssmin: {
			options: {
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' * <%= pkg.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' */\n'
			},
      combine: {
        files: {
          'assets/css/all.css': ['assets/css/css/*.css']
        }
      },
		},
		watch:  {
			compass: {
				files: ['assets/css/sass/*.sass'],
				tasks: ['compass'],
				options: {
					debounceDelay: 500
				}
			},

			coffee: {
				files: ['assets/js/coffee/*.coffee'],
				tasks: ['coffee'],
				options: {
					debounceDelay: 500
				}
			},

			scripts: {
				files: ['assets/js/all.js'],
				tasks: ['uglify'],
				options: {
					debounceDelay: 500
				}
			}
		}
	} );

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask( 'default', 'watch');
	grunt.util.linefeed = '\n';
};
