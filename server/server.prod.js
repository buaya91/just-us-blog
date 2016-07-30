import express from 'express';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';
import request from 'request';
import httpProxy from 'http-proxy';

const config = {
  api: '/api',
  serverUrl: 'http://localhost:9000',
  wsServerUrl: 'ws://localhost:9000',
  aboutUs: 'Welcome to Just-Us Blog. Here\'s your host, Qingwei and Suhui, we write ' +
  'about relationship, programming, ' +
  'and everything that might interests us.',
  img: {
    sunrise: 'https://buaya91.github.io/just-us-blog/sunrise.jpg',
  },
};

const isProduction = true;

const app = express();
const proxy = httpProxy.createProxyServer({ target: config.wsServerUrl, ws: true });

//  RESTful API
const publicPath = path.resolve(__dirname);

app.use('/api', function (req, res) {
  var url = config.serverUrl + req.url;
  req
    .pipe(request(url))
    .on('error', function (err) {
      console.log('API error: ', err);
      res.status(404).end();
    })
    .pipe(res);
});
app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.static(publicPath));

const port = isProduction ? (process.env.PORT || 80) : 3000;

// this is necessary to handle URL correctly since client uses Browser History
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '', 'index.html'))
});

// We need to use basic HTTP service to proxy
// websocket requests from webpack
const server = http.createServer(app);

server.on('upgrade', function (req, socket, head) {
  console.log('proxied upgrade');
  proxy.ws(req, socket, head, function (err) {
    console.log('ws proxy error', err);
  });
});

server.listen(port, function (err, result) {
  if(err){
    console.log(err);
  }
  console.log('Server running on port ' + port);
}); 