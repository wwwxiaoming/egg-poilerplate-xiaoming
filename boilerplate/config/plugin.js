/* eslint-disable eol-last */
/* eslint-disable semi */
'use strict';

/** @type Egg.EggPlugin */
/* Template rendering plugin */
exports.nunjucks = {
  enable: true,
  package: 'egg-view-ejs',
};

/* Cross domain request plugin */
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// 连接sql server数据库
// exports.mssql = {
//   enable: true,
//   package: 'xiaoming-mssql',
// };

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

// orm连接插件
// exports.sequelize = {
//   enable: true,
//   package: 'egg-sequelize',
// };