/**
 * StockOutController
 *
 * @description :: Server-side logic for managing stockouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: (req, res, callback) => {
        let params = req.body;
        let isExitParams1 = {
            socialcreditCode: params.socialcreditCode,
            stockoutNo: params.stockoutNo
        }
        async.waterfall([(callback) => {
            StockOut.find(isExitParams1).exec((err, result) => {
                if (err) return callback(err);
                if (result.length) {
                    callback(null, true);//即将插入的已经存在
                } else {
                    callback(null, false);
                }
            });
        }, (isExit, callback) => {
            if (!isExit) {
                StockOut.create(params).exec((err, result) => {
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
        StockOut.destroy(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '删除失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '删除失败！', result));
            res.send(Message.messages(1, '删除成功', result));
        });
    },
    update: (req, res) => {
        let params = { id: req.body.id };
        let updateParams = req.body;
        StockOut.update(params, updateParams).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '更新失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '更新失败！', result));
            res.send(Message.messages(1, '更新成功', result));
        });
    },
    find: (req, res) => {
        let params = req.query;
        StockOut.find(params || {}).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '查找失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '查找失败！', result));
            res.send(Message.messages(1, '查找成功', result));
        });
    }
};

