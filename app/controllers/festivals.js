'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Festival = models.festival;

const authenticate = require('./concerns/authenticate');
const setUser = require('./concerns/set-current-user');
const setModel = require('./concerns/set-mongoose-model');

const index = (req, res, next) => {
  Festival.find()
    .then(festivals => res.json({
      festivals: festivals.map((e) =>
        e.toJSON({ virtuals: true, user: req.user })),
    }))
    .catch(next);
};

const show = (req, res) => {
  res.json({
    festival: req.festival.toJSON({ virtuals: true, user: req.user }),
  });
};

const create = (req, res, next) => {
  let festival = Object.assign(req.body.festival, {
    _owner: req.user._id,
  });
  Festival.create(festival)
    .then(festival =>
      res.status(201)
        .json({
          festival: festival.toJSON({ virtuals: true, user: req.user }),
        }))
    .catch(next);
};

const update = (req, res, next) => {
  delete req.body._owner;  // disallow owner reassignment.
  req.festival.update(req.body.festival)
    .then(() => res.sendStatus(204))
    .catch(next);
};

const destroy = (req, res, next) => {
  req.festival.remove()
    .then(() => res.sendStatus(204))
    .catch(next);
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Festival), only: ['show'] },
  { method: setModel(Festival, { forUser: true }), only: ['update', 'destroy'] },
], });
