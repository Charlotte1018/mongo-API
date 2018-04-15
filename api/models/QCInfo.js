/**
 * QCInfo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'QCInfo',
  attributes: {
    //质检社会信用代码
    socialcreditCode: {
      type: 'string'
    },
    //质检企业名称
    companyName: {
      type: 'string'
    },
    //抽检企业社会信用代码
    checksocialcreditCode: {
      type: 'string'
    },
    //抽检企业名称
    checkcompanyName: {
      type: 'string'
    },
    //抽检货位编码
    checkgoodsCode: {
      type: 'string'
    },
    //报告编号
    reportNumber: {
      type: 'string'
    },
    //任务来源
    taskSource: {
      type: 'string'
    },
    //样品名称
    sampleName: {
      type: 'string'
    },
    //样品编号
    sampleNo: {
      type: 'string'
    },
    //任务类型
    taskType: {
      type: 'string'
    },
    //委托单位
    client: {
    },
    //抽样情况
    samplingInfo: {
    },
    //样品概况
    sampleInfo: {
    },
    //抽样日志
    sampleLog: {
      type: 'string'
    },
    //报告日期
    reportDate: {
      type: 'string'
    },
    //检验依据
    testStandard: {
      type: 'string'
    },
    //检验结果
    testResult: {
      type: 'string'
    },
    //检验结论
    testConclusion: {
      type: 'string'
    },
    //说明
    instruction: {
      type: 'string'
    },
    //质量指标
    qualityIndex: {
    },
    //品质指标
    characterIndex: {
    },
    //卫生指标
    healthIndex: {
    },
    isComplete: {
      type: 'boolean'
    }
  }
};

