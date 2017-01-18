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
              "dist/touch.html": "src/touch.html",
              "dist/about/index.html": "src/about/index.html",
              "dist/contact/index.html": "src/contact/index.html"
            }
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

};
