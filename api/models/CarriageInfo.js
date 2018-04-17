/**
 * CarriageInfo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'carriageInfo',
  attributes: {
    socialcreditCode: {
      type: 'string'
    },
    companyName: {
      type: 'string'
    },
    //运单号
    waybillNo: {
      type: 'string',
      unique: true
    },
    carriageStatus: {
      type: 'string',
      enum: ['在途', '已完成']
    },
    //发货方(企业信用代码)
    shipper: {
      type: 'string'
    },
    //发货方名称
    shipperName: {
      type: 'string'
    },
    //发货时间
    deliveryTime: {
      type: 'string'
    },
    //接受方(企业信用代码)
    receiver: {
      type: 'string'
    },
    //接受方名称
    receiverName: {
      type: 'string'
    },
    //接受时间
    receiverTime: {
      type: 'string'
    },
    contractNo: {
      type: 'string'
    },
    variety: {
      type: 'string'
    },
    startCount: {
      type: 'string'
    },
    endCount: {
      type: 'string'
    },
    packing: {
      type: 'string',
      enum: ['包装', '散装']
    },
    carriageType: {
      type: 'string',
      enum: ['汽车', '船舶']
    },
    carriageNo: {
      type: 'string'
    },
    driverName: {
      type: 'string'
    },
    driverTele: {
      type: 'string'
    },
    inType: {
      type: 'string',
      enum: ['待办', '自主']
    }
  }
};

