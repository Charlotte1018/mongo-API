/**
 * Stock.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'stock',
  attributes: {
    socialcreditCode: {
      type: 'string'
    },
    reservoirNo: {
      type: 'string'
    },
    reservoirName: {
      type: 'string'
    },
    stockNo: {
      type: 'string'
    },
    stockName: {
      type: 'string'
    },
    stockType: {
      type: 'string'
    },
    capacity: {
      type: 'string'
    },
    vaildCapacity: {
      type: 'string'
    }
  }
};

