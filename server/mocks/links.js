module.exports = function(app) {
  var express = require('express');
  var linksRouter = express.Router();

var links = [
  {
    id: 1,
    title: 'monkey drives car',
    url: "https://www.youtube.com/watch?v=nTdugYAOE9E"
  },

  {
    id: 2,
    title: 'man drives car into ocean',
    url: 'http://www.wesh.com/news/central-florida/volusia-county/car-filled-with-family-drives-into-ocean-in-daytona-beach-authorities-say/24804232'
  }

];

  linksRouter.get('/', function(req, res) {
    res.send({
      'links': links
    });
  });

  linksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  linksRouter.get('/:id', function(req, res) {
    res.send({
      'links': {
        id: req.params.id
      }
    });
  });

  linksRouter.put('/:id', function(req, res) {
    res.send({
      'links': {
        id: req.params.id
      }
    });
  });

  linksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/links', linksRouter);
};
