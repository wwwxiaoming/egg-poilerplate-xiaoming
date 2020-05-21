/* eslint-disable no-unused-vars */
'use strict';

module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
};
