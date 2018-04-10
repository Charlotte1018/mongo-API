/**
 * Goods.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'goods',
  attributes: {
    socialcreditCode:{
      type:'string'
    },
    reservoirNo:{
      type:'string'
    },
    reservoirName:{
      type:'string'
    },
    stockNo:{
      type:'string'
    },
    stockName:{
      type:'string'
    },
    aoNo:{
      type:'string'
    },
    aoName:{
      type:'string'
    },
    goodsNo:{
      type:'string'
    },
    goodsName:{
      type:'string'
    },
    sealingMark:{
      type:'string'
    },
    capacity:{
      type:'string'
    }
  }
};

