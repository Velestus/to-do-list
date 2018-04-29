This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project was developped with usage of JSON-Server package.
I have also added Sass watcher to look for changes in CSS and convert SCSS files into CSS.

This generated little inconvenience - due to used solutions projects needs 3 tasks to run correctly.

First task:
$ json-server --watch db.json

Second task:
$ npm run sass

Third task:
$ npm start

Project sets fake REST API with simple json file and watches for HTTP requests to update it.
Endpoint for json server is http://localhost:3000/

As port 3000 was taken by JSON-Server, I have changed development port to 4200, what is being set during 'npm start' command