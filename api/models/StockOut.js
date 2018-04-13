/**
 * StockOut.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'stockOut',
  attributes: {
    socialcreditCode: {
      type: 'string'
    },
    stockoutNo: {
      type: 'string'
    },
    variety: {
      type: 'string'
    },
    grade: {
      type: 'string'
    },
    production: {
      type: 'string'
    },
    producingYear: {
      type: 'string'
    },
    stockoutCount: {
      type: 'string'
    },
    packing: {
      type: 'string',
      enum: ['包装', '散装']
    },
    carriageType: {
      type: 'string'
    },
    carriageNo: {
      type: 'string'
    },
    stockoutTime: {
      type: 'string'
    },
    //承运方的社会信用代码
    carriage: {
      type: 'string'
    },
    //承运方的名称
    carriageName: {
      type: 'string'
    },
    //运单号
    waybillNo: {
      type: 'string'
    },
    //下游社会信用代码
    downstreamorganizationCode: {
      type: 'string'
    },
    //下游企业名称
    downstreamcompanyName: {
      type: 'string'
    },
    contractNo: {
      type: 'string'
    },
    goodsCode: {
      type: 'string'
    }
  }
};

