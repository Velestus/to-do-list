To-Do Application
===

This project was bootstrapped with [Create React App].

![React logo](https://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png)

This project was developped with usage of **JSON-Server package**.
I have also added **Sass watcher** to look for changes in CSS and convert SCSS files into CSS.

This generated little inconvenience - due to used solutions projects needs 3 tasks to run _**correctly**_ during development. 
_If you want to just take a look at this project and not modify styling, you don't need second task_.

_First task:_
`$ json-server --watch db.json`

_Second task:_
`$ npm run sass`

_Third task:_
`$ npm start`

Project sets fake REST API with simple json file and watches for HTTP requests to update it.
Endpoint for json server is [localhost:3000].

As port 3000 was taken by JSON-Server, I have changed development to [localhost:4200], what is being set during `$ npm start` command.

<!-- My Referrences -->
[Create React App]: https://github.com/facebookincubator/create-react-app
[localhost:3000]: http://localhost:3000/
[localhost:4200]: http://localhost:4200/
