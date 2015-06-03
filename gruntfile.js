'use strict';
module.exports = function(grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Local server for testing
        connect: {
            server: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        },

        // Compile any .sass files to css
        sass: {
            dev: {
                options: {
                    sourcemap: true
                },
                files: {
                    "src/styles/sass.min.css": "src/styles/sass/**/*.sass"
                }
            }
        },

        // Minify and concat all CSS files
        cssmin: {
            options: {
                report: 'min',
                sourceMap: true
            },
            target: {
                files: { 
                    'dist/app.min.css': ['src/styles/*.css']
                }
            }
        },

        // Compile any templates
        exec: {
            templatize: 'handlebars -e hbs -k -min -f src/templates/templates.js src/templates'
        },

        browserify: {
            js: {
                options: {
                    transform: ['hbsfy', 'babelify'],
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: 'src/js/app.js',
                dest: 'dist/app.js'
            }
        },

        uglify: {
            js: {
                src: ['dist/app.js'],
                dest: 'dist/app.min.js'
            }
        },

        copy: {
            images: {
                files: [
                    { expand: true, cwd: 'src/assets/images', src: '**', dest: 'dist/assets/images/' }
                ]
            },
            pages: {
                files: [
                    { expand: true, cwd: 'src/pages', src: '**', dest: 'dist/pages' }
                ]
            }
        }

    });
  
    grunt.registerTask('default', ['exec:templatize', 'browserify', 'uglify', 'sass', 'cssmin', 'copy']);
};
