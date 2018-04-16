/**
 * GoodsInfoController
 *
 * @description :: Server-side logic for managing goodsinfoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    add: (req, res) => {
        let params = req.body;
        let isExitParams = {
            socialcreditCode: params.socialcreditCode,
            goodsCode: params.goodsCode
        }
        async.waterfall([(callback) => {
            GoodsInfo.find(isExitParams).exec((err, result) => {
                if (err) return callback(err);
                if (result.length) {
                    callback(null, true, result);//即将插入的已经存在
                } else {
                    callback(null, false, []);//即将插入的不存在，去插入
                }
            });
        }, (isExit, goods, callback) => {
            if (!isExit) {
                GoodsInfo.create(params).exec((err, result) => {
                    if (err) return callback(err);
                    callback(null, isExit, goods, result);
                })
            } else {
                let addCapacity = params.capacity + goods[0].capacity;
                GoodsInfo.update(isExitParams, { capacity: addCapacity }).exec((err, result) => {
                    if (err) return callback(err);
                    callback(null, isExit, goods, result);
                })
            };
        }], (err, isExit, goods, result) => {
            // console.log(`isExit:${isExit},goods:${goods},result:${result}`);
            if (err) res.send(Message.messages(0, '创建失败！', err));
            if (isExit) {
                res.send(Message.messages(1, '更新货位信息成功', {preGoodsInfo: goods, currentGoodsInfo: result }));
            } else {
                res.send(Message.messages(1, '创建成功', result));
            }
        });
    },
    delete: (req, res) => {
        let params = req.body;
        GoodsInfo.destroy(params).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '删除失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '删除失败！', result));
            res.send(Message.messages(1, '删除成功', result));
        });
    },
    update: (req, res) => {
        let params = { id: req.body.id };
        let updateParams = req.body;
        GoodsInfo.update(params, updateParams).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '更新失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '更新失败！', result));
            res.send(Message.messages(1, '更新成功', result));
        });
    },
    find: (req, res) => {
        let params = req.query;
        GoodsInfo.find(params || {}).exec((err, result) => {
            if (err) return res.send(Message.messages(0, '查找失败！', err));
            if (result.length === 0) return res.send(Message.messages(0, '查找失败！', result));
            res.send(Message.messages(1, '查找成功', result));
        });
    }
};

