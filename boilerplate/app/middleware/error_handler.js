/* eslint-disable eol-last */
/* eslint-disable semi */
'use strict';

// 异常处理
module.exports = (option, app) => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      app.emit('error', err, this);
      const status = err.status || 500;
      let error;
      if (status === 500 && app.config.env === 'prod') {
        error = 'Internal Server Error';
      } else {
        error = err.message;
      }

      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = {
        Status: false,
        Message: error,
        Result: null,
      };
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = status;
    }
  }
}