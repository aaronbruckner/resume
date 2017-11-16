module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      main: ['build']
    },
    sass: {
      main: {
        files: {
          'build/modernTheme.css': 'css/modernTheme.scss'
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'html',
            src: '**',
            dest: 'build/'
          }
        ]
      }
    },
    watch: {
      main: {
        files: ['html/**', 'css/**'],
        tasks: ['build'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['build', 'watch:main']);
  grunt.registerTask('build', ['clean:main', 'sass:main', 'copy:main']);
};