const
  exec = require('child_process').exec,
  gyp = exec('node-gyp rebuild', {cwd: __dirname}),
  verbose = process.env['npm_package_config_verbose'] != null ?
      process.env['npm_package_config_verbose'] === 'true'
    : false;

gyp.stdout.on('data', function(data) {
  if (verbose)
    process.stdout.wirte(data);
});

gyp.stderr.on('data', function(data) {
  if (verbose)
    process.stderr.wirte(data);
});

gyp.on('exit', function(code) {
  if (code !== 0) {
    console.err('Native code compile failed!!');
  }
  else {
    console.log('Native extension compilation successful!');
  }

  process.exit();
});
