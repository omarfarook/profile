import express from 'express';
import next from 'next';
import compression from 'compression';
import routes from './routes';
import bodyParser from 'body-parser';

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express();
  server.use(compression());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.get('/download', function(req, res){
    console.log(__dirname)
    var file = __dirname + '/static/resume-mvm.pdf';
    res.download(file);
  })

  server.get('*', (req, res) => handle(req, res))
  
  // server
  server.use(handle).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
