/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1647958369097_7935';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //mongoose
  config.mongoose = {
    client: {
      url: process.env.MONGO_URL || 'mongodb://localhost:27017/egg',
      options:{}
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
