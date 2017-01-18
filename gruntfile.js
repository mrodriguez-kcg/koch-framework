// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  "use strict";
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'dist/assets/css/app.css': 'src/assets/css/app.scss'
        }
      }
    },

    bake: {
        build: {
            options: {},
            files: {
              "dist/index.html": "src/index.html",
              "dist/modules-full-width.html": "src/modules-full-width.html",
              "dist/modules-headers.html": "src/modules-headers.html",
              "dist/modules-home.html": "src/modules-home.html",
              "dist/modules-partial-width.html": "src/modules-partial-width.html"
            }
        }
    },

    copy: {
      main: {
        files: [
          {src: ['src/assets/js/app.js'], dest: 'dist/assets/js/app.js'},
          {src: ['src/assets/js/vendor/foundation.js'], dest: 'dist/assets/js/vendor/foundation.js'},
          {src: ['src/assets/js/vendor/foundation.min.js'], dest: 'dist/assets/js/vendor/foundation.min.js'},
          {src: ['src/assets/js/vendor/jquery.js'], dest: 'dist/assets/js/vendor/jquery.js'},
          {src: ['src/assets/js/vendor/what-input.js'], dest: 'dist/assets/js/vendor/what-input.js'},
        ]
      }
    },

    watch: { 
      sass: {
        files: ['src/assets/css/*.scss'],
        tasks: ['sass'],
        options : { nospawn : true, relative:true }
      },
      bake: {
        files: ['src/**/*.html', 'src/*.html', 'includes/*.html'],
        tasks: ['bake']
      },
      copy: {
        files: ['src/assets/js/*.js', 'src/assets/js/vendor/*.js'],
        tasks: ['copy']
      }
    },

    touch: {
      target: ['*.html']
    }



     

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-touch');
  grunt.loadNpmTasks['grunt-contrib-copy'];
};
