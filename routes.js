module.exports = function(app){

  // root URL (/)
  app.get('/', function (req, res) {
    res.send('Hello World');
  });

  // healthpage
  app.get('/health', function (req, res) {
    res.set('System-Health', 'true').status(200).send('OK');
  });  

  // healthpage fail
  app.get('/health_fail', function (req, res) {
    res.set('System-Health', 'false').status(503).send('Fail');
  });

  // metadata
  app.get('/metadata', function (req, res) {
    var package_json = require('./package.json');
    require('child_process').exec('git rev-parse HEAD', function(err, stdout) {
      var commit = stdout.replace(/\n$/, '');
    console.log('Last commit hash on this branch is:', commit);
      console.log(package_json);

      response = {}
      response[package_json.name] = {
          "version": package_json.version,
          "description": package_json.description,
          "lastcommitsha": commit
      }

      res.status(200).send(JSON.stringify(response));
    });
  });

}
