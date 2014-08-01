Package.on_use(function (api) {
  api.export(['define', 'require', 'requirejs'], ['client', 'server']);
  // TODO(aramk) Conflicts on the server prevent usage for now.
  api.add_files(['require.js'], ['client']);
});
