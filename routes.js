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

}
