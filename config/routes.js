/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //加工企业接口
  'post /api/processor/register': 'processor.register',
  'post /api/processor/delete': 'processor.delete',
  'post /api/processor/update': 'processor.update',
  'get /api/processor/find': 'processor.find',

  //仓储企业接口
  'post /api/storages/register': 'storages.register',
  'post /api/storages/delete': 'storages.delete',
  'post /api/storages/update': 'storages.update',
  'get /api/storages/find': 'storages.find',

  //物流运输企业接口
  'post /api/carriage/register': 'carriage.register',
  'post /api/carriage/delete': 'carriage.delete',
  'post /api/carriage/update': 'carriage.update',
  'get /api/carriage/find': 'carriage.find',

  //企业客户管理接口
  'post /api/client/add': 'client.add',
  'post /api/client/delete': 'client.delete',
  'post /api/client/update': 'client.update',
  'get /api/client/find': 'client.find',

  //物流运输企业运力接口
  'post /api/carriage/transport/add': 'transport.add',
  'post /api/carriage/transport/delete': 'transport.delete',
  'post /api/carriage/transport/update': 'transport.update',
  'get /api/carriage/transport/find': 'transport.find',

  //物流运输企业司机管理接口
  'post /api/carriage/driver/add': 'driver.add',
  'post /api/carriage/driver/delete': 'driver.delete',
  'post /api/carriage/driver/update': 'driver.update',
  'get /api/carriage/driver/find': 'driver.find',

  //物流企业登记运输信息接口
  'post /api/carriage/carriageInfo/add': 'carriageInfo.add',
  'post /api/carriage/carriageInfo/delete': 'carriageInfo.delete',
  'post /api/carriage/carriageInfo/update': 'carriageInfo.update',
  'get /api/carriage/carriageInfo/find': 'carriageInfo.find',

  //库区管理接口
  'post /api/reservoir/add': 'reservoir.add',
  'post /api/reservoir/delete': 'reservoir.delete',
  'post /api/reservoir/update': 'reservoir.update',
  'get /api/reservoir/find': 'reservoir.find',

  //仓库管理接口
  'post /api/stock/add': 'stock.add',
  'post /api/stock/delete': 'stock.delete',
  'post /api/stock/update': 'stock.update',
  'get /api/stock/find': 'stock.find',

  //廒间管理接口
  'post /api/ao/add': 'ao.add',
  'post /api/ao/delete': 'ao.delete',
  'post /api/ao/update': 'ao.update',
  'get /api/ao/find': 'ao.find',

  //货位管理接口
  'post /api/goods/add': 'goods.add',
  'post /api/goods/delete': 'goods.delete',
  'post /api/goods/update': 'goods.update',
  'get /api/goods/find': 'goods.find',

  //出库管理接口
  'post /api/stockIn/add': 'stockIn.add',
  'post /api/stockIn/delete': 'stockIn.delete',
  'post /api/stockIn/update': 'stockIn.update',
  'get /api/stockIn/find': 'stockIn.find',

  //入库管理接口
  'post /api/stockOut/add': 'stockOut.add',
  'post /api/stockOut/delete': 'stockOut.delete',
  'post /api/stockOut/update': 'stockOut.update',
  'get /api/stockOut/find': 'stockOut.find',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
