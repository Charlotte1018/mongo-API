/**
 * AoController
 *
 * @description :: Server-side logic for managing aos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: (req, res, callback) => {
        let params = req.body;
        let isExitParams1 = {
            socialcreditCode: params.socialcreditCode,
            reservoirNo: params.reservoirNo,
            reservoirName: params.reservoirName,
            stockNo: params.stockNo,
            stockName: params.stockName,
            aoNo: params.aoNo
        }
        let isExitParams2 = {
            socialcreditCode: params.socialcreditCode,
            reservoirNo: params.reservoirNo,
            reservoirName: params.reservoirName,
            stockNo: params.stockNo,
            stockName: params.stockName,
            aoNo: params.aoNo,
            aoName: params.aoName
        }
        async.waterfall([(callback) => {
            Ao.find(isExitParams1).exec((err, result) => {
                if (err) return callback(err);
                if (result.length) {
                    callback(null, true);//即将插入的已经存在
                } else {
                    callback(null, false);
                }
            });
        }, (isExit, callback) => {
            if (!isExit) {
                Ao.find(isExitParams2).exec((err, result) => {
                    if (err) return callback(err);
                    if (result.length) {
                        callback(null, true);//即将插入的已经存在
                    } else {
                        callback(null, false);
                    }
                });
            } else {
                callback(null, isExit);
            };
        }, (isExit, callback) => {
            if (!isExit) {
                Ao.create(params).exec((err, result) => {
                    if (err) return callback(err);
                    callback(null, result);
                })
            } else {
                callback(null, isExit);
            };
        }], (err, result) => {
            if (err) res.send(Message.messages(0, '创建失败！', err));
            if (result === true) {
                res.send(Message.messages(0, '创建失败！', []));
            } else {
                res.send(Message.messages(1, '创建成功', result));
            }
        });
    },
    delete: (req, res) => {
        let params = req.body;
        Ao.destroy(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '删除失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '删除失败！', result));
            res.send(Message.messages(1, '删除成功', result));
        });
    },
    update: (req, res) => {
        let params = { id: req.body.id };
        let updateParams = req.body;
        Ao.update(params, updateParams).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '更新失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '更新失败！', result));
            res.send(Message.messages(1, '更新成功', result));
        });
    },
    find: (req, res) => {
        let params = req.query;
        Ao.find(params || {}).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '查找失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '查找失败！', result));
            res.send(Message.messages(1, '查找成功', result));
        });
    }
};

