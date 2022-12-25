const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'node js express api for final project',
    version,
  },
  servers: [
    {
      url: `https://mernappapi.onrender.com/v1`,
    },
  ],
};

module.exports = swaggerDef;