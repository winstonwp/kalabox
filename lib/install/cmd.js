/**
  * @file
  */

'use strict';

var _ = require('lodash');

var util = require('../util.js');
var path = require('path');
var shell = util.shell;

exports.buildInstallCmd = function(pkg, targetVolume) {
  // @todo: make cross platform
  var cmd = 'installer -verbose -pkg ' + pkg + ' -target ' + targetVolume;
  return cmd;
};

exports.buildDnsCmd = function(ips, dir, file) {
  // @todo: make cross platform
  // @todo: This should be in the provider somewhere
  var cmds = [];
  cmds.push(['mkdir -p', dir].join(' '));
  _.each(ips, function(ip) {
    cmds.push('echo \'"nameserver ' + ip + '"\' >> ' + path.join(dir, file));
  });
  return cmds;
};

exports.runCmdsAsync = function(cmds) {
  // @todo: this is jank and not sure if works on windows?
  var cmd = cmds.join(' && ');
  return shell.execAdminAsync(cmd);
};

exports.runCmds = function(cmds, callback) {
  // @todo: this is jank and not sure if works on windows?
  var cmd = cmds.join(' && ');
  shell.execAdmin(cmd, function(err, output) {
    callback(err, output);
  });
};