'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index_html.html');
  }

  // 鉴权的认证
  // async login() {
  //   const data = this.ctx.request.body;
  //   console.log(data);
  //   const token = this.app.jwt.sign({
  //     username: data.user,
  //   }, this.app.config.jwt.secret);
  //   this.ctx.body = token;
  // }

  // 鉴权的验证
  // async test_login() {
  //   const { ctx } = this;
  //   console.log(ctx.state.user);
  //   ctx.body = { code: 201, msg: '验证成功', data: ctx.state.user };
  // }
}

module.exports = HomeController;
