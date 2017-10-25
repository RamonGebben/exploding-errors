'use strict';
{
  const player = require('play-sound')({})

  const thingsToHandle = [
    'unhandledRejection',
    'uncaughtException',
  ];

  const explodingHandler = (err) => player.play(`${__dirname}/explode.mp3`);
  thingsToHandle.forEach(thing => process.on(thing, explodingHandler));
}
