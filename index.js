var eejs = require('ep_etherpad-lite/node/eejs')
  , padManager = require('ep_etherpad-lite/node/db/PadManager')
  , api = require('ep_etherpad-lite/node/db/API')
  , express = require('ep_etherpad-lite/node_modules/express');

exports.expressCreateServer = function (hook_name, args, cb) {
  args.app.get('/list', function(req, res) {
    var render_args = {
      pads: []
    };
    padManager.listAllPads(function(null_value, pads){
      render_args.pads = pads.padIDs;
      res.send( eejs.require('ep_padlist/templates/pads.html', render_args) );
      cb();
    });
  });

  args.app.use('/list/static', express.static(__dirname + '/static'))
}

exports.indexWrapper = function (hook_name, args, cb) {
  args.content = args.content + '<br><br><div style="text-align:center;"><a href="/list">All Pads</a></div>';
  return cb();
}

