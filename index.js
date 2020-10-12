/* global exports, require */

const eejs = require('ep_etherpad-lite/node/eejs');
const padManager = require('ep_etherpad-lite/node/db/PadManager');

exports.expressCreateServer = (hookName, {app}, cb) => {
  app.get('/list', async (req, res) => {
    const pads = await padManager.listAllPads();
    res.send(eejs.require('ep_padlist2/templates/pads.html', {pads: pads.padIDs}));
  });
  return cb();
};

exports.eejsBlock_indexWrapper = (hookName, context, cb) => {
  context.content = context.content +
      '<div style="text-align:center; margin-top:2em;"><a href="list">All Pads</a></div>';
  return cb();
};
