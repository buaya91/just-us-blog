module.exports = function (grunt) {
  grunt.initConfig({
    'gh-pages': {
      options: {
        base: 'public',
      },
      src: ['**'],
    },
  });

  grunt.loadNpmTasks('grunt-gh-pages');
};
