// Generated on 2014-03-28 using generator-webapp 0.4.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Project settings
        config: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        uglify: {
          options: {
            // the banner is inserted at the top of the output
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
          },
          dist: {
            files: {
              'build/app.min.js': ['<%= concat.dist.dest %>']
            }
          }
        },

        react: {
            files: {
              expand: true,
              cwd: 'src/',
              src: ['**/*.jsx'],
              dest: 'src/',
              ext: '.js'
            }
          },

        copy:{
          html: {
            src: 'src/index.html', dest: 'build/index.html'
          }
        },

        useminPrepare: {
          html: 'src/index.html',
          options: {
            dest: 'build'
          }
        },

        usemin: {
          html: ['build/{,*/}*.html'],
          css: ['build/{,*/}*.css'],
          options: {
            assetsDirs: ['build']
          }
        },

        cssmin: {
          minify: {
            expand: true,
            cwd: 'src',
            src: ['app.css',  '!*.min.css'],
            dest: 'build',
            ext: '.min.css'
          }
        },

        concat: {
          options: {
            // define a string to put between each file in the concatenated output
            separator: ';'
          },
          dist: {
            // the files to concatenate
            src: ['src/app.js'],
            // the location of the resulting JS file
            dest: 'build/app.js'
          }
        },

        rsync: {
          options: {
            args: ["--verbose"],
            exclude: [".git*", "node_modules", "robots.txt", ".htaccess", ".bowerrc", "bower.json", "package.json", "sshsettings.json", "Gruntfile.js", ".DS_Store", "bower_components/**"],
            recursive: true
          },
          prod: {
            options: {
              src: "./build/",
              dest: "/home/dhenein/public_html/labs/loop-mvp-spec/",
              host: "people",
              syncDestIgnoreExcl: true
            }
          }
        }

    });


    grunt.registerTask('build', ['react', 'copy:html', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);
    grunt.registerTask('deploy', ['build', 'rsync:prod']);

};
