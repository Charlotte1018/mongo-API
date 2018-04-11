/**
 * Transport.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'transport',
  attributes: {
    socialcreditCode: {
      type: 'string'
    },
    carriageType: {
      type: 'string',
      enum:['汽车','船舶']
    },
    carriageNo: {
      type: 'string',
      unique: true
    }
  }
};

