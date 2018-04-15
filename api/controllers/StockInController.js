/**
 * StockInController
 *
 * @description :: Server-side logic for managing stockins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: (req, res, callback) => {
        let params = req.body;
        let isExitParams1 = {
            socialcreditCode: params.socialcreditCode,
            stockinNo: params.stockinNo
        }
        let isExitParams2 = {
            socialcreditCode: params.socialcreditCode,
            goodsCode: params.goodsCode
        }
        async.waterfall([(callback) => {
            StockIn.find(isExitParams1).exec((err, result) => {
                if (err) return callback(err);
                if (result.length) {
                    callback(null, true);//即将插入的已经存在
                } else {
                    callback(null, false);
                }
            });
        }, (isExit, callback) => {
            if (!isExit) {
                StockIn.find(isExitParams2).exec((err, result) => {
                    if (err) return callback(err);
                    if (result.length) {
                        callback(null, isExit, true);//有历史货位信息，去更新
                    } else {
                        callback(null, isExit, false);//没有历史货位信息，去插入
                    }
                });
            } else {
                callback(null, isExit, '入库信息已添加，不入库登记');
            };
        }, (isExit, isUpdate, callback) => {
            if (!isExit) {
                if (!isUpdate) {
                    StockIn.create(params).exec((err, result) => {
                        if (err) return callback(err);
                        callback(null, isExit, isUpdate, result);
                    })
                } else {
                    StockIn.update(isExitParams2, params).exec((err, result) => {
                        if (err) return callback(err);
                        callback(null, isExit, isUpdate, result);
                    })
                };
            } else {
                callback(null, isExit, isUpdate, []);
            }

        }], (err, isExit, isUpdate, result) => {
            console.log(`isExit:'${isExit},isUpdate:'${isUpdate},result:'${result}`);
            if (err) res.send(Message.messages(0, '创建失败！', err));
            if (isExit) {
                res.send(Message.messages(0, '入库信息已添加，不入库登记', result));
            } else {
                if (isUpdate) {
                    res.send(Message.messages(1, '更新货位信息成功', result));
                } else {
                    res.send(Message.messages(1, '创建成功', result));
                }
            }
        });
    },
    delete: (req, res) => {
        let params = req.body;
        StockIn.destroy(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '删除失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '删除失败！', result));
            res.send(Message.messages(1, '删除成功', result));
        });
    },
    update: (req, res) => {
        let params = { id: req.body.id };
        let updateParams = req.body;
        StockIn.update(params, updateParams).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '更新失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '更新失败！', result));
            res.send(Message.messages(1, '更新成功', result));
        });
    },
    find: (req, res) => {
        let params = req.query;
        StockIn.find(params || {}).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '查找失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '查找失败！', result));
            res.send(Message.messages(1, '查找成功', result));
        });
    }
};

