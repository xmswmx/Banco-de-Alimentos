// Copyright IBM Corp. 2015,2019. All Rights Reserved.
// Node module: generator-loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = function (app, cb) {
  var User = app.models.User;
  User.create([{
    username: 'admin',
    email: 'bob@projects.com',
    password: 'nimda'
  }], function (err, users) {
    if (err) return err;
    console.log('Created users:', users);
  });
  process.nextTick(cb);
};
