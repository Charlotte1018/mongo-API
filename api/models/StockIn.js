/**
 * StockIn.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'stockIn',
  attributes: {
    socialcreditCode: {
      type: 'string'
    },
    companyName: {
      type: 'string'
    },
    //入库识别码（组织机构代码，货位识别码，封藏时间）
    stockinidentificationCode: {
      type: 'string'
    },
    //入库单号（流水号）唯一
    stockinNo: {
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
    //入库数量
    stockinCount: {
      type: 'integer'
    },
    packing: {
      type: 'string',
      enum: ['包装', '散装']
    },
    //运单号
    waybillNo: {
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
    //运力类型
    carriageType: {
      type: 'string'
    },
    //车号／船号
    carriageNo: {
      type: 'string'
    },
    driverName: {
      type: 'string'
    },
    driverTele: {
      type: 'string'
    },
    stockinTime: {
      type: 'string'
    },
    //上游企业社会信用代码
    upstreamorganizationCode: {
      type: 'string'
    },
    //上游企业名称
    upstreamcompanyName: {
      type: 'string'
    },
    contractNo: {
      type: 'string'
    },
    //货位编码
    goodsCode: {
      type: 'string'
    },
    IPFS: {
      type: 'string'
    },
    //企业推送或者自主录入
    inType: {
      type: 'string',
      enum: ['待办', '自主']
    },
    //是否质检
    QC: {
      type: 'boolean'
    },
  }
};
