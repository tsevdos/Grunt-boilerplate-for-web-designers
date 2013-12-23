//"use strict";

module.exports = function (grunt) {

    /*
        Grunt installation:
        -------------------
            npm install -g grunt-cli
            npm install -g grunt-init
            npm init (creates a `package.json` file)

        Project Dependencies:
        ---------------------
            npm install grunt --save-dev
            npm install load-grunt-tasks --save-dev
            npm install time-grunt --save-dev
            npm install grunt-contrib-jshint --save-dev
            npm install grunt-contrib-uglify --save-dev
            npm install grunt-contrib-sass --save-dev
            npm install grunt-contrib-imagemin --save-dev
            npm install grunt-contrib-htmlmin --save-dev
            npm install grunt-contrib-connect --save-dev
            npm install connect-livereload --save-dev
            npm install grunt-contrib-watch --save-dev

        Simple Dependency Install:
        --------------------------
            npm install (from the same root directory as the `package.json` file)

        Gem Dependencies:
        -----------------
            gem install image_optim
    */

    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({

        // Store your Package file so you can reference its specific data whenever necessary
        pkg: grunt.file.readJSON('package.json'),

        // configurable paths
        paths: {
            app: './app',
            dist: './public'
        },

        jshint: {
            files: ['Gruntfile.js',  '<%= paths.app %>/**/*.js'],
            options: {
                curly:   true,
                eqeqeq:  true,
                immed:   true,
                latedef: true,
                newcap:  true,
                noarg:   true,
                sub:     true,
                undef:   true,
                boss:    true,
                eqnull:  true,
                browser: true,

                globals: {
                    // AMD
                    module:     true,
                    require:    true,
                    requirejs:  true,
                    define:     true,

                    // Environments
                    console:    true,

                    // General Purpose Libraries
                    $:          true,
                    jQuery:     true,

                    // Testing
                    sinon:      true,
                    describe:   true,
                    it:         true,
                    expect:     true,
                    beforeEach: true,
                    afterEach:  true
                }
            }
        },

        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/js',
                    src: '**/*.js',
                    dest: './public/js'
                }]
            }
        },

        sass: {
            dev: {
                options: {
                    style: 'expanded',
					compass: true,
					loadPath: require('node-bourbon').includePaths
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/scss',
                    src: ['**/*.scss', '!**/_*.scss'],
                    dest: '<%= paths.app %>/css',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    style: 'compressed',
					compass: true,
					loadPath: require('node-bourbon').includePaths
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/scss',
					src: ['**/*.scss', '!**/_*.scss'],
                    dest: '<%= paths.dist %>/css',
                    ext: '.css'
                }]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= paths.dist %>/img'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    dot: false,
                    cwd: '<%= paths.app %>',
                    dest: '<%= paths.dist %>',
                    src: ['*.html']
                }]
            }
        },

        watch: {
            css: {
                files: ['Gruntfile.js', 'app/**/*.js', './app/scss/**/*.scss'],
                tasks: ['default']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['<%= paths.app %>/**/*.js', '<%= paths.app %>/**/*.html', '<%= paths.app %>/css/**/*.css']
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: './app',
                    livereload: true,
                    //keepalive: true
                }
            }
        },
        
		open: {
			dev : {
				path: 'http://localhost:8000'
			}
		}
        
    });

    // Default Task
    grunt.registerTask('default', [
		'jshint',
		'sass:dev',
		'watch'
	]);

    // Testing
    grunt.registerTask('test', [
		'jshint'
	]);

    // Release Task
    grunt.registerTask('release', [
		'htmlmin',
		'sass:dist',
		'uglify','imagemin'
	]);
    
    // Server Task
     grunt.registerTask('server', [
		'connect',
		'open',
		'watch'
	]);

};
