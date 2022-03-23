'use strict'

const Controller = require('egg').Controller;

class UserController extends Controller{
    async getuser() {
        const { ctx } = this;
        ctx.body = await ctx.model.User.find({})
    }
}

module.exports = UserController;
