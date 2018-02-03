# simplistic-persistent-world
Create a local, very simple persistent world with a Service Worker. Developed for Chrome browsers.

## Install
To build this project from source, you will need Node.js and npm to be installed on your machine.

```
npm install
```

## One-off build for Development
When you `npm install`, this will also build from `source` to `public` once, but if you change the code and want to build again:

```
npm run build:dev
```

## Run locally

To run locally, you could use the npm module http-server.

```
sudo npm install -g http-server
```

Once installed on your machine, you can cd into this directory and serve it with

```
http-server public/
```

You can then browse to http://localhost:8080

## Continuous building while developing
```
npm run build:watch
```
