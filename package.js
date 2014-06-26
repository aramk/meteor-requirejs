Package.on_use(function (api) {
  api.export(['define', 'require', 'requirejs'], ['client', 'server']);
  api.add_files(['require.js'], ['client', 'server']);
});
