# nodejs-test
This project is a simple nodejs application with test tool for endpoints and integration with travis CI

## Dependencies
### Production Environment
To install dependencies
```bash
npm install --production
```
### Developer environment
```bash
npm install
```
Recommended to install nodemon for easier files reloading
```bash
npm install -g nodemon
```
after you can run
```bash
npm dev
```


## Developing
### Develop using local nodejs
If you would like to develop using a local installation of nodejs, you can do so by installing locally nodejs and npm
every time you save a change on the filesystem for the project, nodemon will reload the files and restart the server.
If you have nodemon installed (recommended)
```bash
npm dev
```
otherwise you can run the server
```bash
npm start
```

### Develop using docker
If you dont want to have a local nodejs/npm you can develop by using a docker container.
to start please make sure that you have docker installed and run
```bash
docker-compose -f docker-compose.yml
```
By running the command docker will mount the local folder inside the docker container so that when you change any files,
the server is reloaded using nodemon

## Usage
### Run with nodejs
you can run the server by running
```bash
npm start
```
### Run using docker (recommended)
```bash
docker-compose -f docker-compose-prod.yml
```

## Package
to package the application you can run one of the following
```bash
npm pack
```
or if you have installed npm-bundle
```bash
npm-bundle
```
## Release
if you are releasing it on github, you could use the release-it plugin
### Installation
```bash
npm install -g release-it
```
### Interactive release
```bash
npm release
```
### Testing release
```bash
npm release-dr
```
### Automating release
```bash
npm release-ni
```

## TODO
During build time generate the metadata.json file so it would not depend on the application running on a git repo
1) create metadata-template.json template
2) gather the information from package.json and generate the metadata file

## Next steps
The idea would be migrating it to SAM ( AWS Serverless Application Model ) by using AWS Lambda functions, and integrate it with AWS CodePipeline, AWS CodeCommit, Amazon API Gateway using AWS CodeStar.

## Contributing

1. Fork it ( http://github.com/<my-github-username>/nodejs-test )
2. Create your feature branch using gitflow standards (`git checkout -b feature/my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
