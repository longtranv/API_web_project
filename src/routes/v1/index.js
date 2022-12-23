const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const cartRoute = require('./cart.route');
const orderRoute = require('./order.route');
const productRoute = require('./product.route');
const paymentRoute = require('./payment.route')
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/cart',
    route: cartRoute,
  },
  {
    path: '/order',
    route: orderRoute,
  },
  {
    path: '/product',
    route: productRoute,
  },
  {
    path: '/payment',
    route: paymentRoute,
  }

];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;