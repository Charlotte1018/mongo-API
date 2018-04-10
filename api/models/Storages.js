/**
 * Storage.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'storage',
  attributes: {
    socialcreditCode: {
      type: 'string',
      unique: true
    },
    organizationCode: {
      type: 'string',
      unique: true
    },
    companyName: {
      type: 'string',
      unique: true
    },
    password: {
      type: 'string',
    },
    companyType: {
      type: 'string'
    },
    companyLinkman: {
      type: 'string'
    },
    companyTele: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    lealPerson: {
      type: 'string'
    },
    legalID: {
      type: 'string'
    },
    legalTele: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    fax:{
      type: 'string'
    },
    status: {
      type: 'string',
      enum: ['待审核', '审核通过', '审核未通过']
    }
  }
};

