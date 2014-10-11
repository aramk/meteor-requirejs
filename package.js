Package.describe({
  name: "aramk:requirejs",
  summary: "A file and module loader for JavaScript.",
  version: "2.1.14",
  git: "https://github.com/aramk/meteor-requirejs.git"
});

Package.onUse(function(api) {
  api.export(['define', 'require', 'requirejs'], 'client');
  api.export(['requirejs'], 'server');
  api.addFiles(['require.js'], ['client', 'server']);
});
