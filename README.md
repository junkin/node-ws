need to figure out good ways to test/unit test node websocket based client/server

much of this code is adapted from here
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
and
uses Jest for unit tests
with WS as the websocket abstraction
https://jestjs.io/
https://github.com/websockets/ws
docker build . -t $USERNAME/node-ws
