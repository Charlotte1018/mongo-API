/**
 * Client.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'client',
  attributes: {
    socialcreditCode: {
      type: 'string'
    },
    companysocialcreditCode:{
      type: 'string'
    },
    companyName: {
      type: 'string'
    },
    province: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    lealPerson: {
      type: 'string'
    },
    legalTele: {
      type: 'string'
    },
    companyLinkman: {
      type: 'string'
    },
    companyTele: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    fax: {
      type: 'string'
    }
  }
};

