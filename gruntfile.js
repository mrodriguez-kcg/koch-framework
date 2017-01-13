module.exports = function(grunt) {

  grunt.initConfig({

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
              "dist/index.html": "src/index.html"
            }
        }
    },



    watch: {
      // files: ['<%= jshint.files %>'],
      // tasks: ['jshint'],
      sass: {
        files: ['src/assets/css/*.scss', 'src/assets/css/style.scss'],
        tasks: ['newer:sass'],
        options : { nospawn : true, relative:true }
      },
      bake: {
        files: ['src/**/*.html', 'src/*.html', 'includes/*.html'],
        tasks: ['newer:bake', 'injector']
      }
    }

  });

  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.registerTask('default', ['jshint']);

};