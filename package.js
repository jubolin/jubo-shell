Package.describe({
  name: "jubo:shell",
  summary: "Jubo shell package",
  version: "0.1.0",
  git: "https://github.com/jubolin/jubo-shell.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'jubo:lib@0.27.0', 
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'lib/server/jubo-shell.js',
  ], ['server']);
});

