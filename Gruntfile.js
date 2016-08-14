module.exports = function (grunt) {
  grunt.initConfig({
    'gh-pages': {
      options: {
        base: 'server/public',
      },
      src: ['**'],
    },
  });

  grunt.loadNpmTasks('grunt-gh-pages');
};
