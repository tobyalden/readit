module.exports = function(app) {
  var express = require('express');
  var linksRouter = express.Router();

var links = [
  {
    id: 1,
    title: 'monkey drives car',
    url: "https://www.youtube.com/watch?v=nTdugYAOE9E",
    user: 1
  },

  {
    id: 2,
    title: 'man drives car into ocean',
    url: 'http://www.wesh.com/news/central-florida/volusia-county/car-filled-with-family-drives-into-ocean-in-daytona-beach-authorities-say/24804232',
    user: 1
  },

  {
    id: 3,
    title: "god DAMN that's a big monkey",
    url: "http://ak.picdn.net/shutterstock/videos/2105168/preview/stock-footage-portrait-of-the-big-old-thoughtful-monkey.jpg",
    user: 2
  }

];

var users = [
  {
    id: 1,
    name: "xXxSephirophD4nKL0RdxXx",
    karma: 9001,
    links: [1, 2]
  },
  {
    id: 2,
    name: "FunkyMonkee",
    karma: 21,
    links: [3]
  }
];

  linksRouter.get('/', function(req, res) {
    res.send({
      'links': links,
      'users': users
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
