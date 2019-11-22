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
    password: 'nimda',
    tipoDeUsuario: 'admin'
  }], function (err, users) {
    if (err) return err;
    console.log('Created users:', users);
  });
  
  /* Con estas lineas se activan los fixures, los quito porque resetean la base
  app.loadFixtures() .then(function() {console.log('Done!');})
				.catch(function(err) {console.log('Errors:', err);});
*/
  process.nextTick(cb);
};
