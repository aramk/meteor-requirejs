Package.describe({
  name: 'aramk:requirejs',
  summary: 'A file and module loader for JavaScript.',
  version: '2.1.15_1',
  git: 'https://github.com/aramk/meteor-requirejs.git'
});

Package.onUse(function(api) {
  api.export(['require'], 'client');
  api.export(['define', 'requirejs'], ['client', 'server']);
  api.addFiles(['require.js', 'meteor.js'], ['client', 'server']);
});
