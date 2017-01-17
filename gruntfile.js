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

    watch: {
      // files: ['<%= jshint.files %>'],
      // tasks: ['jshint'],
      sass: {
        files: ['src/assets/css/*.scss', 'src/assets/css/style.scss'],
        tasks: ['newer:sass'],
        options : { nospawn : true, relative:true }
      }
    }

  });

  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.registerTask('default', ['jshint']);

};