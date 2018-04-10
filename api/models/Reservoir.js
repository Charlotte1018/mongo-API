/**
 * Reservoir.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'reservior',
  attributes: {
    //社会信用代码
    socialcreditCode:{
      type:'string',
    },
    reservoirNo:{
      type:'string'
    },
    reservoirName:{
      type:'string'
    },
    QHDM:{
      type:'string'
    },
    province:{
      type:'string'
    },
    city:{
      type:'string'
    },
    county:{
      type:'string'
    },
    town:{
      type:'string'
    },
    postalCode:{
      type:'string'
    }
  }
};

