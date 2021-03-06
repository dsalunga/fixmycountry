'use strict';

exports = module.exports = function(app, mongoose) {
  //embeddable docs first
  require('./schema/account/Note')(app, mongoose);
  require('./schema/account/Status')(app, mongoose);
  require('./schema/account/StatusLog')(app, mongoose);
  require('./schema/account/AccountCategory')(app, mongoose);

  //then regular docs
  require('./schema/account/User')(app, mongoose);
  require('./schema/account/Admin')(app, mongoose);
  require('./schema/account/AdminGroup')(app, mongoose);
  require('./schema/account/Account')(app, mongoose);
  require('./schema/account/LoginAttempt')(app, mongoose);

  // core
  require('./schema/core/Topic')(app, mongoose);
  require('./schema/core/Argument')(app, mongoose);
  require('./schema/core/Category')(app, mongoose);

  require('./schema/core/Page')(app, mongoose);
  require('./schema/core/Person')(app, mongoose);
  require('./schema/core/Incident')(app, mongoose);
  require('./schema/core/Project')(app, mongoose);
  require('./schema/core/Organization')(app, mongoose);
  require('./schema/core/Branch')(app, mongoose);
};
