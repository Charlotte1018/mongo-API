/**
 * GoodsInfo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'goodsInfo',
  attributes: {
    socialcreditCode: {
      type: 'string'
    },
    companyName: {
      type: 'string'
    },
    //货位编码
    goodsCode: {
      type: 'string'
    },
    variety: {
      type: 'string'
    },
    //等级
    grade: {
      type: 'string'
    },
    production: {
      type: 'string'
    },
    producingYear: {
      type: 'string'
    },
    packing: {
      type: 'string',
      enum: ['包装', '散装']
    },
    //当前货位的容量
    capacity: {
      type: 'integer'
    },
    //封仓时间
    sealingMark: {
      type: 'string'
    },
  }
};

