module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

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

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': users,
      'links': links
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
