/**
 * QCInfoController
 *
 * @description :: Server-side logic for managing Qcinfoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: (req, res) => {
        let params = req.body;
        let isExitParams = {
            checksocialcreditCode: params.checksocialcreditCode,
            checkcompanyName: params.checkcompanyName,
            checkgoodsCode: params.checkgoodsCode
        }
        async.waterfall([(callback) => {
            QCInfo.find(isExitParams).exec((err, result) => {
                if (err) return callback(err);
                if (result.length) {
                    callback(null, true);//即将插入的已经存在
                } else {
                    callback(null, false);
                }
            });
        }, (isExit, callback) => {
            if (!isExit) {
                QCInfo.create(params).exec((err, result) => {
                    if (err) return callback(err);
                    callback(null, isExit, result);
                })
            } else {
                callback(null, isExit, []);
            };
        }], (err, isExit, result) => {
            if (isExit) {
                res.send(Message.messages(0, '创建失败，该货位已抽检！', result));
            } else {
                res.send(Message.messages(1, '创建成功', result));
            }
        });
    },
    delete: (req, res) => {
        let params = req.body;
        QCInfo.destroy(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '删除失败！', err));
            if (!result.length) return res.send(Message.messages(0, '删除失败！', result));
            res.send(Message.messages(1, '删除成功', result));
        });
    },
    update: (req, res) => {
        let params = { id: req.body.id };
        let updateParams = req.body;
        QCInfo.update(params, updateParams).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '更新失败！', err));
            if (!result.length) return res.send(Message.messages(0, '更新失败！', result));
            res.send(Message.messages(1, '更新成功', result));
        });
    },
    find: (req, res) => {
        let params = req.query;
        QCInfo.find(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '查找失败！', err));
            if (!result.length) return res.send(Message.messages(0, '查找失败！', result));
            res.send(Message.messages(1, '查找成功', result));
        });
    }
};

